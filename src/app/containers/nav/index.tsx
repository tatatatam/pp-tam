import { Box, List, ListItem, ListItemButton } from "@mui/joy";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
const Navbar = () => {
  return (
    <Box
      sx={{ backgroundColor: "transparent", color: "white", fontWeight: "800" }}
    >
      <List
        role="menubar"
        orientation="horizontal"
        sx={{
          "--List-radius": "4px",
          "--List-padding": "8px",
          "--List-gap": "16px",
        }}
      >
        <ListItem role="none">
          <ListItemButton
            color="primary"
            role="menuitem"
            component="a"
            href="#navigation-menu"
          >
            Home
          </ListItemButton>
        </ListItem>
        <ListItem role="menuitem">
          <ListItemButton
            color="primary"
            role="menuitem"
            component="a"
            href="#navigation-menu"
          >
            Profile
          </ListItemButton>
        </ListItem>
        <ListItem role="menuitem">
          <ListItemButton
            color="primary"
            role="menuitem"
            component="a"
            href="#navigation-menu"
          >
            Contact
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Navbar;
