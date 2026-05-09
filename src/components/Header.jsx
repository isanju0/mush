import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { navLinks } from "../assets/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SocialButtons from "./SocialButtons";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: "1px solid #e6ece5" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: "primary.dark", flexGrow: 1 }}>
            Forest Fresh Mushrooms
          </Typography>

          <Stack direction="row" spacing={0.5} sx={{ display: { xs: "none", md: "flex" } }}>
            {navLinks.map((link) => (
              <Button key={link.id} color="inherit" onClick={() => scrollToSection(link.id)}>
                {link.label}
              </Button>
            ))}
          </Stack>

          <IconButton
            aria-label="open navigation menu"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            <FontAwesomeIcon icon={faBars} size="xl" />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 220, p: 2, pt: 3 }}>
          <Stack spacing={2}>
            {navLinks.map((link) => (
              <Button
                key={link.id}
                color="inherit"
                onClick={() => {
                  scrollToSection(link.id);
                  setOpen(false);
                }}
                sx={{ justifyContent: "flex-start" }}
              >
                {link.label}
              </Button>
            ))}
            <SocialButtons />
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Header;
