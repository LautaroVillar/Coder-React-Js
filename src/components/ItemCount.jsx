
import Button from "@mui/material/Button";


function ItemCount({ stock, count, setCount}) {

  const increase = () => {
    stock > count ? (
      setCount(count + 1)
    ) : (
      <Button disabled variant="outlined">
        +
      </Button>
    );
  };
  const decrease = () => {
    count > 1 ? (
      setCount(count - 1)
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
        <h3>{count}</h3>
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