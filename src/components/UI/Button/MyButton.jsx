import React from "react";

import Button from "@mui/material/Button";

export const MyButton = ({ children, ...props }) => {
  return (
    <Button {...props} variant="outlined">
      {children}
    </Button>
  );
};
