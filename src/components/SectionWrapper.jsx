import { Container, Fade, Stack, Typography } from "@mui/material";
import AnimatedHeading from "./AnimatedHeading";

function SectionWrapper({ id, eyebrow, title, subtitle, children }) {
  return (
    <Container
      id={id}
      component="section"
      maxWidth="lg"
      sx={{ py: { xs: 7, md: 10 }, scrollMarginTop: "88px" }}
    >
      <Fade in timeout={700}>
        <Stack spacing={2.2}>
          {eyebrow && (
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: "0.08em",
              }}
            >
              {eyebrow}
            </Typography>
          )}
          {title && (
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" } }}
            >
              <AnimatedHeading>{title}</AnimatedHeading>
            </Typography>
          )}
          {subtitle && (
            <Typography
              variant="body1"
              sx={{
                maxWidth: 700,
                color: "text.secondary",
                fontSize: { xs: "0.98rem", md: "1.05rem" },
              }}
            >
              {subtitle}
            </Typography>
          )}
          {children}
        </Stack>
      </Fade>
    </Container>
  );
}

export default SectionWrapper;
