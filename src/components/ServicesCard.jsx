import { Box, Card, Typography } from "@mui/material";

export default function ServicesCard({
  icon,
  title,
  description,
  childrenSx,
  children,
}) {
  return (
    <Card sx={{ textAlign: "center", p: 2 }}>
      {icon}
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5" color="text.secondary">
        {description}
      </Typography>
      <Box sx={{ ...childrenSx }}>{children}</Box>
    </Card>
  );
}
