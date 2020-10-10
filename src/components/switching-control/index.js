import React from "react";

import { Button, ButtonGroup, Intent, Collapse } from "@blueprintjs/core";

import { Panel } from "../panel";
import { ToobarButton } from "../toolbar-button";
import styles from "./index.module.scss";
import { ManualSwitchingTable } from "./manual-switching-table";
import {
  AutoSwitchingTable,
  AutoSwitchingTableContent
} from "./auto-switching-table";

function SwitchingHead({ mode, setMode }) {
  return (
    <div>
      <div className={styles["switching-head"]}>
        <ButtonGroup>
          <Button
            intent={mode === "AUTO" ? Intent.PRIMARY : null}
            onClick={() => setMode("AUTO")}
            text="AUTO"
          />
          <Button
            intent={mode === "MANUAL" ? Intent.PRIMARY : null}
            onClick={() => setMode("MANUAL")}
            text="MANUAL"
          />
        </ButtonGroup>
      </div>
    </div>
  );
}

function AutoMode() {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleClick() {
    setIsOpen(prev => !prev);
  }

  return (
    <>
      <div className={styles["switching-toolbar"]}>
        <ToobarButton icon="plus" toolTip="Add setfile" />
      </div>

      <div className={styles["switching-toolbar"]}>
        <ButtonGroup>
          <Button text="2020-10-20.switch" />
          <Button
            rightIcon={isOpen ? "chevron-up" : "chevron-down"}
            onClick={handleClick}
          />
        </ButtonGroup>
      </div>

      <Collapse
        className={styles["panel-main"]}
        isOpen={isOpen}
        keepChildrenMounted
      >
        <AutoSwitchingTable />
      </Collapse>

      <AutoSwitchingTableContent />
    </>
  );
}

function ManualMode() {
  return (
    <>
      <div className={styles["switching-toolbar"]}>
        <ToobarButton icon="plus" toolTip="Add setfile" />
      </div>
      <ManualSwitchingTable />
    </>
  );
}

function SwitchingPanel() {
  const [mode, setMode] = React.useState("MANUAL");
  return (
    <Panel title="SWITCHING">
      <SwitchingHead mode={mode} setMode={setMode} />
      {mode === "AUTO" ? <AutoMode /> : <ManualMode />}
    </Panel>
  );
}

export function SwitchingPanelStack() {
  return (
    <>
      <SwitchingPanel />
    </>
  );
}
