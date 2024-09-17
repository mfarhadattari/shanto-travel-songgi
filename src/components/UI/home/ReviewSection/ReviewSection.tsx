"use client";

import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import ReviewCard from "./ReviewCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

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
  return (
    <Box
      style={{
        margin: "120px 0",
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
    </Box>
  );
};

export default ReviewsSection;
