import {
  Typography,
  CardContent,
  Card,
  Avatar,
  Rating,
  Stack,
  Box,
} from "@mui/material";
import dayjs from "dayjs";

type TProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  review: any;
};

const ReviewCard = ({ review }: TProps) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "secondary.dark",
        borderRadius: "16px",
        boxShadow: "none",
        height: "200px",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        style={{
          padding: "16px 16px 0px 16px",
        }}
      >
        <Stack direction="row" alignItems="center" gap={2}>
          <Avatar src={review.user.avatar || "/"} alt={review.user.username} />
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: "18px",
              }}
            >
              {review.user.username}
            </Typography>
            <Typography variant="body2">
              {dayjs(review.createdAt).format("DD MMMM YYYY")}
            </Typography>
          </Box>
        </Stack>

        <Rating
          value={review.rating}
          sx={{
            fontSize: "20px",
          }}
          readOnly
        />
      </Stack>
      <CardContent
        sx={{
          marginTop: "0px",
        }}
      >
        <Typography variant="body1">{review.comments.split(0, 200)}</Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
