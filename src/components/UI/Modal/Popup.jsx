import React from "react";

import classes from "./Popup.module.css";

export const Popup = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.popup];
  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.popupContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
