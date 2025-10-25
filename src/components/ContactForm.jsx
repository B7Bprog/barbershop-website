"use client";

import { Box, TextField, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [requestData, setRequestData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRequestData(formData);
    console.log(formData);
  };

  useEffect(() => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  }, [requestData]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        width: "100%",
        my: 3,
      }}
    >
      <Typography variant="h4">Send a message</Typography>

      <TextField
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        variant="outlined"
        required
        sx={{ width: "90%" }}
      />

      <TextField
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        variant="outlined"
        required
        sx={{ width: "90%" }}
      />

      <TextField
        name="phone"
        label="Phone"
        value={formData.phone}
        onChange={handleChange}
        variant="outlined"
        sx={{ width: "90%" }}
      />

      <TextField
        name="message"
        label="Message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        variant="outlined"
        required
        sx={{ width: "90%" }}
      />

      <Button type="submit" variant="contained" size="large">
        Submit
      </Button>
    </Box>
  );
}
