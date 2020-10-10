import React from "react";

import { Panel } from "../panel";
import { CalibrationToolbar } from "./calibration-toolbar";
import { ProfilesTable } from "./concentration-calibration-tables";

export function ConcentrationCalibrationPanel() {
  return (
    <Panel title="CONCENTRATION CALIBRATION">
      <CalibrationToolbar />
      <ProfilesTable />
    </Panel>
  );
}
