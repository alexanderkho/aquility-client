import React from "react";

import styles from "./index.module.scss";
import { MenuBar } from "./menu-bar";
import { MenuPanel } from "./menu-panel";

export function MenuView() {
  const [currentPanelStack, setCurrentPanelStack] = React.useState(null);

  return (
    <div className={styles["menu-view"]}>
      <MenuBar setCurrentPanelStack={setCurrentPanelStack} />
      <MenuPanel>{currentPanelStack}</MenuPanel>
    </div>
  );
}
