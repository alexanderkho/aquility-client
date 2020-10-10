import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, ButtonGroup, InputGroup } from "@blueprintjs/core";

import styles from "./index.module.scss";
import { HelpPanel } from "../help-panel";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(0.5)
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

export function CalibrantListTable() {
  const [isInsertingNewRow, setIsInsertingNewRow] = React.useState(false);
  const [currentValue, setCurrentValue] = React.useState({
    name: null,
    mass: null
  });
  const [inputsAreValid, setInputsAreValid] = React.useState(false);

  const [rows, setRows] = React.useState([
    { name: "Benzene", mass: "79" },
    { name: "Acetone", mass: "59" },
    { name: "Xylene", mass: "99" },
    { name: "MVK", mass: "158" }
  ]);

  const classes = useStyles();
  const headCells = [
    { id: "actions", numeric: false, label: "Actions" },
    { id: "name", numeric: false, label: "Name" },
    { id: "mass", numeric: false, label: "Mass" }
  ];

  function handleClickDelete(index) {
    setRows(prev => {
      const newRows = prev.map(row => Object.assign({}, row));
      newRows.splice(index, 1);
      return newRows;
    });
  }

  function handleClickAdd() {
    setIsInsertingNewRow(prev => !prev);
    setInputsAreValid(false);
  }

  function resetValues() {
    setIsInsertingNewRow(false);
    setCurrentValue({ name: null, mass: null });
    setInputsAreValid(false);
  }

  function handleClickTick() {
    setRows(prev => {
      return [...prev, Object.assign({}, currentValue)];
    });
    resetValues();
  }

  function handleClickCancel() {
    resetValues();
  }

  function handleInputChange(event, key) {
    const newValue = event.target.value;
    setCurrentValue(prev => {
      const output = { ...prev, [key]: newValue };
      if (output.name && output.mass) {
        setInputsAreValid(true);
      }
      return output;
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
              {rows.map((row, index) => {
                return (
                  <TableRow tabIndex={-1} key={index}>
                    <TableCell align="left">
                      {
                        <Button
                          disabled={isInsertingNewRow}
                          icon="trash"
                          minimal
                          onClick={() => handleClickDelete(index)}
                        />
                      }
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.mass}</TableCell>
                  </TableRow>
                );
              })}
              {isInsertingNewRow && (
                <TableRow tabIndex={-1}>
                  <TableCell align="left">
                    <ButtonGroup>
                      <Button
                        icon="tick"
                        disabled={!inputsAreValid}
                        minimal
                        onClick={handleClickTick}
                      />
                      <Button
                        icon="cross"
                        minimal
                        onClick={handleClickCancel}
                      />
                    </ButtonGroup>
                  </TableCell>
                  <TableCell align="left">
                    <div className={styles["edit-box"]}>
                      <InputGroup
                        autoFocus
                        fill
                        value={currentValue.name}
                        onChange={event => handleInputChange(event, "name")}
                      />
                    </div>
                  </TableCell>
                  <TableCell align="left">
                    <div className={styles["edit-box"]}>
                      <InputGroup
                        fill
                        type="number"
                        value={currentValue.mass}
                        onChange={event => handleInputChange(event, "mass")}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              )}
              <TableRow tabIndex={-1}>
                <TableCell align="left">
                  <Button
                    disabled={isInsertingNewRow}
                    icon="insert"
                    minimal
                    onClick={handleClickAdd}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export function SettingsTable() {
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const [currentValue, setCurrentValue] = React.useState(null);
  const [valueChanged, setValueChanged] = React.useState(false);
  const [helpIsOpen, setHelpIsOpen] = React.useState(false);

  const [rows, setRows] = React.useState([
    { name: "FWHM Low Factor", value: 2 },
    { name: "FWHM High Factor", value: 2 },
    { name: "Peak Search Range", value: 100 },
    { name: "Acquisition Duration", value: 20 },
    { name: "Nominal Resolution", value: 10000 },
    { name: "Zero Gas Flow", value: 30 },
    { name: "Calibration Gas Flow", value: 5 }
  ]);

  const classes = useStyles();
  const headCells = [
    { id: "actions", numeric: false, label: "Actions" },
    { id: "name", numeric: false, label: "Name" },
    { id: "value", numeric: false, label: "Value" }
  ];

  function resetValues() {
    setActiveIndex(-1);
    setValueChanged(false);
    setCurrentValue(null);
  }

  function handleInputChange(event) {
    const value = event.target.value;
    setCurrentValue(value);
    setValueChanged(true);
  }

  function handleClickTick(index) {
    setRows(prev => {
      const newRows = prev.map(row => Object.assign({}, row));
      newRows[index].value = currentValue;
      return newRows;
    });
    resetValues();
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
                    {headCell.label === "Name" && (
                      <Button
                        icon="help"
                        minimal
                        onClick={() => setHelpIsOpen(true)}
                      />
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                return (
                  <TableRow tabIndex={-1} key={index}>
                    <TableCell align="left" size="small">
                      {activeIndex >= 0 && index === activeIndex ? (
                        <ButtonGroup>
                          <Button
                            icon="tick"
                            disabled={!valueChanged || !currentValue}
                            minimal
                            onClick={() => handleClickTick(index)}
                          />
                          <Button icon="cross" minimal onClick={resetValues} />
                        </ButtonGroup>
                      ) : (
                        <Button
                          icon="edit"
                          disabled={activeIndex >= 0 && index !== activeIndex}
                          minimal
                          onClick={() => {
                            setActiveIndex(index);
                            setCurrentValue(row.value);
                          }}
                        />
                      )}
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left" size="small">
                      {activeIndex >= 0 && index === activeIndex ? (
                        <div className={styles["edit-box"]}>
                          <InputGroup
                            autoFocus
                            fill
                            type="number"
                            value={currentValue}
                            onChange={handleInputChange}
                          />
                        </div>
                      ) : (
                        row.value
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {helpIsOpen && (
        <HelpPanel
          title="Mass Calibration"
          onClose={() => setHelpIsOpen(false)}
          content={
            <>
              <p>
                <strong>Mass Calibration Settings</strong>
              </p>
              <p>FWHM: Full width at half maximum.</p>
            </>
          }
        />
      )}
    </div>
  );
}

export function ParametersTable() {
  const classes = useStyles();
  const rows = [
    { name: "mode", value: 0 },
    { name: "p0", value: 1000 },
    { name: "p1", value: 2000 }
  ];
  const headCells = [
    { id: "name", numeric: false, label: "Name" },
    { id: "value", numeric: false, label: "Value" }
  ];

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
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.value}</TableCell>
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
