import { Container } from "@mui/material";
import Hero from "./../../components/UI/home/Hero/Hero";
import TripsSection from "@/components/UI/home/TripsSection/TripsSection";

const Home = () => {
  return (
    <Container>
      <Hero />
      <TripsSection />
    </Container>
  );
};

export default Home;
