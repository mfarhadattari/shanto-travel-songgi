"use client";

import { useGetTripsQuery } from "@/redux/api/tripsApi";
import { TResTrip } from "@/types";
import { Box, Button, Grid2 as Grid, Pagination, Stack } from "@mui/material";
import TripDetailsCard from "./TripDetailsCard";
import Loader from "@/components/Shared/Loader/Loader";
import SearchBox from "@/components/Shared/SearchBox/SearchBox";
import { useState } from "react";

const AllTrips = () => {
  const { data, isLoading } = useGetTripsQuery({});
  const trips = data?.data || [];
  const meta = data?.meta;
  const [searchTerm, setSearchTerm] = useState<string>("");
  console.log(searchTerm);

  /* 
  TODO: Searching and filtering. pagination functionality
  */
  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mt={5}
      >
        <Button>Filter Trips</Button>
        <Box
          sx={{
            width: 400,
          }}
        >
          <SearchBox handelChange={setSearchTerm} label="Search Trips" />
        </Box>
      </Stack>
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
          count={meta?.total / meta?.limit || 0}
          page={meta?.page}
          variant="outlined"
        />
      </Stack>
    </Box>
  );
};

export default AllTrips;
