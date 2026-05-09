import { Box, Typography } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";

function FounderNote() {
  return (
    <SectionWrapper
      id="founder-note"
      eyebrow="Founder's Note"
      title="Quality, freshness, and trust in every pack"
    //   subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    >      
        <Box
            sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 4,
            }}
        >
            <Typography
            sx={{
                maxWidth: "900px",
                textAlign: "center",
                lineHeight: 2,
                color: "#555",
                fontSize: {
                xs: "1rem",
                md: "1.1rem",
                },
            }}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            </Typography>

            <Typography
            sx={{
                maxWidth: "700px",
                textAlign: "center",
                lineHeight: 2,
                color: "#555",
                fontSize: {
                xs: "1rem",
                md: "1.1rem",
                },
                mt: 2,
            }}
            >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
            </Typography>

            <Typography
            sx={{
                maxWidth: "500px",
                textAlign: "center",
                lineHeight: 2,
                color: "#555",
                fontSize: {
                xs: "1rem",
                md: "1.1rem",
                },
                mt: 2,
            }}
            >
            Sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
        </Box>
    </SectionWrapper>
  );
}

export default FounderNote;
