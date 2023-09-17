import Navbar from "./nav";
import "./top-banner.css";
import { Avatar, Box, Typography, useMediaQuery } from "@mui/material";

const TopBanner = () => {
  return (
    <>
      <Box
        className="container"
        sx={{
          height: {
            xs: "300px",
            md: "400px",
          },
        }}
      >
        <Navbar />
        <Box className="top-banner-header">
          <Box className="profile-name" textAlign={"center"}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: {
                  md: "48px",
                  xs: "20px",
                },
              }}
              fontWeight="800"
            >
              Empower Your life with Infinite Possibilities!{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TopBanner;
