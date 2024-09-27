"use client";

import { useGetTripsQuery } from "@/redux/api/tripsApi";
import { TResTrip } from "@/types";
import { Box, Grid2 as Grid, Pagination, Stack } from "@mui/material";
import TripDetailsCard from "./TripDetailsCard";
import Loader from "@/components/Shared/Loader/Loader";

const AllTrips = () => {
  const { data, isLoading } = useGetTripsQuery({});
  const trips = data?.data || [];
  return (
    <Box>
      {/* ----------- Trips Cards ------------- */}
      <Grid mt={10} container spacing={5}>
        {isLoading ? (
          <Loader />
        ) : (
          trips?.map((trip: TResTrip) => (
            <Grid key={trip.id} size={{ xs: 12, md: 6 }}>
              <TripDetailsCard trip={trip} />
            </Grid>
          ))
        )}
      </Grid>
      {/* ----------- Pagination ------------- */}
      <Stack direction="row" justifyContent="end" mt={5}>
        <Pagination
          count={data?.meta?.total || 0}
          page={data?.meta?.page}
          variant="outlined"
        />
      </Stack>
    </Box>
  );
};

export default AllTrips;
