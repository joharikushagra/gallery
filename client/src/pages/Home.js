import React from "react";
import ImageCard from "../components/ImageCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    // axios.get("https://gallery-hackerearth-react.herokuapp.com");
    axios.get(process.env.REACT_APP_BACKEND_DEV_URI).then((res) => {
      console.log({ res });
      setImages(res?.data?.images);
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography align="center" variant="h2" gutterBottom component="div">
        Image Gallery
      </Typography>
      <Typography align="center" variant="h6" gutterBottom component="div">
        Create Image:&nbsp;
        <Button size="small" variant="contained" href="/new">
          Click Here
        </Button>
      </Typography>
      <br />
      {!images?.length && (
        <Typography align="center" variant="h4" gutterBottom component="div">
          Loading....
        </Typography>
      )}
      <Grid container spacing={2}>
        {images?.map((im) => (
          <Grid
            key={im._id}
            item
            md={4}
            sm={6}
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ImageCard
              id={im._id}
              title={im.title}
              url={im.url}
              details={im.details}
              onClick={() => window.location.replace(`/show/${im._id}`)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
