import { Typography, Box } from "@mui/material";

function AnimatedHeading({ children }) {
  return (
    <Box
      className="animated-heading"
      sx={{
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          position: "relative",
          display: "inline-block",
        }}
      >
        {children}
      </Typography>

      <Box
        sx={{
          position: "absolute",
          left: 0,
          bottom: -6,
          height: "4px",
          width: "0%",
          borderRadius: "10px",
          background: "linear-gradient(to right, #ff0000, #ffcc00)",
          transition: "width 0.4s ease",
          ".animated-heading:hover &": {
            width: "75%",
          },
        }}
      />
    </Box>
  );
}

export default AnimatedHeading;
