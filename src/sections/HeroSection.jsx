import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { heroVideo } from "../assets/constants";

function HeroSection() {
  return (
    <Box id="home" component="section" sx={{ position: "relative", minHeight: { xs: "74vh", md: "88vh" } }}>
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          inset: 0,
        }}
      >
        <source src={heroVideo} type="video/mp4" />
      </Box>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(20, 35, 22, 0.48)",
          backdropFilter: "blur(1px)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, height: "100%" }}>
        <Stack justifyContent="center" spacing={3} sx={{ minHeight: { xs: "74vh", md: "88vh" }, maxWidth: 620 }}>
          <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "3.4rem" }, color: "#fff" }}>
            Naturally Grown Premium Mushrooms For Your Daily Table
          </Typography>
          <Typography variant="body1" sx={{ color: "#eaf2e7", fontSize: { xs: "1rem", md: "1.1rem" } }}>
            Freshly harvested mushrooms from our local farm, delivered with care and packed for flavor, nutrition,
            and consistency.
          </Typography>
          <Stack direction="row" spacing={1.5} flexWrap="wrap">
            <Button
              variant="contained"
              color="primary"
              href="#products"
              sx={{ boxShadow: 3, "&:hover": { boxShadow: 5 } }}
            >
              Explore Products
            </Button>
            <Button
              variant="outlined"
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.8)" }}
            >
              Order on WhatsApp
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default HeroSection;
