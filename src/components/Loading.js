import { Backdrop, CircularProgress } from "@mui/material";

export const Loading = ({ open }) => {
  return (
    <Backdrop
      sx={{ color: "primary", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
