import { Container } from "@mui/material";
import Hero from "./../../components/UI/home/Hero/Hero";
import TripsSection from "@/components/UI/home/TripsSection/TripsSection";
import FAQSection from "@/components/UI/home/FAQSection/FAQSection";
import ReviewsSection from "@/components/UI/home/ReviewSection/ReviewSection";

const Home = () => {
  return (
    <Container>
      <Hero />
      <TripsSection />
      <FAQSection />
      <ReviewsSection />
    </Container>
  );
};

export default Home;
