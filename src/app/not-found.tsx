"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography
        variant="h1"
        style={{
          fontWeight: "bold",
        }}
      >
        404
      </Typography>
      <Typography variant="h4">Oops! Page not found.</Typography>
      <Stack direction="row" spacing={3}>
        <Button component={Link} href="/" startIcon={<HomeIcon />}>
          Home
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            router.back();
          }}
          style={{
            backgroundColor: "#ffffff",
          }}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </Stack>
    </Box>
  );
};

export default NotFoundPage;
