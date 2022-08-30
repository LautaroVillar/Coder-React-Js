import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function ItemCount({ stock, initial, item, onAdd }) {
  const [contador, setContador] = useState(initial);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="150"
        image={item.img}
        alt={item.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
      {stock > contador ? (
          <Button
            size="large"
            variant="outlined"
            sx={{m:2}}
            onClick={() => {
              setContador(contador + 1);
            }}
          >
            +
          </Button>
        ) : (
          <Button disabled variant="outlined">+</Button>
        )}
        <h3>{contador}</h3>
        {contador > 1 ? (
          <Button
            size="large"
            variant="outlined"
            sx={{m:2}}
            onClick={() => {
              setContador(contador - 1);
            }}
          >
            -
          </Button>
        ) : (
          <Button disabled variant="outlined">-</Button>
        )}
        <Button onClick={onAdd} variant="outlined">Agregar al carrito</Button>
      </CardActions>
    </Card>
  );

}

export default ItemCount;
