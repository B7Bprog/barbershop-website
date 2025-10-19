import { Card, Typography, Container } from "@mui/material";

export default function PagesCard({ title, description }) {
  return (
    <Container>
      <Card sx={{ textAlign: "center", py: 3, mt: 2 }}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
          {description}
        </Typography>
      </Card>
    </Container>
  );
}
