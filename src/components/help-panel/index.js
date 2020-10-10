import React from "react";

import { Drawer, Classes } from "@blueprintjs/core";

export function HelpPanel({ title, onClose, content }) {
  return (
    <Drawer
      icon="help"
      onClose={onClose}
      title={title}
      isOpen
    >
      <div className={Classes.DRAWER_BODY}>
        <div className={Classes.DIALOG_BODY}>{content}</div>
      </div>
    </Drawer>
  );
}
