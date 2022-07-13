import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImageCard({ id, title, url, details }) {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        component="img"
        height="240"
        width="300"
        // image="https://images.unsplash.com/photo-1657690117381-ca96536fb62c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
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
      {/* <CardActions>
        <Button size="small" href={`/${id}/edit`}>
          Edit
        </Button>
      </CardActions> */}
    </Card>
  );
}
