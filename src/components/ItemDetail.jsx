import React from "react"
import ItemCount from "./ItemCount"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";



const ItemDetail = ({productDetail}) => {
    const {name, description, price, stock, img}= productDetail

    const onAdd = () => {
        console.log("Añadiste " + name + " al carrito" )
    }
    
  return (

    <Card style={{ maxWidth: 345, margin:"2rem"}}>
    <CardMedia component="img"  image={img} alt={name} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
      <Typography style={{margin:"3px"}}>
        Precio:$ {price}
      </Typography>
      <Typography style={{margin:"3px"}}>
        Stock: {stock}
      </Typography>
    </CardContent>
    <CardActions style={{justifyContent:"space-between"}}>
    <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
    </CardActions>
    <Button fullWidth onClick={onAdd} variant="contained" size="large">Agregar al Carrito</Button>
  </Card>
  )
}

export default ItemDetail