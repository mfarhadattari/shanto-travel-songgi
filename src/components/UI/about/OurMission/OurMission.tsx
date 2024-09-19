import assets from "@/assets";
import { Grid2 as Grid, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const OurMission = () => {
  return (
    <Box
      sx={{
        marginTop: 10,
        marginBottom: 0,
      }}
    >
      <Grid container spacing={3}>
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
          sx={{
            backgroundColor: "secondary.dark",
            padding: "20px",
            borderRadius: "24px",
          }}
        >
          <Image
            src={assets.travelImage}
            alt="Our Mission"
            height={400}
            width={400}
            style={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.25)",
            }}
          />
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
          sx={{
            backgroundColor: "secondary.dark",
            padding: "40px",
            borderRadius: "24px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "fit-content",
              }}
            >
              <Typography
                variant="h5"
                component="h5"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 800,
                }}
              >
                Travel Together, Share the Journey
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  fontSize: "20px",
                  fontWeight: 500,
                }}
              >
                Connecting solo travelers with like-minded companions to create
                shared adventures, meaningful experiences, and lasting
                friendships as they explore new destinations and cultures around
                the world.
              </Typography>
              <Button
                component={Link}
                href="/trips"
                style={{
                  marginTop: "16px",
                }}
              >
                Browse Trips
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurMission;
