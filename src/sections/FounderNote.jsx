import { Box, Typography } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";

function FounderNote() {
  return (
    <SectionWrapper
      id="founder-note"
      eyebrow="Our Story"
      title="Close to the Earth"
      //   subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Typography
          sx={{
            maxWidth: "900px",
            textAlign: "center",
            lineHeight: 2,
            color: "#555",
            fontSize: {
              xs: "1rem",
              md: "1.1rem",
            },
          }}
        >
          At The Market Bowl, our journey began close to the earth — with
          mushroom farming.
        </Typography>

        <Typography
          sx={{
            maxWidth: "700px",
            textAlign: "center",
            lineHeight: 2,
            color: "#555",
            fontSize: {
              xs: "1rem",
              md: "1.1rem",
            },
            mt: 2,
          }}
        >
          What started as a small effort to grow fresh, high-quality produce
          soon became a deeper exploration into mindful food, clean ingredients,
          and the way nourishment should truly feel: simple, honest, and
          refined. Working hands-on with cultivation taught us patience,
          precision, and respect for nature. It shaped the foundation of
          everything we create today. As we connected more with conscious
          consumers and healthier lifestyles, our vision naturally expanded
          beyond farming. We began crafting thoughtfully curated products made
          with ingredients we genuinely believed in. Every product from The
          Market Bowl carries the essence of where we started: careful sourcing,
          small-batch attention, and a commitment to quality without compromise.
        </Typography>

        <Typography
          sx={{
            maxWidth: "500px",
            textAlign: "center",
            lineHeight: 2,
            color: "#555",
            fontSize: {
              xs: "1rem",
              md: "1.1rem",
            },
            mt: 2,
          }}
        >
          We believe wellness is not about excess. It is about intentional
          choices, comforting rituals, and food that feels both nourishing and
          indulgent.
        </Typography>

        <Typography
          sx={{
            maxWidth: "500px",
            textAlign: "center",
            lineHeight: 2,
            color: "#555",
            fontSize: {
              xs: "1rem",
              md: "1.1rem",
            },
            mt: 2,
          }}
        >
          Today, The Market Bowl stands at the intersection of agriculture,
          tradition, and modern wellness — bringing together the authenticity of
          farm-rooted beginnings with the elegance of premium nourishment.
        </Typography>
      </Box>
    </SectionWrapper>
  );
}

export default FounderNote;
