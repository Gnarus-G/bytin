import { Delete, Edit, Save } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Theme,
  useMediaQuery,
} from "@mui/material";
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
        fullScreen={useMediaQuery((theme: Theme) =>
          theme.breakpoints.down("sm")
        )}
      >
        <DialogContent>
          <DialogTitle sx={{ px: 0 }}>Edit snippet #{snippet.id}</DialogTitle>
          <EditSnippet
            formId={EditSnippet.name}
            snippet={snippet}
            onSuccess={editFormDialogState.close}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-between" }}>
          <Button
            variant="text"
            color="inherit"
            onClick={editFormDialogState.close}
          >
            Cancel
          </Button>
          <Button
            form={EditSnippet.name}
            variant="text"
            startIcon={<Save />}
            type="submit"
          >
            Save
          </Button>
        </DialogActions>
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
