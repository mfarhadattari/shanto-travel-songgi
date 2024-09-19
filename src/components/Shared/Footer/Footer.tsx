import { Box, Container, Stack, Typography } from "@mui/material";
import Logo from "../Logo/Logo";
import Link from "next/link";
import Copyright from "./Copyright";
import Social from "../Social/Social";

const Footer = () => {
  return (
    <Box bgcolor="primary.main" color="#FFFFFF">
      <Container
        sx={{
          padding: "40px 0 10px",
        }}
      >
        {/* ------------ Links ------------- */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography
            component={Link}
            href="/travels"
            color="#FFFFFF"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            Travels
          </Typography>
          <Typography
            component={Link}
            href="/about"
            color="#FFFFFF"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            About us
          </Typography>
          <Typography
            component={Link}
            href="/dashboard"
            color="#FFFFFF"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            Dashboard
          </Typography>
          <Typography
            component={Link}
            href="/dashboard/profile"
            color="#FFFFFF"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            Profile
          </Typography>
        </Stack>
        {/* ------------ Logo ------------- */}
        <Box textAlign="center" justifyContent="center" mt={2}>
          <Logo />
          <Typography
            variant="body2"
            style={{
              color: "#FFFFFF",
            }}
          >
            Find you travel friends
          </Typography>
        </Box>
        <Social />
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
