import "./top-banner.css";
import { Avatar, Box, Typography, useMediaQuery } from "@mui/material";

const TopBanner = () => {
  return (
    <>
      <Box className="container">
        <Box maxWidth="md" className="profile-set">
          <Box padding={"15px"} className="avatar-container">
            <Avatar
              className="avatar-profile"
              alt="Remy Sharp"
              src="/dog.jpg"
            />
          </Box>
          <Box className="profile-name" textAlign={"center"} padding={"20px"}>
            <Typography>Pasakorn Juipiam —————————</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TopBanner;
