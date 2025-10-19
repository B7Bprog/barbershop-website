import { Box, Typography, Button, Container, Stack, Card } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(/images/hero.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Stack
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            spacing={7}
            sx={{ height: "100%" }}
          >
            <Typography variant="h1" color="white">
              Precision Cuts, Timeless Style
            </Typography>
            <Typography variant="h5" color="white">
              Where classic barbering meets modern grooming
            </Typography>
            <Button variant="contained">Book Now</Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
