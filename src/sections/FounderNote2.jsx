import { Box, Typography } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";

function FounderNote2() {
  return (
    <SectionWrapper
      id="founder-note"
      eyebrow="Founder's Note"
      title="Where it all Began"
      // subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
          Our journey began with growing mushrooms, but what truly grew was our
          understanding of food itself —
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
          where it comes from, how it is made, and how deeply quality matters.
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
          The Market Bowl was built from that experience: a desire to create
          products that feel clean, comforting, and genuinely thoughtful.
        </Typography>

        {/* <Typography
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
        </Typography> */}
      </Box>
    </SectionWrapper>
  );
}

export default FounderNote2;
