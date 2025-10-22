import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: 1,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
            Classic Cuts
          </Typography>

          <Typography
            variant="body2"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            © {new Date().getFullYear()} Classic Cuts Barbershop. All rights
            reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: 3, pb: 2 }}>
            <Link
              href="/privacy"
              color="inherit"
              underline="hover"
              variant="body2"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              color="inherit"
              underline="hover"
              variant="body2"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              color="inherit"
              underline="hover"
              variant="body2"
            >
              Contact
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
