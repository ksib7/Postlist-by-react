import React from "react";

import cl from "./Card.module.css";

export const Card = ({ children }) => {
  return (
    <div className={cl.card}>
      <div className={cl.cardInner}>{children}</div>
    </div>
  );
};
