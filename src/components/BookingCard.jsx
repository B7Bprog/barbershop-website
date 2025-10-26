import { Card, Typography, Button } from "@mui/material";
import Booker from "./Booker";

export default function BookingCard({ title }) {
  return (
    <Card sx={{ p: 2, textAlign: "center" }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        {title}
      </Typography>
      <Button variant="contained" size="large">
        Book Now
      </Button>
      {/* <Booker username="bela-bertalan-ccy0hu" eventSlug="30min" /> */}
    </Card>
  );
}
