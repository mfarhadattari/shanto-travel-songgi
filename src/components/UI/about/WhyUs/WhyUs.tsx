import { Box, Grid2 as Grid, Icon, Paper, Typography } from "@mui/material";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import GroupIcon from "@mui/icons-material/Group";
import SafetyDividerIcon from "@mui/icons-material/SafetyDivider";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ExploreIcon from "@mui/icons-material/Explore";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import LanguageIcon from "@mui/icons-material/Language";

const reasons = [
  {
    title: "Find the Perfect Travel Buddy",
    description:
      "We match you with like-minded travelers to share unforgettable experiences around the world.",
    icon: <GroupIcon />,
  },
  {
    title: "Safety and Trust",
    description:
      "Our platform ensures a secure environment where travelers can meet, plan, and explore safely.",
    icon: <SafetyDividerIcon />,
  },
  {
    title: "Expert Travel Support",
    description:
      "Our dedicated support team is here 24/7 to assist you with your journey, wherever you go.",
    icon: <SupportAgentIcon />,
  },
  {
    title: "Exclusive Travel Deals",
    description:
      "Unlock special travel deals and discounts that make your adventures more affordable and fun.",
    icon: <AirplaneTicketIcon />,
  },
  {
    title: "Explore New Destinations",
    description:
      "Discover hidden gems and popular hotspots with curated travel plans for every kind of adventurer.",
    icon: <ExploreIcon />,
  },
  {
    title: "Premium Experiences",
    description:
      "Get access to premium, tailor-made travel experiences that suit your style and preferences.",
    icon: <StarBorderIcon />,
  },
  {
    title: "Flexible Travel Plans",
    description:
      "Plan your trips with maximum flexibility, making it easy to adjust schedules and itineraries as needed.",
    icon: <EventAvailableIcon />,
  },
  {
    title: "Global Community",
    description:
      "Join a global community of travelers who share your passion for exploration and adventure.",
    icon: <PublicIcon />,
  },
  {
    title: "Trusted Reviews and Ratings",
    description:
      "Rely on traveler reviews and ratings to ensure you’re making the best choices for your journeys.",
    icon: <ThumbUpIcon />,
  },
  {
    title: "Eco-Friendly Travel Options",
    description:
      "We prioritize eco-conscious travel options, allowing you to explore while minimizing your environmental footprint.",
    icon: <NaturePeopleIcon />,
  },
  {
    title: "Affordable Adventures",
    description:
      "Whether you're on a budget or looking to splurge, we offer a wide range of travel options to suit your needs.",
    icon: <AttachMoneyIcon />,
  },
  {
    title: "Multilingual Support",
    description:
      "Our platform offers multilingual support, ensuring seamless communication and assistance no matter where your travels take you.",
    icon: <LanguageIcon />,
  },
];

const WhyUs = () => {
  return (
    <Box sx={{ my: 16 }}>
      <SectionHeader
        title="Why Travel With Us?"
        subtitle="Discover why thousands of travelers choose us as their go-to platform for unforgettable travel experiences."
      />
      <Grid container spacing={4} justifyContent="center" mt={5}>
        {reasons.map((reason, index) => (
          <Grid
            key={index}
            size={{
              sm: 12,
              md: 4,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
                borderRadius: "8px",
                backgroundColor: "secondary.main",
              }}
            >
              <Icon sx={{ mb: 2 }} fontSize="large">
                {reason.icon}
              </Icon>
              <Typography variant="h6" gutterBottom>
                {reason.title}
              </Typography>
              <Typography variant="body1">{reason.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyUs;
