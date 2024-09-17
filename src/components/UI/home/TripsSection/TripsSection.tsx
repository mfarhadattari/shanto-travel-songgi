import config from "@/config";
import { Box, TextField, Stack, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TripCard from "./TripCard";
import { TResTrip } from "@/types";
import Link from "next/link";

const TripsSection = async () => {
  const res = await fetch(
    `${config.base_api}/trips?limit=10&page=1&sortBy=createdAt`,
    {
      cache: "force-cache",
    },
  );
  const data = await res.json();
  const trips = data.data || [];

  return (
    <Box
      style={{
        position: "relative",
        top: "-30px",
        zIndex: "100",
      }}
    >
      {/* --------- Search Bar ----------- */}
      <Box
        style={{
          width: "50%",
          margin: "0 auto",
        }}
      >
        <TextField
          fullWidth
          placeholder="Search your travel"
          slotProps={{
            input: {
              style: {
                backgroundColor: "#FFFFFF",
                padding: "5px 0",
                borderRadius: "16px",
              },
            },
          }}
        />
      </Box>

      {/* ----------- Trips Cards ------------- */}
      <Grid mt={10} container spacing={5}>
        {trips.map((trip: TResTrip) => (
          <Grid key={trip.id} size={{ xs: 12, md: 6 }}>
            <TripCard trip={trip} />
          </Grid>
        ))}
      </Grid>
      {/* ----------- See More Button ------------- */}
      <Stack direction="row" justifyContent="center" mt={5}>
        <Button component={Link} href="/trips">
          See More Post
        </Button>
      </Stack>
    </Box>
  );
};

export default TripsSection;
