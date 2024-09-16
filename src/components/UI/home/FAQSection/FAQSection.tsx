import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid2 as Grid,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import assets from "@/assets";
import Image from "next/image";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";

type TFaq = {
  title: string;
  content: string;
};

const faqs: TFaq[] = [
  {
    title: "What is Shanto Travel Songgi?",
    content:
      "Travel Buddy is a platform that helps you find and connect with other travelers who share similar interests, destinations, and travel plans.",
  },
  {
    title: "How do I create a profile?",
    content:
      "You can create a profile by signing up with your email. Once registered, you can fill in your personal details.",
  },
  {
    title: "Is Shanto Travel Songgi free to use?",
    content:
      "Yes, Shanto Travel Songgi offers free registration and most of its features are free to use.",
  },
  {
    title: "How do I find travel buddies?",
    content:
      "You can find travel buddies by browsing, filtering, searching based on destinations, travel dates, or interests.",
  },
  {
    title: "Is my personal information safe?",
    content:
      "Yes, we take your privacy and security seriously. Your personal information is protected, and we provide privacy settings that allow you to control what information is visible to others.",
  },
];

const FAQSection = () => {
  return (
    <Box mt={16}>
      <SectionHeader
        title="Frequently asked question"
        subtitle="What question on your mind?"
      />
      <Grid container mt={10}>
        <Grid size={{ xs: 12, md: 6 }}>
          {faqs.map((faq: TFaq, idx) => (
            <Accordion
              sx={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                padding: "10px 0",
                backgroundColor: "secondary.main",
              }}
              key={idx}
              defaultExpanded={idx === 0}
            >
              <AccordionSummary
                sx={{
                  fontSize: "18px",
                  cursor: "pointer",
                  color: "text.secondary",
                }}
                expandIcon={<ExpandMoreIcon />}
              >
                {faq.title}
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  width: "85%",
                  textAlign: "justify",
                }}
              >
                {faq.content}
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Image src={assets.faq} alt="FAQ" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQSection;
