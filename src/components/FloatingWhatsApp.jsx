import { Fab, Zoom } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function FloatingWhatsApp() {
  return (
    <Zoom in timeout={800}>
      <Fab
        color="success"
        aria-label="Chat on WhatsApp"
        component="a"
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        sx={{
          position: "fixed",
          right: 18,
          bottom: 18,
          bgcolor: "#25D366",
          "&:hover": { bgcolor: "#1fb65a", transform: "translateY(-3px)" },
          transition: "all 200ms ease",
          zIndex: 1300,
        }}
      >
        <FontAwesomeIcon icon={faWhatsapp} size="3x" />
      </Fab>
    </Zoom>
  );
}

export default FloatingWhatsApp;
