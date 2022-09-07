import React, { useState } from "react";
import Button from "@mui/material/Button";


function ItemCount({ stock, initial}) {
  const [contador, setContador] = useState(initial);
  const increase = () => {
    stock > contador ? (
      setContador(contador + 1)
    ) : (
      <Button disabled variant="outlined">
        +
      </Button>
    );
  };
  const decrease = () => {
    contador > 1 ? (
      setContador(contador - 1)
    ) : (
      <Button disabled variant="outlined">
        -
      </Button>
    );
  };

  return (
      <>
        <Button
          variant="outlined"
          onClick={decrease}
        >
          -
        </Button>
        <h3>{contador}</h3>
        <Button
          variant="outlined"
          onClick={increase}
        >
          +
        </Button>
        </>

  );
}

export default ItemCount;
