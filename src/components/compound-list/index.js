import React from "react";

import { Panel } from "../panel";
import { EnhancedTable } from "./compound-table";
import { CompoundToolbar } from "./compound-toolbar";

export function CompoundListPanel() {
  return (
    <Panel title="COMPOUND LIST">
      <CompoundToolbar />
      <EnhancedTable />
    </Panel>
  );
}

export function CompoundListPanelStack() {
  return (
    <>
      <CompoundListPanel />
    </>
  );
}
