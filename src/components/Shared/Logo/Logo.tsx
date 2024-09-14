import { Box, Typography } from "@mui/material";
import React from "react";

const Logo = () => {
  return (
    <Typography
      variant="h4"
      style={{
        fontWeight: "bold",
        background: "-webkit-linear-gradient(#e65c00, #f9d423)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      S
      <Box component="span" color="yellow">
        T
      </Box>{" "}
      Songgi
    </Typography>
  );
};

export default Logo;
