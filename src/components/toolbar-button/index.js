import React from "react";

import { Button, Tooltip, Position, Intent } from "@blueprintjs/core";
import styles from "./index.module.scss";

export function ToobarButton({ icon, toolTip, handleClick=() => {} }) {
  return (
    <Tooltip
      content={toolTip}
      position={Position.BOTTOM_RIGHT}
      className={styles["toolbar-button"]}
      intent={Intent.PRIMARY}
    >
      <Button className={styles["toolbar-button"]} icon={icon} onClick={handleClick} />
    </Tooltip>
  );
}
