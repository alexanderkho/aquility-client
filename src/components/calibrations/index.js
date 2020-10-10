import React from "react";

import { MassCalibrationPanel } from "./mass-calibration-panel";
import { ConcentrationCalibrationPanel } from "./concentration-calibration-panel";

export function CalibrationsPanelStack() {
  return (
    <>
      <MassCalibrationPanel />
      <ConcentrationCalibrationPanel />
    </>
  );
}
