import React from "react";

import Box from "@mui/material/Box";
import { LinearProgress } from "@mui/material";

export const Preloader = () => {
  return (
    <Box sx={{ width: "100%", marginTop: "10px" }}>
      <LinearProgress />
    </Box>
  );
};
