"use client";

import { Typography } from "@mui/material";
import { ReactNode } from "react";

const Copyright = () => {
  return (
    <Typography variant="body2" textAlign="center" color="#FFFFFF" mt={2}>
      &copy; {new Date().getFullYear() as ReactNode} All rights reserved by ST
      Songgi.
    </Typography>
  );
};

export default Copyright;
