import React from "react";

import { InputGroup } from "@blueprintjs/core";

import { ToobarButton } from "../toolbar-button";
import styles from "./index.module.scss";

export function CompoundToolbar() {
  return (
    <div>
      <div className={styles["compound-toolbar-body"]}>
        <ToobarButton icon="plus" toolTip="Add compound" />
        <ToobarButton icon="minus" toolTip="Remove compounds" />
        <ToobarButton icon="refresh" toolTip="Reload compounds" />
        <div className={styles["compound-search-box"]}>
          <InputGroup fill leftIcon="search" placeholder="search compound" />
        </div>
      </div>
    </div>
  );
}
