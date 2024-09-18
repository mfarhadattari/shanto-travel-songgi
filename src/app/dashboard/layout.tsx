import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <h1>Dashboard Layout</h1>
      {children}
    </Box>
  );
};

export default DashboardLayout;
