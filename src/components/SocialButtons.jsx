import { Box, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function SocialButtons() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
      }}
    >
      {/* Instagram */}
      <IconButton
        sx={{
          bgcolor: "#e0e0e0",
          color: "#000",
          width: 42,
          height: 42,
          transition: "all 0.3s ease",
          "&:hover": {
            bgcolor: "#E1306C",
            color: "#fff",
          },
        }}
      >
        <FontAwesomeIcon icon={faInstagram} size="md" />
      </IconButton>

      {/* Facebook */}
      <IconButton
        sx={{
          bgcolor: "#e0e0e0",
          color: "#000",
          width: 42,
          height: 42,
          transition: "all 0.3s ease",
          "&:hover": {
            bgcolor: "#0866ff",
            color: "#fff",
          },
        }}
      >
        <FontAwesomeIcon icon={faFacebook} size="md" />
      </IconButton>

      {/* YouTube */}
      <IconButton
        sx={{
          bgcolor: "#e0e0e0",
          color: "#000",
          width: 42,
          height: 42,
          transition: "all 0.3s ease",
          "&:hover": {
            bgcolor: "#FF0000",
            color: "#fff",
          },
        }}
      >
        <FontAwesomeIcon icon={faYoutube} size="md" />
      </IconButton>
    </Box>
  );
}

export default SocialButtons;