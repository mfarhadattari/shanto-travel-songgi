import { Container } from "@mui/material";
import Hero from "./../../components/UI/home/Hero/Hero";
import TripsSection from "@/components/UI/home/TripsSection/TripsSection";
import FAQSection from "@/components/UI/home/FAQSection/FAQSection";

const Home = () => {
  return (
    <Container>
      <Hero />
      <TripsSection />
      <FAQSection />
    </Container>
  );
};

export default Home;
