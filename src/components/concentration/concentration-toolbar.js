import React from "react";

import { ToobarButton } from "../toolbar-button";
import styles from "./index.module.scss";

export function ConcentrationToolbar({onPlayButtonPress}) {
  return (
    <div>
      <div className={styles["concentration-toolbar-body"]}>
        <ToobarButton icon="play" handleClick={onPlayButtonPress} />
        <ToobarButton icon="cog" />
      </div>
    </div>
  );
}
