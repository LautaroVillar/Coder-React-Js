import React, {useState, useEffect} from "react";
import { customFetch } from "./customFetch";
import ItemList from "./ItemList"
import products from "./products"


export default function ItemListContainer() {

  const [listProducts, setListProducts] = useState([]);



  useEffect(() => {
    customFetch(products)
    .then(data => {
      setListProducts(data);
    })
    },[])
  

  return (
    <>
      <h1>E-COMMERCE</h1>
      <ItemList listProducts={listProducts}/>
    </>
  );
}
