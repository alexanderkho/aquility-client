import React from "react";

import styles from "./index.module.scss";

export function ProgressBar(props) {
  const title = props.title || "Title";
  // const width = props.width || 200;

  let percentage = props.percentage;
  if (percentage === undefined) {
    let setpoint = Math.abs(props.setpoint);
    let setpointInReady = Math.abs(props.setpointInReady);
    if (setpoint === 0) {
      setpoint = setpointInReady;
    }
    let readpoint = Math.abs(props.readpoint);
    let min_value = Math.min(setpoint, readpoint);
    let max_value = Math.max(setpoint, readpoint);
    if (min_value === 0 && max_value === 0) {
      percentage = 0;
    } else {
      percentage = (min_value / max_value) * 100;
    }
  }

  return (
    <div className={styles["progress-bar"]}>
      <div
        className={styles["bar-filler"]}
        style={{ width: `${percentage}%` }}
      />
      <div className={styles["bar-title"]}>{title}</div>
    </div>
  );
}
