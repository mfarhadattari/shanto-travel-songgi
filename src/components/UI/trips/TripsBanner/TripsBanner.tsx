import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { Box, Stack } from "@mui/material";

const TripsBanner = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "secondary.dark",
        height: 350,
        borderRadius: 3,
        marginTop: "60px",
      }}
    >
      <Box
        sx={{
          width: "50%",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <SectionHeader
          title="Explore New Adventures"
          subtitle="Discover unique destinations & plan your perfect getaway"
        />
      </Box>
    </Stack>
  );
};

export default TripsBanner;
