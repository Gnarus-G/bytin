import React, { useState } from "react"
import MuiAlert, { Color, AlertProps } from "@material-ui/lab/Alert";

export type AlertMessage = {
    type: Extract<Color, "success" | "error">
    text: string
}

export default function Alert({ message, style, ...props }: { message: AlertMessage } & AlertProps) {
    const { type, text } = message;
    return text && <MuiAlert severity={type} style={{ margin: "1rem 2rem", ...style }} {...props}>{text}</MuiAlert> || null
}

export function useAlertMessage() {
    return useState<AlertMessage>({ type: null as any, text: "" })
}