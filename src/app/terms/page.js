import { Container, Typography, Box } from "@mui/material";
import PagesCard from "@/components/PagesCard";

export default function Terms() {
  return (
    <Container>
      <PagesCard
        title="Terms of Service"
        description="Please read these terms carefully before using our services"
      />

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          1. Acceptance of Terms
        </Typography>
        <Typography variant="body1" paragraph>
          By accessing and using The Modern Barbershop website and services, you
          accept and agree to be bound by the terms and provision of this
          agreement.
        </Typography>

        <Typography variant="h4" gutterBottom>
          2. Services Provided
        </Typography>
        <Typography variant="body1" paragraph>
          The Modern Barbershop provides professional barbering services
          including haircuts, beard trims, and grooming services. All services
          are performed by licensed professionals.
        </Typography>

        <Typography variant="h4" gutterBottom>
          3. Appointments & Cancellations
        </Typography>
        <Typography variant="body1" paragraph>
          Appointments can be made online, by phone, or in person. We require 24
          hours notice for cancellations. Late cancellations may be subject to a
          fee.
        </Typography>

        <Typography variant="h4" gutterBottom>
          4. Payment
        </Typography>
        <Typography variant="body1" paragraph>
          Payment is due at time of service. We accept cash, credit cards, and
          digital payments. Prices are subject to change without notice.
        </Typography>

        <Typography variant="h4" gutterBottom>
          5. Limitation of Liability
        </Typography>
        <Typography variant="body1" paragraph>
          The Modern Barbershop is not liable for any allergic reactions or
          dissatisfaction with services, provided services were performed with
          professional care.
        </Typography>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 4 }}>
            Last updated: {new Date().getFullYear()}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
