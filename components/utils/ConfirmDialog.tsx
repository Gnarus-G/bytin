import {
  Dialog,
  DialogActions,
  Button,
  Typography,
  DialogTitle,
} from "@mui/material";
import React from "react";

interface ConfirmDialogProps {
  title: string;
  cancelBtnText: string;
  confirmBtnText: string;
  btnColor?: string;
  open: boolean;
  onCancel: VoidFunction;
  onConfirm: VoidFunction;
  children: string;
}

export default function ConfirmDialog(props: ConfirmDialogProps) {
  const {
    title,
    confirmBtnText,
    cancelBtnText,
    open,
    onCancel,
    onConfirm,
    children,
  } = props;
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>{title}</DialogTitle>
      <Typography variant="body1" align="center" style={{ padding: 20 }}>
        {children}
      </Typography>
      <DialogActions>
        <Button onClick={onCancel} color="secondary">
          {cancelBtnText}
        </Button>
        <Button onClick={onConfirm} color="error" autoFocus>
          {confirmBtnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
