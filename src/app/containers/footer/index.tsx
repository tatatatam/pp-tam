import { useState } from "react";
import { ColorPaletteProp } from "@mui/joy/styles";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
export default function Footer() {
  return (
    <Sheet variant="solid">
      <List
        size="sm"
        orientation="horizontal"
        wrap
        sx={{ flexGrow: 0, "--ListItem-radius": "8px" }}
      >
        <ListItem nested sx={{ width: { xs: "50%", md: 140 } }}>
          <ListSubheader>Sitemap</ListSubheader>
          <List>
            <ListItem>
              <ListItemButton>Services</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Blog</ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>Contact us</ListItemButton>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Sheet>
  );
}
