import { InputAdornment, TextField } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import SearchIcon from "@mui/icons-material/Search";

type TProps = {
  label: string;
  handelChange: Dispatch<SetStateAction<string>>;
};

const SearchBox = ({ label, handelChange }: TProps) => {
  return (
    <TextField
      type="search"
      fullWidth
      label={label}
      placeholder={label}
      onChange={(e) => handelChange(e.target.value)}
      slotProps={{
        input: {
          sx: {
            backgroundColor: "secondary.main",
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SearchBox;
