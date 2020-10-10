import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import { Button, ButtonGroup } from "@blueprintjs/core";

const headCells = [
  { id: "actions", numeric: false, label: "Actions" },
  { id: "profile", numeric: false, label: "Profile" },
  { id: "select", numeric: false, label: "Select" }
];

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(1)
  },
  table: {
    minWidth: 200
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  }
}));

export function ProfilesTable() {
  const classes = useStyles();

  const [profileList, setProfileList] = React.useState([
    { name: "H3O", selected: true },
    { name: "NO", selected: false },
    { name: "O2", selected: false }
  ]);

  function handleClickRadio(indexSelected) {
    setProfileList(prev => {
      return prev.map((item, index) => {
        const newItem = Object.assign({}, item);
        newItem.selected = indexSelected === index;
        return newItem;
      });
    });
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="small"
            aria-label="enhanced table"
          >
            <TableHead>
              <TableRow>
                {headCells.map(headCell => (
                  <TableCell key={headCell.id} align="left" padding="default">
                    {headCell.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {profileList.map((profile, index) => {
                return (
                  <TableRow tabIndex={-1} key={index}>
                    <TableCell align="left">
                      {<Button icon="edit" minimal />}
                    </TableCell>
                    <TableCell align="left">{profile.name}</TableCell>
                    <TableCell align="left">
                      {
                        <Radio
                          size="small"
                          color="primary"
                          checked={profile.selected}
                          onClick={() => handleClickRadio(index)}
                        />
                      }
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
