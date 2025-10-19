"use client";

import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "../theme";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        {mounted && (
          <Box
            component="main"
            sx={{
              minHeight: "100vh",
              mt: 7,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {children}
            <Footer />
          </Box>
        )}
      </ThemeProvider>
    </>
  );
}
