import { Grid, Paper, Stack, Typography } from "@mui/material";
import { testimonials } from "../assets/constants";
import SectionWrapper from "../components/SectionWrapper";

function TestimonialsSection() {
  return (
    <SectionWrapper
      id="testimonials"
      eyebrow="Testimonials"
      title="What Our Customers Say"
      subtitle="Real feedback from home cooks and professional kitchens who trust our farm-fresh quality."
    >
      <Grid container spacing={2.2}>
        {testimonials.map((item) => (
          <Grid key={item.name} item xs={12} sm={6} md={4}>
            <Paper
              elevation={1}
              sx={{
                height: "100%",
                p: 2.5,
                border: "1px solid #e6ece5",
                borderRadius: 4,
                bgcolor: "background.paper",
              }}
            >
              <Stack spacing={1.4}>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>"{item.quote}"</Typography>
                <Typography variant="subtitle2" sx={{ color: "text.primary", fontWeight: 700 }}>
                  {item.name}
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  {item.role}
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}

export default TestimonialsSection;
