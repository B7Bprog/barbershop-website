import { Avatar, Card, Typography, Container } from "@mui/material";

export default function BarberCard({
  alt,
  name,
  imageSource,
  position,
  biography,
}) {
  return (
    <Card
      sx={{
        textAlign: "justify",
        py: 3,
        px: 2,
        mt: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "90%",
        gap: 1,
      }}
    >
      <Avatar alt={alt} src={imageSource} sx={{ width: 120, height: 120 }} />
      <Typography variant="h3" gutterBottom>
        {name}
      </Typography>
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: "bold" }}
      >
        {position}
      </Typography>
      <Typography variant="h5" color="text.secondary">
        {biography}
      </Typography>
    </Card>
  );
}
