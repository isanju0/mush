import { Paper, Stack, Typography } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";

const values = [
  "Fresh harvest and same-day packing",
  "No unnecessary additives or preservatives",
  "Carefully controlled farm hygiene and quality",
  "Reliable supply for homes and culinary businesses",
];

function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About Us"
      title="Quality, freshness, and trust in every pack"
      subtitle="We are committed to delivering farm-fresh mushrooms with transparent sourcing and consistent quality."
    >
      <Paper elevation={1} sx={{ p: { xs: 2.4, md: 4 }, border: "1px solid #e6ece5", borderRadius: 5 }}>
        <Stack spacing={2}>
          {values.map((item) => (
            <Stack key={item} direction="row" spacing={1.2} alignItems="center">
              <Typography sx={{ color: "primary.main", fontWeight: 700 }}>+</Typography>
              <Typography sx={{ color: "text.secondary" }}>{item}</Typography>
            </Stack>
          ))}
        </Stack>
      </Paper>
    </SectionWrapper>
  );
}

export default AboutSection;
