// app/page.js - no directives needed
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TopBanner from "./containers/top-banner";

export default function Home() {
  return (
    <main>
      <TopBanner></TopBanner>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: "#d3d3d3", height: "100vh" }} />
      </Container>
    </main>
  );
}
