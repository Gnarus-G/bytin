// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark as codeStyle } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  scroller: {
    overflow: "auto",

    //For firefox
    scrollbarColor: `${theme.palette.primary.light} rgba(0,0,0,.10)`,
    scrollbarWidth: "thin",

    //for chrome/Safari
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
      WebkitBoxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
      borderRadius: 10,
      backgroundColor: "transparent",
    },

    "&::-webkit-scrollbar": {
      width: 6,
      height: 9,
      borderRadius: 10,
      backgroundColor: "transparent",
    },

    "&::-webkit-scrollbar-thumb": {
      borderRadius: 10,
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, .3)",
      WebkitBoxShadow: "inset 0 0 6px rgba(0, 0, 0, .3)",
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

export default function CodeView({ language, children, freeHeight }) {
  const classes = useStyles();

  const heightStyle = !freeHeight && {
    maxHeight: "20rem",
    minHeight: "15rem",
  };

  language = language && language.toLowerCase();

  return (
    <SyntaxHighlighter
      className={classes.scroller}
      language={language}
      style={codeStyle}
      customStyle={{ ...heightStyle }}
    >
      {children}
    </SyntaxHighlighter>
  );
}
