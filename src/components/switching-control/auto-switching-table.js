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

const rows = [
  { switchingFile: "2020-10-20.switch" },
  { switchingFile: "2020-10-21.switch" },
  { switchingFile: "2020-10-22.switch" },
  { switchingFile: "2020-10-23.switch" },
  { switchingFile: "2020-10-24.switch" }
];

const headCells = [
  { id: "actions", numeric: false, label: "Actions" },
  { id: "switchingFile", numeric: false, label: "Switching file" },
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

export function AutoSwitchingTable() {
  const classes = useStyles();

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
              {rows.map((row, index) => {
                return (
                  <TableRow tabIndex={-1} key={index}>
                    <TableCell align="left">
                      {
                        <ButtonGroup>
                          <Button icon="edit" minimal />
                          <Button icon="trash" minimal />
                        </ButtonGroup>
                      }
                    </TableCell>
                    <TableCell align="left">{row.switchingFile}</TableCell>
                    <TableCell align="left">
                      {<Radio size="small" color="primary" />}
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

const rowsForContent = [
  { profile: "H3O", setfile: "2020-10-10.set", duration: 20 },
  { profile: "H3O", setfile: "2020-10-11.set", duration: 30 },
  { profile: "H3O", setfile: "2020-10-12.set", duration: 20 },
  { profile: "H3O", setfile: "2020-10-13.set", duration: 50 }
];

const headCellsForContent = [
  { id: "profile", numeric: false, label: "Profile" },
  { id: "setfile", numeric: false, label: "Setfile" },
  { id: "duration", numeric: true, label: "Duration" },
  { id: "status", numeric: false, label: "Status" }
];

export function AutoSwitchingTableContent() {
  const classes = useStyles();

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
                {headCellsForContent.map(headCell => (
                  <TableCell key={headCell.id} align="left" padding="default">
                    {headCell.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsForContent.map((row, index) => {
                return (
                  <TableRow tabIndex={-1} key={index}>
                    <TableCell align="left">{row.profile}</TableCell>
                    <TableCell align="left">{row.setfile}</TableCell>
                    <TableCell align="left">{row.duration}</TableCell>
                    <TableCell align="left">
                      {<Radio size="small" color="primary" />}
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
