import OurMission from "@/components/UI/about/OurMission/OurMission";
import WhyUs from "@/components/UI/about/WhyUs/WhyUs";
import { Container } from "@mui/material";

const AboutPage = () => {
  return (
    <Container>
      <OurMission />
      <WhyUs />
    </Container>
  );
};

export default AboutPage;
