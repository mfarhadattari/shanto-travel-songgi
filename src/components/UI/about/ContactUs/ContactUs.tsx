import assets from "@/assets";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { Box, Grid2 as Grid, Typography, Stack } from "@mui/material";
import Image from "next/image";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import Social from "@/components/Shared/Social/Social";

const ContactUs = () => {
  return (
    <Box
      sx={{
        marginTop: 10,
        marginBottom: 0,
      }}
    >
      <SectionHeader title="Contact Us" subtitle="Get in Touch with Us!" />
      <Grid container mt={5} alignItems="center" justifyContent="center">
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Box
              sx={{
                width: "fit-content",
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneEnabledIcon />
                <Typography variant="h5" component="h4">
                  +880 15000 00000
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center" my={2}>
                <EmailIcon />
                <Typography variant="h5" component="h4">
                  info@st-songgi.com
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <PlaceIcon />
                <Typography variant="h5" component="h4">
                  Dhaka, 1234, Bangladesh
                </Typography>
              </Stack>
            </Box>
            <Social />
          </Stack>
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Image src={assets.contactImage} alt="Contact Us" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
