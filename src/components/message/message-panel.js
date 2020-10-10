import React from "react";

import { Panel } from "../panel";
import { MessageToolbar } from "./message-toolbar";
import { MessageCardList } from "./message-card";

export function MessagePanel() {
  return (
    <Panel title="MESSAGE CENTER" showFavorited={false}>
      <MessageToolbar />
      <MessageCardList />
    </Panel>
  );
}
