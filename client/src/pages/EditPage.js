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
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const theme = createTheme();

export default function Edit() {
  const [image, setImage] = useState(null);
  const { id } = useParams();
  console.log({ image });
  useEffect(() => {
    axios
      .get(`http://localhost:8000/show/${id}`)
      .then((res) => setImage(res?.data));
  }, []);

  const handleChange = (e) => {
    // console.log({ [e.target.id]: e.target.value });
    setImage((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {
      title: data.get("title"),
      url: data.get("url"),
      details: data.get("details"),
    };
    axios
      .put(`http://localhost:8000/${id}/edit`, payload)
      .then(() => alert("Yay, Image Edited"))
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
              value={image?.title}
              label="Title"
              InputLabelProps={{
                shrink: true,
              }}
              name="title"
              disabled
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="url"
              value={image?.url}
              onChange={handleChange}
              label="Image Url"
              InputLabelProps={{
                shrink: true,
              }}
              id="url"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              name="details"
              value={image?.details}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              label="Image Details"
              id="details"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save{" "}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
