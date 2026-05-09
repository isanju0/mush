import { Box, Typography } from "@mui/material";

function BestSellerTag() {
  return (
    <Box
      role="status"
      aria-label="Best seller"
      sx={{
        position: "absolute",
        // top: 14,
        // right: 14,
        left: "auto",
        zIndex: 2,
        pt: 0.9,
        pb: 1.5,
        px: 1.75,
        maxWidth: "calc(100% - 28px)",
        textAlign: "center",
        background: "linear-gradient(180deg, #FFEE58 0%, #FFEB3B 40%, #FBC02D 100%)",
        color: "#1a1f1a",
        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 12px), 50% 100%, 0 calc(100% - 12px))",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        filter:
          "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2)) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.14))",
      }}
    >
      <Typography
        component="span"
        sx={{
          display: "block",
          fontSize: "0.62rem",
          fontWeight: 800,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          lineHeight: 1.45,
          textShadow: "0 1px 0 rgba(255,255,255,0.5)",
        }}
      >
        Best seller
      </Typography>
    </Box>
  );
}

export default BestSellerTag;
