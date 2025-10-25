import { Container, Typography, Box } from "@mui/material";
import PagesCard from "@/components/PagesCard";

export default function Privacy() {
  return (
    <Container>
      <PagesCard
        title="Privacy Policy"
        description="How we collect, use, and protect your information"
      />

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          1. Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We collect personal information you provide when booking appointments,
          including your name, email address, phone number, and service
          preferences.
        </Typography>

        <Typography variant="h4" gutterBottom>
          2. How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          Your information is used to manage appointments, send reminders,
          process payments, and improve our services. We do not sell your data
          to third parties.
        </Typography>

        <Typography variant="h4" gutterBottom>
          3. Data Protection
        </Typography>
        <Typography variant="body1" paragraph>
          We implement security measures to protect your personal information.
          All electronic data is encrypted and stored securely.
        </Typography>

        <Typography variant="h4" gutterBottom>
          4. Cookies & Tracking
        </Typography>
        <Typography variant="body1" paragraph>
          Our website uses cookies to enhance user experience. You can disable
          cookies in your browser settings, though some features may not
          function properly.
        </Typography>

        <Typography variant="h4" gutterBottom>
          5. Your Rights
        </Typography>
        <Typography variant="body1" paragraph>
          You have the right to access, correct, or delete your personal
          information. Contact us to exercise these rights.
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
