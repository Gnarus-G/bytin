import { Delete, Edit, Save } from "@mui/icons-material";
import { Button, Dialog, DialogContent, Grid, IconButton } from "@mui/material";
import ConfirmDialog from "components/utils/ConfirmDialog";
import { SnippetFragment, useDeleteSnippetMutation } from "generated/graphql";
import useDialog from "lib/hooks/useDialog";
import React from "react";
import EditSnippet from "./editSnippet";

export default function PrivateActions({
  snippet,
}: {
  snippet: SnippetFragment;
}) {
  const deleteDialogState = useDialog();
  const editFormDialogState = useDialog();

  const [, deleteSnippet] = useDeleteSnippetMutation();

  return (
    <>
      <Grid container justifyContent="space-between">
        <IconButton color="error" edge="start" onClick={deleteDialogState.open}>
          <Delete />
        </IconButton>
        <IconButton color="info" edge="end" onClick={editFormDialogState.open}>
          <Edit />
        </IconButton>
      </Grid>

      <Dialog
        open={editFormDialogState.isOpen}
        onClose={editFormDialogState.close}
        fullWidth
      >
        <DialogContent>
          <EditSnippet
            formId={EditSnippet.name}
            snippet={snippet}
            onSuccess={editFormDialogState.close}
          />
          <Button
            form={EditSnippet.name}
            style={{ float: "right" }}
            variant="contained"
            startIcon={<Save />}
            type="submit"
          >
            Save
          </Button>
        </DialogContent>
      </Dialog>
      <ConfirmDialog
        open={deleteDialogState.isOpen}
        title="Are you sure?"
        onCancel={deleteDialogState.close}
        onConfirm={() =>
          deleteSnippet({ where: { id: snippet.id } }).then(
            deleteDialogState.close
          )
        }
        cancelBtnText="Cancel"
        confirmBtnText="Delete"
      >
        Deleting a snippet is a permanent action. Cancel or confirm.
      </ConfirmDialog>
    </>
  );
}
