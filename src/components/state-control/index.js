import React from "react";

import { Panel } from "../panel";
import { SelectorButton } from "../selector-button";
import { ProgressBar } from "../progress-bar";


function CurrentStatePanel() {
  const [currentState, setCurrentState] = React.useState("READY");
  const stateList = ["READY", "SLEEP", "HIBERNATE"];

  function handleSelect(nexState) {
    setCurrentState(nexState);
  }

  return (
    <Panel title="CURRENT STATE">
      <SelectorButton
        selectedObject={currentState}
        selectionList={stateList}
        handleClick={handleSelect}
      />
    </Panel>
  );
}

function ConditionsPanel() {
  return (
    <Panel title="CONDITIONS">
      <ProgressBar title="Item One" percentage={50} />
      <ProgressBar title="Item two" percentage={50} />
      <ProgressBar title="Item three" percentage={50} />
    </Panel>
  );
}

export function StateControlPanelStack() {
  return (
    <>
      <CurrentStatePanel />
      <ConditionsPanel />
    </>
  );
}
