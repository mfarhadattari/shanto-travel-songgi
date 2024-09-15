import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <Box
      height={400}
      my={6}
      sx={{
        backgroundColor: "secondary.dark",
        borderRadius: "24px",
        paddingTop: "70px",
        textAlign: "center",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box sx={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
        <Typography
          component="h1"
          variant="h4"
          style={{
            textTransform: "uppercase",
            fontWeight: 800,
            marginBottom: "10px",
          }}
        >
          Find you travel friends
        </Typography>
        <Typography
          component="p"
          variant="body1"
          style={{
            fontWeight: 500,
          }}
        >
          Connect with like-minded travelers who share your interests and
          destinations. Plan your next adventure together, share expenses, and
          make lasting memories.
        </Typography>
        <Button
          component={Link}
          href="/dashboard/post-trip"
          sx={{
            marginTop: "48px",
          }}
        >
          Share Your Trip Plan
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
