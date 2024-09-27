import Loading from "@/components/UI/loading/Loading";
import { Stack } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height={300}
      width="100%"
    >
      <Loading />
    </Stack>
  );
};

export default Loader;
