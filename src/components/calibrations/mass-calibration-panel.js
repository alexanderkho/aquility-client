import React from "react";

import { Spinner, Intent, Collapse } from "@blueprintjs/core";

import styles from "./index.module.scss";
import { ToobarButton } from "../toolbar-button";
import { Panel } from "../panel";
import {
  CalibrantListTable,
  ParametersTable,
  SettingsTable
} from "./mass-calibration-tables";

function CalibrationToolbar({ setConfigIsOpen }) {
  function handleClick() {
    setConfigIsOpen(prev => !prev);
  }

  return (
    <div>
      <div className={styles["calibration-toolbar"]}>
        <ToobarButton
          icon="cog"
          toolTip="configurations"
          handleClick={handleClick}
        />
        <ToobarButton icon="play" toolTip="start/stop mass calibration" />
        <Spinner
          className={styles["calibration-spinner"]}
          size={25}
          value={0.5}
          intent={Intent.PRIMARY}
        />
      </div>
    </div>
  );
}

export function MassCalibrationPanel() {
  const [configIsOpen, setConfigIsOpen] = React.useState(false);

  return (
    <Panel title="MASS CALIBRATION">
      <CalibrationToolbar setConfigIsOpen={setConfigIsOpen} />
      <Collapse isOpen={configIsOpen}>
        <label className={styles["calibration-label"]}>CALIBRANTS</label>
        <CalibrantListTable />
        <label className={styles["calibration-label"]}>SETTINGS</label>
        <SettingsTable />
      </Collapse>
      <label className={styles["calibration-label"]}>PARAMETERS</label>
      <ParametersTable />
    </Panel>
  );
}
