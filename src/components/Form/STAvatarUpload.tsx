"use client";

import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Box, SxProps, Input, IconButton, Avatar } from "@mui/material";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type TSTAvatarUpload = {
  name: string;
  sx?: SxProps;
};

const STAvatarUpload = ({ name, sx }: TSTAvatarUpload) => {
  const { control } = useFormContext();
  const [avatar, setAvatar] = useState<string | null>(null);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ...field } }) => (
        <Box component="label" sx={{ ...sx }}>
          <IconButton
            color="primary"
            aria-label="upload avatar"
            component="span"
            style={{
              borderRadius: "50%",
              width: 100,
              height: 100,
            }}
            sx={{
              backgroundColor: "secondary.main",
              mb: 2,
            }}
          >
            {avatar ? (
              <Avatar
                alt="Avatar"
                src={avatar}
                sx={{ width: 70, height: 70 }}
              />
            ) : (
              <PhotoCamera sx={{ fontSize: "30px" }} />
            )}
          </IconButton>
          <Input
            {...field}
            type="file"
            style={{ display: "none" }}
            value={value?.fileName}
            onChange={(e) => {
              setAvatar(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                URL.createObjectURL(
                  (e.target as HTMLInputElement)?.files?.[0] as any,
                ),
              );
              onChange((e.target as HTMLInputElement)?.files?.[0]);
            }}
          />
        </Box>
      )}
    />
  );
};

export default STAvatarUpload;
