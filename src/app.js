import React from "react";

import { MenuView, MainView, MessageView } from "./views";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles["app-container"]}>
      <MenuView />
      <MainView />
      <MessageView />
    </div>
  );
}

export default App;
