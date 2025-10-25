import { Typography, Box, Divider } from "@mui/material";
import PagesCard from "../../components/PagesCard";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <>
      <PagesCard
        title="Get in Touch"
        description="We'd love to hear from you"
      />
      <Box display="flex" flexDirection="column" alignItems="center" my={2}>
        <Typography variant="h5" color="text.secondary">
          📍123 Barber Street, City
        </Typography>
        <Typography variant="h5" color="text.secondary">
          📞 (555) 123-4567
        </Typography>
        <Typography variant="h5" color="text.secondary">
          ✉️ hello@barbershop.com
        </Typography>
      </Box>
      <Divider />
      <Box display="flex" flexDirection="column" alignItems="center" my={2}>
        <Typography variant="h3" color="text.secondary">
          Hours
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Mon - Fri: 9am - 5pm
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Sat: 10am - 4pm
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Sun: Closed
        </Typography>
      </Box>
      <Box sx={{ width: "100%", height: 500 }}>
        {/* {isClient && ( */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2737.3130003634024!2d4.490694552893043!3d52.06077184730007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c929853a00a3%3A0x79056f3634c66f69!2sZoetermeer%20City%20Town%20Hall!5e1!3m2!1sen!2snl!4v1761395321919!5m2!1sen!2snl"
          height={"100%"}
          width={"100%"}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* )} */}
      </Box>
      <Divider sx={{ mt: 5 }} />
      <ContactForm />
    </>
  );
}
