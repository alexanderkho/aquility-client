import React from "react";

import styles from "./index.module.scss";

export function MenuPanel({ children }) {
  return children ? (
    <div className={styles["menu-panel"]}>
      {children}
    </div>
  ) : null;
}
