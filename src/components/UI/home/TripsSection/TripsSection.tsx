import config from "@/config";
import { Box, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TripCard from "./TripCard";

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
    <Container
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
        {trips.map((trip: any) => (
          <Grid key={trip.id} size={{ xs: 12, md: 6 }}>
            <TripCard trip={trip} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TripsSection;
