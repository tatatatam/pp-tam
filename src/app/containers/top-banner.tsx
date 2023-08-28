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
            <Typography>Pasakorn Juipiam </Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TopBanner;
