import { Typography, Card, Divider, Box } from "@mui/material";
import PagesCard from "../../components/PagesCard";
import BarberCard from "../../components/BarberCard";
import Image from "next/image";
import BookingCard from "../../components/BookingCard";

export default function About() {
  return (
    <>
      <PagesCard
        title="Our Story"
        description="A Tradition of Excellence Since 2010"
      ></PagesCard>
      <Card sx={{ textAlign: "justify", p: 2 }}>
        <Typography variant="h5" color="text.secondary">
          Founded in 2010, Classic Cuts began as a small neighborhood barbershop
          with a simple mission: to bring back the art of traditional grooming
          while embracing modern styles. What started as a single-chair
          operation has grown into a beloved local institution, known for our
          attention to detail and commitment to craftsmanship.
        </Typography>
      </Card>
      <Divider sx={{ mb: 3, mt: 4 }} />
      <Typography variant="h2" textAlign="center" gutterBottom>
        Meet The Barbers
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <BarberCard
          alt="Barber 1"
          name="Ahmed Khan"
          imageSource="/images/barber1.jpg"
          position="Master Barber / Owner"
          biography="With over 15 years of experience, Ahmed specializes in traditional Pakistani styles and modern fusions. Known for his precision beard work and welcoming atmosphere."
        />
        <BarberCard
          alt="Barber 2"
          name="Lars van Dijk"
          imageSource="/images/barber2.png"
          position="Senior Barber"
          biography="Lars brings Dutch precision to classic European cuts. Expert in scissor-over-comb techniques and creating timeless, clean looks for every client."
        />
        <BarberCard
          alt="Barber 3"
          name="Kwame Mensah"
          imageSource="/images/barber3.jpg"
          position="Barber"
          biography="Kwame excels in contemporary African-inspired styles and fades. His artistic approach and knowledge of textured hair make him a rising talent in our shop."
        />
      </Box>
      <Image
        src="/images/shop.jpg"
        alt="Barber Ahmed"
        width={500}
        height={300}
        style={{ width: "100%", height: "auto" }}
      />
      <BookingCard title={"Book a Cut Today"} />
    </>
  );
}
