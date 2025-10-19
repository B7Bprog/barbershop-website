import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Divider,
} from "@mui/material";
import ServicesCard from "@/components/ServicesCard";
import TestimonialsCard from "../components/TestimonialsCard";
import { RiScissorsFill } from "react-icons/ri";
import { GiBeard, GiRazor } from "react-icons/gi";
import BookingCard from "../components/BookingCard";

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
      <Box sx={{ my: 3 }}>
        <Typography variant="h2" textAlign="center" gutterBottom>
          Services
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary">
          Premium Grooming Experiences
        </Typography>
      </Box>
      <Stack spacing={3} sx={{ mt: 1, mb: 1 }}>
        <ServicesCard
          icon={<RiScissorsFill size={48} style={{ color: "#ff6b00" }} />}
          title="Haircut"
          description="Our signature haircut includes precise scissor work, styling, and finishing touches."
        ></ServicesCard>
        <ServicesCard
          icon={<GiBeard size={48} style={{ color: "#ff6b00" }} />}
          title="Beard Trim"
          description="Precision beard shaping and trimming for a sharp, defined look. Our barbers use traditional techniques with modern tools to craft your perfect style."
        ></ServicesCard>
        <ServicesCard
          icon={<GiRazor size={48} style={{ color: "#ff6b00" }} />}
          title="Shave"
          description="Experience the classic straight razor shave with hot towel treatment. Our master barbers deliver the closest, most comfortable shave for perfectly smooth skin."
        ></ServicesCard>
      </Stack>
      <Box sx={{ my: 3 }}>
        <Divider sx={{ mb: 3 }} />
        <Typography variant="h2" textAlign="center" gutterBottom>
          Testimonials
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary">
          What Our Clients Say
        </Typography>
      </Box>
      <Stack spacing={3} sx={{ mt: 1, mb: 1 }}>
        <TestimonialsCard
          quote="Best haircut I've ever had! The attention to detail is incredible. I won't go anywhere else now."
          author="Michael Johnson"
          role="Regular Client"
        />
        <TestimonialsCard
          quote="Finally found a barber who understands exactly what I want. The beard trim was perfection - sharp, clean, and exactly how I envisioned it."
          author="David Chen"
          role="Monthly Client"
        />
        <TestimonialsCard
          quote="The hot towel shave is an experience everyone should try. Felt like royalty walking out of here. 10/10 would recommend!"
          author="Marcus Rodriguez"
          role="First-Time Client"
        />
      </Stack>
      <Box sx={{ mt: 2, mb: 1 }}>
        <BookingCard title={"Ready for a Fresh Look?"}></BookingCard>
      </Box>
    </>
  );
}
