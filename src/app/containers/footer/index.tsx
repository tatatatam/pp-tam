import { List, ListItem, ListItemButton, ListSubheader } from "@mui/joy";

export default function Footer() {
  return (
    <footer>
      <List
        orientation="horizontal"
        wrap
        sx={{
          flexGrow: 0,
          "--ListItem-radius": "8px",
          backgroundColor: "#333",
          color: "#fff",
          padding: "20px",
        }}
      >
        <ListItem nested sx={{ width: { xs: "50%", md: 140 } }}>
          <List>
            <ListItem>
              <ListItemButton color="primary">Services</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton color="primary">Blog</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton color="primary">Contact us</ListItemButton>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </footer>
  );
}
