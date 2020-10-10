import React from "react";

import styles from "./index.module.scss";
import { MessagePanel } from "../../components";

export function MessageView() {
  return (
    <div className={styles["panel-container"]}>
      <MessagePanel />
    </div>
  );
}
