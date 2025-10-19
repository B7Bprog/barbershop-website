import { Box, Card, Typography, Avatar } from "@mui/material";
import { RiDoubleQuotesL } from "react-icons/ri";

export default function TestimonialsCard({ quote, author, role, avatar }) {
  return (
    <Card sx={{ p: 3, textAlign: "center" }}>
      <Box sx={{ textAlign: "left" }}>
        <RiDoubleQuotesL size={48} />
      </Box>
      <Typography variant="body1" fontStyle="italic" gutterBottom>
        {quote}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Avatar sx={{ bgcolor: "primary.main" }}>
          {avatar || author.charAt(0)}
        </Avatar>
        <Box>
          <Typography variant="body2" fontWeight="bold">
            {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {role}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
