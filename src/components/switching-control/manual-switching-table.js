import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import { Button, ButtonGroup } from "@blueprintjs/core";

function createData(setfile, profile) {
  return { setfile, profile };
}

const rows = [
  createData("2020-10-20.set", "H3O"),
  createData("2020-10-21.set", "H3Om"),
  createData("2020-10-22.set", "H3O"),
  createData("2020-10-23.set", "H3O")
];

const headCells = [
  { id: "actions", numeric: false, label: "Actions" },
  { id: "setfile", numeric: false, label: "Setfile" },
  { id: "profile", numeric: false, label: "Profile" },
  { id: "select", numeric: false, label: "Select" }
];

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(0)
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

export function ManualSwitchingTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

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
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow tabIndex={-1} key={row.setfile + row.profile}>
                      <TableCell align="left">
                        {
                          <ButtonGroup>
                            <Button icon="edit" minimal />
                            <Button icon="trash" minimal />
                          </ButtonGroup>
                        }
                      </TableCell>
                      <TableCell align="left">{row.setfile}</TableCell>
                      <TableCell align="left">{row.profile}</TableCell>
                      <TableCell align="left">
                        {<Radio size="small" color="primary" />}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 33 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 100, 200]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage="Rows"
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
