"use client";

import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TSTInput = {
  name: string;
  label: string;
  type?: string;
  fullWidth?: boolean;
  sx?: SxProps;
};

const STInput = ({
  name,
  label,
  type = "text",
  fullWidth = true,
  sx,
}: TSTInput) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth={fullWidth}
          label={label}
          type={type}
          placeholder={label}
          autoComplete="none"
          sx={{
            backgroundColor: "secondary.main",
            mb: 2,
            ...sx,
          }}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default STInput;
