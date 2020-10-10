import React from "react";

import styles from "./index.module.scss";
import { ConcentrationPanel } from "../../components";

export function MainView() {
  return (
    <div className={styles["main-view"]}>
      <ConcentrationPanel />
    </div>
  );
}
