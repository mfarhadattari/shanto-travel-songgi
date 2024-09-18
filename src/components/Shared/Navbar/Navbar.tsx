import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <Box
      bgcolor="secondary.main"
      height={350}
      style={{
        width: "100%",
      }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          {/* ------------ Logo ------------- */}
          <Logo />

          {/* ------------ Nav links ------------ */}
          <Stack direction="row" alignItems="center" spacing={4}>
            <Typography
              component={Link}
              href="/trips"
              color="text.secondary"
              style={{
                fontSize: "16px",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Trips
            </Typography>
            <Typography
              component={Link}
              href="/about"
              color="text.secondary"
              style={{
                fontSize: "16px",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              About us
            </Typography>
            <Typography
              component={Link}
              href="/dashboard"
              color="text.secondary"
              style={{
                fontSize: "16px",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Dashboard
            </Typography>
            <Typography
              component={Link}
              href="/dashboard/profile"
              color="text.secondary"
              style={{
                fontSize: "16px",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Profile
            </Typography>
          </Stack>
          {/* ------------ Nav Button ------------ */}
          <Button component={Link} href="/login">
            Login
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
