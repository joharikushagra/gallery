import * as React from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Container,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const theme = createTheme();

export default function CreateForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {
      title: data.get("title"),
      url: data.get("url"),
      details: data.get("details"),
    };
    axios
      .post("http://localhost:8000", payload)
      .then(() => alert("Yay, Image Added"))
      .finally(() => window.location.replace("/"));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Image Details
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            // noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="url"
              label="Image Url"
              id="url"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              name="details"
              label="Image Details"
              id="details"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create{" "}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
