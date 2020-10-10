import React from "react";

import { Button, Intent, Tooltip, Position } from "@blueprintjs/core";

import styles from "./index.module.scss";
import { Logo } from "../../components";
import {
  CompoundListPanelStack,
  StateControlPanelStack,
  SwitchingPanelStack,
  CalibrationsPanelStack
} from "../../components";

const panelStacks = {
  INSTRUMENT_STATE: <StateControlPanelStack />,
  COMPOUND_LIST: <CompoundListPanelStack />,
  SWITCHING: <SwitchingPanelStack />,
  CALIBRATIONS: <CalibrationsPanelStack />,
};

function MenuBarButton({
  className,
  icon,
  menuName,
  toolTip,
  selectedMenu,
  setSelectedMenu,
  setCurrentPanelStack
}) {
  function handleClick() {
    let _name = null;
    let _panels = null;
    if (menuName !== selectedMenu) {
      _name = menuName;
      _panels = panelStacks[menuName];
    }
    setSelectedMenu(_name);
    setCurrentPanelStack(_panels);
  }

  return (
    <Tooltip
      content={toolTip}
      position={Position.BOTTOM_RIGHT}
      className={className}
      intent={Intent.PRIMARY}
    >
      <Button
        className={className}
        icon={icon}
        intent={menuName === selectedMenu ? Intent.PRIMARY : Intent.NONE}
        onClick={handleClick}
      />
    </Tooltip>
  );
}

const MENU_LIST = [
  {
    icon: "star",
    menuName: "FAVORITE",
    toolTip: "Favorites"
  },
  {
    icon: "application",
    menuName: "INSTRUMENT_STATE",
    toolTip: "Instrument state"
  },
  {
    icon: "regression-chart",
    menuName: "CALIBRATIONS",
    toolTip: "Calibrations"
  },
  {
    icon: "flow-branch",
    menuName: "SWITCHING",
    toolTip: "Switching"
  },
  {
    icon: "properties",
    menuName: "COMPOUND_LIST",
    toolTip: "Compound list"
  }
];

export function MenuBar({ setCurrentPanelStack }) {
  const [selectedMenu, setSelectedMenu] = React.useState(null);

  return (
    <div className={styles["menu-bar"]}>
      <div className={styles["button-group-container-top"]}>
        <div className={styles["logo-container"]}>
          <Logo />
        </div>
        {MENU_LIST.map(menuItem => (
          <MenuBarButton
            key={menuItem.menuName}
            className={styles["button-container-top"]}
            icon={menuItem.icon}
            toolTip={menuItem.toolTip}
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            menuName={menuItem.menuName}
            setCurrentPanelStack={setCurrentPanelStack}
          />
        ))}
      </div>
      <div className={styles["button-group-container-bottom"]}>
        <MenuBarButton
          className={styles["button-container-bottom"]}
          icon="cog"
          menuName="CONFIG"
          toolTip="Configuration"
        />
        <MenuBarButton
          className={styles["button-container-bottom"]}
          icon="help"
          menuName="HELP"
          toolTip="Help"
        />
      </div>
    </div>
  );
}
