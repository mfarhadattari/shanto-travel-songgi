import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { Grid2 as Grid, Box } from "@mui/material";
import MemberCard, { TTeamMember } from "./MemberCard";

const teamMembers: TTeamMember[] = [
  {
    name: "Emma Thompson",
    position: "Founder & Chief Explorer",
    avatar: "/images/emma.jpg",
  },
  {
    name: "Jack Roberts",
    position: "Travel Coordinator",
    avatar: "/images/jack.jpg",
  },
  {
    name: "Sophia Lee",
    position: "Digital Nomad Specialist",
    avatar: "/images/sophia.jpg",
  },
  {
    name: "Liam Johnson",
    position: "Cultural Liaison",
    avatar: "/images/liam.jpg",
  },
  {
    name: "Olivia Martinez",
    position: "Adventure Specialist",
    avatar: "/images/olivia.jpg",
  },
  {
    name: "Ethan Brown",
    position: "Customer Support Guru",
    avatar: "/images/ethan.jpg",
  },
  {
    name: "Ava Wilson",
    position: "Sustainability Advocate",
    avatar: "/images/ava.jpg",
  },
  {
    name: "Mason Davis",
    position: "Technology & Innovation Lead",
    avatar: "/images/mason.jpg",
  },
  {
    name: "Isabella Garcia",
    position: "Wellness & Lifestyle Coach",
    avatar: "/images/isabella.jpg",
  },
];

const OurTeam = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <SectionHeader
        title="Meet Our Team"
        subtitle="Meet the Team Behind Your Next Adventure!"
      />
      <Grid container spacing={4} mt={5}>
        {teamMembers.map((member, idx) => (
          <Grid
            key={idx}
            size={{
              sm: 12,
              md: 4,
            }}
          >
            <MemberCard member={member} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurTeam;
