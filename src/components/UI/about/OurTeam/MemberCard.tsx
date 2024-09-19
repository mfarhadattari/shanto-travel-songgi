import { Avatar, Card, CardContent, Typography } from "@mui/material";

export type TTeamMember = {
  name: string;
  position: string;
  avatar: string;
};

type TProps = {
  member: TTeamMember;
};

const MemberCard = ({ member }: TProps) => {
  return (
    <Card
      sx={{
        backgroundColor: "secondary.main",
        textAlign: "center",
        padding: 2,
        borderRadius: "16px",
        boxShadow: "none",
      }}
    >
      <Avatar
        alt={member.name}
        src={member.avatar || ""}
        sx={{ width: 100, height: 100, margin: "0 auto", fontSize: "50px" }}
      />
      <CardContent>
        <Typography variant="h6" component="h6">
          {member.name}
        </Typography>
        <Typography variant="subtitle1">{member.position}</Typography>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
