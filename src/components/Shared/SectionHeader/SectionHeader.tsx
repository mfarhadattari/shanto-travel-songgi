import { Box, Typography } from "@mui/material";
import React from "react";

type TProps = {
  title: string;
  subtitle?: string;
};

const SectionHeader = ({ title, subtitle }: TProps) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        margin: "10px 0",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "30px",
          textTransform: "uppercase",
        }}
        variant="h5"
        component="h5"
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          sx={{
            fontWeight: 500,
            textTransform: "capitalize",
            color: "text.secondary",
            fontSize: "18px",
          }}
          variant="body1"
          component="p"
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;
