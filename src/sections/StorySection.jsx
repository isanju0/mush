import { useEffect, useState } from "react";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import { storySlides } from "../assets/constants";
import SectionWrapper from "../components/SectionWrapper";

function StorySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % storySlides.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + storySlides.length) % storySlides.length,
    );
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % storySlides.length);
  };

  return (
    <SectionWrapper
      id="story"
      eyebrow="Our Story"
      title="Grown with patience, picked with care"
      subtitle="At The Market Bowl, our journey began close to the earth — with mushroom farming.
      What started as a small effort to grow fresh, high-quality produce soon became a deeper exploration into mindful food, clean ingredients, and the way nourishment should truly feel: simple, honest, and refined."
    >
      <Paper
        elevation={1}
        sx={{
          overflow: "hidden",
          bgcolor: "background.paper",
          border: "1px solid #e6ece5",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            minHeight: { xs: 280, md: 420 },
            bgcolor: "#111",
          }}
        >
          {storySlides.map((slide, index) => (
            <Box
              key={slide.title}
              component="img"
              src={slide.image}
              alt={slide.title}
              loading="lazy"
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: activeIndex === index ? 1 : 0,
                transform: activeIndex === index ? "scale(1)" : "scale(1.04)",
                transition: "opacity 700ms ease, transform 900ms ease",
              }}
            />
          ))}

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(19,29,20,0.72), rgba(19,29,20,0.15))",
            }}
          />

          {/* <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ position: "absolute", inset: 0, alignItems: "center", px: { xs: 1, md: 2 } }}
          >
            <IconButton
              onClick={goToPrevious}
              aria-label="Previous story image"
              sx={{ bgcolor: "rgba(255,255,255,0.85)", "&:hover": { bgcolor: "rgba(255,255,255,1)" } }}
            >
              {"<"}
            </IconButton>
            <IconButton
              onClick={goToNext}
              aria-label="Next story image"
              sx={{ bgcolor: "rgba(255,255,255,0.85)", "&:hover": { bgcolor: "rgba(255,255,255,1)" } }}
            >
              {">"}
            </IconButton>
          </Stack> */}
        </Box>

        <Box sx={{ p: { xs: 2.4, md: 3.2 }, borderTop: "1px solid #e6ece5" }}>
          <Typography
            key={`title-${activeIndex}`}
            variant="h6"
            sx={{
              mb: 1,
              color: "text.primary",
              animation: "fadeSlide 600ms ease",
            }}
          >
            {storySlides[activeIndex].title}
          </Typography>
          <Typography
            key={`caption-${activeIndex}`}
            sx={{
              color: "text.secondary",
              lineHeight: 1.75,
              animation: "fadeSlide 700ms ease",
            }}
          >
            {storySlides[activeIndex].caption}
          </Typography>
        </Box>
      </Paper>
    </SectionWrapper>
  );
}

export default StorySection;
