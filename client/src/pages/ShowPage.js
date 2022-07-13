import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ShowPage() {
  const { id } = useParams();
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/show/${id}`)
      .then((res) => setImageData(res?.data));
  }, []);

  const handleDelete = async () => {
    if (window.confirm("Image would be deleted")) {
      try {
        await axios.delete(
          `${process.env.REACT_APP_BACKEND_DEV_URI}/delete/${id}`
        );
        window.location.replace("/");
      } catch (error) {
        alert("Something went wrong");
      }
    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        marginLeft: 16,
        marginRight: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography align="center" variant="h4" gutterBottom component="div">
        Title- {imageData?.title}
      </Typography>
      <img src={imageData?.url} width="350" height="400" alt="Filler" />
      <Typography sx={{ marginTop: 4 }} variant="body1" gutterBottom>
        {imageData?.details}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Button
          size="small"
          variant="contained"
          href={`/${id}/edit`}
          sx={{ marginRight: 2 }}
        >
          Edit
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={handleDelete}
          color="error"
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}

export default ShowPage;
