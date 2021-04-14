import React from "react";
import { Link } from "react-router-dom";
import { useGlobalStyles } from "../utils/styles";
import { Typography } from "@material-ui/core";

export default function Copyright() {
  const classes = useGlobalStyles();
  return (
    <Typography
      variant="h6"
      color="textSecondary"
      align="center"
      className={classes.main}
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        Stevia
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
