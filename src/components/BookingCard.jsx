import { Card, Typography, Button } from "@mui/material";

export default function BookingCard({ title }) {
  return (
    <Card sx={{ p: 2, textAlign: "center" }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        {title}
      </Typography>
      <Button variant="contained" size="large">
        Book Now
      </Button>
    </Card>
  );
}
