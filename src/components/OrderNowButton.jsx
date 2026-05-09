import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@mui/material";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function OrderNowButton() {
  return (
    <Button
      variant="outlined"
      sx={{
        borderColor: "#1fb65a",
        color: "#1fb65a",
        padding: "10px 24px",
        borderRadius: "10px",
        textTransform: "none",
        fontWeight: 500,
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "#1fb65a",
          color: "#fff",
          borderColor: "#1fb65a",
        },
      }}
    >
      Order Now 
      <FontAwesomeIcon icon={faWhatsapp} size="xl" />
      {/* <FontAwesomeIcon icon={faArrowRightLong} size="xl" /> */}
    </Button>
  );
}

export default OrderNowButton;