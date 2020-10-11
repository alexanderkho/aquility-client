import React from "react";

import { ToobarButton } from "../toolbar-button";
import styles from "./index.module.scss";

export function ConcentrationToolbar({ onPlayButtonPress, listening }) {
  return (
    <div>
      <div className={styles["concentration-toolbar-body"]}>
        <ToobarButton
          icon={listening ? "pause" : "play"}
          handleClick={onPlayButtonPress}
          toolTip={
            listening ? "Pause Data Collection" : "Begin Data Collection"
          }
        />
        <ToobarButton icon="cog" />
      </div>
    </div>
  );
}
