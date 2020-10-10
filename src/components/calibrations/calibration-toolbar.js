import React from "react";

import { Spinner, Intent } from "@blueprintjs/core";

import { ToobarButton } from "../toolbar-button";
import styles from "./index.module.scss";

export function CalibrationToolbar({toolTip}) {
  return (
    <div>
      <div className={styles["calibration-toolbar"]}>
        <ToobarButton icon="play" toolTip={toolTip} />
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