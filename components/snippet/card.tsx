import { FileCopy, Share, ZoomOutMap } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardProps,
  Dialog,
  DialogProps,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import { SnippetFragment } from "generated/graphql";
import useDialog from "lib/hooks/useDialog";
import React, { useState } from "react";
import CodeView from "./CodeView";

interface SnippetCardProps extends CardProps {
  snippet: SnippetFragment;
  freeHeight?: boolean;
  noExpand?: boolean;
  afterDelete?: () => void;
}

export default function SnippetCard({
  snippet,
  freeHeight,
  noExpand,
  afterDelete,
  ...rest
}: SnippetCardProps) {
  const { id, title, language, framework, code, description, resource, owner } =
    snippet;

  const [showCopySnack, setCopySnackDisplay] = useState(false);
  const [showShareSnack, setShareSnackDisplay] = useState(false);
  const [showDeleteSnack, setDeleteSnackDisplay] = useState(false);

  const {
    open: openSnippetDialog,
    isOpen: snippetDialogIsOpen,
    close: closeSnippetDialog,
  } = useDialog();

  return (
    <Card {...rest}>
      <CardHeader
        title={title}
        titleTypographyProps={{ "aria-label": `snippet titled, '${title}'` }}
        subheader={framework || `vanilla ${language}`}
      />
      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <IconButton
          aria-label="share the snippet"
          onClick={() => {
            navigator.clipboard.writeText("https://bytin.tech/snippets/" + id);
            setShareSnackDisplay(true);
          }}
        >
          <Share />
        </IconButton>
        <div>
          {!noExpand && (
            <IconButton
              aria-label="expand the code snippet"
              onClick={openSnippetDialog}
            >
              <ZoomOutMap />
            </IconButton>
          )}
          <IconButton
            color="primary"
            aria-label="copy the snippet"
            onClick={() => {
              navigator.clipboard.writeText(code);
              setCopySnackDisplay(true);
            }}
          >
            <FileCopy />
          </IconButton>
        </div>
      </CardActions>
      <CardContent>
        <CodeView language={language} freeHeight={freeHeight}>
          {code}
        </CodeView>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="right">
          {" - by " + owner.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button href={resource} target="blank" color="secondary" size="small">
          Learn More
        </Button>
      </CardActions>

      <Snackbar
        open={showCopySnack}
        onClose={() => setCopySnackDisplay(false)}
        message="Code snippet copied!"
      />
      <Snackbar
        open={showShareSnack}
        onClose={() => setShareSnackDisplay(false)}
        message="Snippet link copied!"
      />
      <Snackbar
        open={showDeleteSnack}
        onClose={() => setDeleteSnackDisplay(false)}
        message="Snippet was deleted!"
      />

      <SnippetDialog
        open={snippetDialogIsOpen}
        onClose={closeSnippetDialog}
        snippet={snippet}
      />
    </Card>
  );
}

function SnippetDialog(props: DialogProps & { snippet: SnippetFragment }) {
  const { snippet } = props;
  return (
    <Dialog {...props} fullWidth>
      <SnippetCard snippet={snippet} noExpand />
    </Dialog>
  );
}
