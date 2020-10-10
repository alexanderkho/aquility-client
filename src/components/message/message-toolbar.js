import React from "react";

import { ToobarButton } from "../toolbar-button";
import styles from "./index.module.scss";

export function MessageToolbar() {
  return (
    <div>
      <div className={styles["message-toolbar-body"]}>
        <ToobarButton icon="trash" />
        <ToobarButton icon="manually-entered-data" />
        <ToobarButton icon="export" />
      </div>
    </div>
  );
}
