import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  }
}));

function MessageCard({ intention, message, handleClose }) {
  return (
    <Alert severity={intention} onClose={handleClose}>
      {message}
    </Alert>
  );
}

export function MessageCardList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MessageCard
        intention="warning"
        handleClose={() => {}}
        message="2020-10-20 10:09:08 Concentration: encountered an error!"
      />
      <MessageCard
        intention="success"
        handleClose={() => {}}
        message="2020-10-20 10:09:08 Concentration: encountered an error!"
      />
      <MessageCard
        intention="info"
        handleClose={() => {}}
        message="2020-10-20 10:09:08 Concentration: encountered an error!"
      />
      <MessageCard
        intention="error"
        handleClose={() => {}}
        message="2020-10-20 10:09:08 Concentration: encountered an error!"
      />
      <MessageCard
        intention="warning"
        handleClose={() => {}}
        message="2020-10-20 10:09:08 Concentration: encountered an error!"
      />
      <MessageCard
        intention="success"
        handleClose={() => {}}
        message="2020-10-20 10:09:08 Concentration: encountered an error!"
      />
      <MessageCard
        intention="info"
        handleClose={() => {}}
        message="2020-10-20 10:09:08 Concentration: encountered an error!"
      />
      <MessageCard
        intention="error"
        handleClose={() => {}}
        message="2020-10-20 10:09:08 Concentration: encountered an error!"
      />
      <MessageCard
        intention="warning"
        handleClose={() => {}}
        message="2020-10-20 10:09:08 Concentration: encountered an error!"
      />
      <MessageCard
        intention="success"
        handleClose={() => {}}
        message="2020-10-20 10:09:08 Concentration: encountered an error!"
      />
      <MessageCard
        intention="info"
        handleClose={() => {}}
        message="2020-10-20 10:09:08 Concentration: encountered an error!"
      />
      <MessageCard
        intention="error"
        handleClose={() => {}}
        message="2020-10-20 10:09:08 Concentration: encountered an error!"
      />
    </div>
  );
}
