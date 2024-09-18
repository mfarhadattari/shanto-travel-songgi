"use client";

import {
  Box,
  Button,
  Grid2 as Grid,
  Rating,
  Stack,
  // TextField,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import ReviewCard from "./ReviewCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import assets from "@/assets";
import { useState } from "react";
import { TextareaAutosize } from "@mui/base";

const reviews = [
  {
    id: "1",
    user: {
      username: "John Doe",
    },
    createdAt: "2024-09-15",
    rating: 4.5,
    comments:
      "Great product! Highly recommended. lorem Sint nostrud anim sunt cillum adipisicing ipsum velit proident consequat qui aute officia elit deserunt.",
  },
  {
    id: "2",
    user: {
      username: "Jane Smith",
    },
    createdAt: "2024-09-16",
    rating: 3.0,
    comments:
      "It was okay, but could have been better. Duis non do aliqua nostrud aute tempor deserunt eu.",
  },
  {
    id: "3",
    user: {
      username: "Alex White",
    },
    createdAt: "2024-09-14",
    rating: 5.0,
    comments:
      "Absolutely fantastic! Exceeded expectations. Labore ipsum occaecat aliquip voluptate eu laboris minim adipisicing enim dolor quis incididunt Lorem irure.",
  },
  {
    id: "4",
    user: {
      username: "Chris Parker",
    },
    createdAt: "2024-09-13",
    rating: 2.0,
    comments:
      "Not what I expected. Quite disappointed. Voluptate ipsum consectetur eu reprehenderit anim eu non eu.",
  },
  {
    id: "5",
    user: {
      username: "Sara Lee",
    },
    createdAt: "2024-09-17",
    rating: 4.0,
    comments:
      "Good quality, but shipping took too long. Do cillum labore officia reprehenderit officia ex anim sit do eu proident magna tempor.",
  },
];

const ReviewsSection = () => {
  const [value, setValue] = useState<number | null>(2);
  return (
    <Box
      style={{
        marginTop: "120px",
      }}
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        autoplay={true}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
        style={{
          height: "100%",
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review.id}
            style={{
              height: "100%",
            }}
          >
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Grid container mt={10} justifyContent="center" alignItems="center">
        <Grid
          size={{
            sm: 12,
            md: 6,
          }}
        >
          <Image src={assets.reviewUI} alt="Review" />
        </Grid>
        <Grid
          size={{
            sm: 12,
            md: 6,
          }}
        >
          <Box
            sx={{
              backgroundColor: "secondary.main",
              padding: "24px",
              borderRadius: "16px",
              width: "75%",
              margin: "0 auto",
            }}
          >
            <Typography
              variant="h5"
              component="h5"
              style={{
                textTransform: "uppercase",
              }}
            >
              Review Us
            </Typography>
            <Stack
              sx={{
                marginTop: 2,
              }}
              spacing={2}
            >
              <Box>
                <Typography component="legend">Rating: </Typography>
                <Rating
                  name="Raring"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  sx={{
                    marginTop: 1,
                    fontSize: "30px",
                  }}
                />
              </Box>
              <Box>
                <Typography component="legend">Comments: </Typography>
                <TextareaAutosize
                  style={{
                    marginTop: 1,
                    width: "100%",
                    borderRadius: "8px",
                    padding: "10px",
                    resize: "none",
                    fontSize: "16px",
                  }}
                  minRows={3}
                  maxRows={5}
                />
              </Box>
              <Button>Submit</Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewsSection;
