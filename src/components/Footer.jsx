import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import SocialButtons from "./SocialButtons";

function Footer() {
  return (
    <Box
      id="contact"
      component="footer"
      sx={{ mt: 4, py: 5, bgcolor: "#eef4eb", borderTop: "1px solid #dde6db", scrollMarginTop: "88px" }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography variant="h6" sx={{ color: "primary.dark" }}>
            Forest Fresh Mushrooms
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            +91 98765 43210 | hello@forestfresh.in | Bengaluru, India
          </Typography>          
          <SocialButtons />
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            Copyright {new Date().getFullYear()} Forest Fresh Mushrooms. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
