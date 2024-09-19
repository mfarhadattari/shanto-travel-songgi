import OurMission from "@/components/UI/about/OurMission/OurMission";
import OurTeam from "@/components/UI/about/OurTeam/OurTeam";
import WhyUs from "@/components/UI/about/WhyUs/WhyUs";
import { Container } from "@mui/material";

const AboutPage = () => {
  return (
    <Container>
      <OurMission />
      <WhyUs />
      <OurTeam />
    </Container>
  );
};

export default AboutPage;
