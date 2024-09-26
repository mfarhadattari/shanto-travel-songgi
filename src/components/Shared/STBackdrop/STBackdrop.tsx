import { Backdrop, CircularProgress } from "@mui/material";

const STBackdrop = ({ open }: { open: boolean }) => {
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default STBackdrop;
