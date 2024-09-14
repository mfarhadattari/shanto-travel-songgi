import config from "@/config";
import { Box, Button } from "@mui/material";

export default async function Home() {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textTransform: "uppercase",
      }}
    >
      <h1>Welcome to {config.app_name}</h1>
      <Button>Get Started</Button>
    </Box>
  );
}
