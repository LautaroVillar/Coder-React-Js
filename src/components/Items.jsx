import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemCount from "./ItemCount";

function Items({product}) {
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="150" image={product.img} alt={product.alt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
          <ItemCount
        item={product}
        stock={(product.stock)}
        initial={(product.initial = 1)}
        />
      </CardActions>
    </Card>
    </>
  )
}

export default Items