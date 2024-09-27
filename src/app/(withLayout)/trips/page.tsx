import AllTrips from "@/components/UI/trips/AllTrips/AllTrips";
import TripsBanner from "@/components/UI/trips/TripsBanner/TripsBanner";
import { Container } from "@mui/material";

const TripsPage = () => {
  return (
    <Container>
      <TripsBanner />
      <AllTrips />
    </Container>
  );
};

export default TripsPage;
