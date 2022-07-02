import { Alert, Stack } from "@mui/material";
import React from "react";

export const ErrorMessage = ({ children }) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert variant="outlined" severity="error">
          {children}
        </Alert>
      </Stack>
    </div>
  );
};
