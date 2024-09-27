import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import {
  CardContent,
  Card,
  Button,
  Typography,
  Chip,
  Stack,
  Box,
} from "@mui/material";
import dayjs from "dayjs";
import { TResTrip } from "@/types";

type TProps = {
  trip: TResTrip;
};

const TripDetailsCard = ({ trip }: TProps) => {
  return (
    <Card
      sx={{
        backgroundColor: "secondary.main",
        boxShadow: "none",
        padding: "16px",
        borderRadius: "24px",
      }}
    >
      <Image
        src={trip.photos[0] || assets.defaultTripsPic}
        alt={trip.destination}
        height={300}
        width={300}
        style={{
          width: "100%",
          borderRadius: "16px 16px 0px 0px",
        }}
      />
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Typography variant="h5" component="div" textTransform="capitalize">
            {trip.destination}
          </Typography>
          <Chip
            label={trip.type}
            sx={{
              textTransform: "capitalize",
              fontWeight: 600,
            }}
          />
        </Stack>
        <Typography
          variant="body2"
          sx={{
            color: "text.primary",
            textAlign: "justify",
            marginTop: "10px",
          }}
        >
          {trip.description.slice(0, 200)}
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          style={{
            margin: "16px 0",
            fontWeight: "bold",
          }}
        >
          <Chip label={dayjs(trip.startDate).format("DD MMMM YYYY")} />
          <Box component="span">TO</Box>
          <Chip label={dayjs(trip.endDate).format("DD MMMM YYYY")} />
        </Stack>
        <Button sx={{ mt: 3 }} component={Link} href={`/trips/${trip.id}`}>
          Trip Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default TripDetailsCard;
