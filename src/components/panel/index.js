import React from "react";

import { Button, Collapse } from "@blueprintjs/core";

import styles from "./index.module.scss";

function HeadBar({
  title,
  showFavorited = true,
  isFavorited,
  isOpen,
  handleClickOpenClose
}) {
  return (
    <div className={styles["panel-title-bar"]}>
      {title}
      <div>
        {showFavorited && (
          <Button icon={isFavorited ? "star" : "star-empty"} small minimal />
        )}
        <Button
          icon={isOpen ? "chevron-up" : "chevron-down"}
          small
          minimal
          onClick={handleClickOpenClose}
        />
      </div>
    </div>
  );
}

export function Panel({ title, showFavorited, children }) {
  const [isOpen, setIsOpen] = React.useState(true);

  function handleClickOpenClose() {
    setIsOpen(prev => !prev);
  }

  return (
    <div className={styles["panel-body"]}>
      <HeadBar
        title={title}
        showFavorited={showFavorited}
        isFavorited={false}
        isOpen={isOpen}
        handleClickOpenClose={handleClickOpenClose}
      />
      <Collapse
        className={styles["panel-main"]}
        isOpen={isOpen}
        keepChildrenMounted
      >
        <div className={styles["panel-container"]}>{children}</div>
      </Collapse>
    </div>
  );
}
