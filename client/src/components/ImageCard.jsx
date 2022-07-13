import * as React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function ImageCard({ id, title, url, details, onClick }) {
  return (
    <Card sx={{ maxWidth: 450 }} onClick={onClick}>
      <CardMedia
        component="img"
        height="240"
        width="300"
        image={url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
}
