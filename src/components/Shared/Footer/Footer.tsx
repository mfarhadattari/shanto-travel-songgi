import { Box, Container, Stack, Typography } from "@mui/material";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";
import assets from "@/assets";

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
            Find you travel partner
          </Typography>
        </Box>
        {/* ----------- Social ------------- */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          mt={3}
        >
          <Link href="https//www.facebook.com" target="_blank">
            <Image
              src={assets.facebookIcon}
              alt="Facebook"
              height={30}
              width={30}
            />
          </Link>
          <Link href="https//www.linkedin.com" target="_blank">
            <Image
              src={assets.linkedinIcon}
              alt="linkedin"
              height={30}
              width={30}
            />
          </Link>
          <Link href="https//www.instagram.com" target="_blank">
            <Image
              src={assets.instagramIcon}
              alt="instagram"
              height={30}
              width={30}
            />
          </Link>
          <Link href="https//www.twitter.com" target="_blank">
            <Image
              src={assets.twitterIcon}
              alt="Twitter"
              height={30}
              width={30}
            />
          </Link>
        </Stack>

        <Typography variant="body2" textAlign="center" color="#FFFFFF" mt={2}>
          &copy; {new Date().getFullYear() as ReactNode} All rights reserved by
          ST Songgi.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
