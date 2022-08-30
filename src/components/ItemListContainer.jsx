import React from 'react'
import ItemCount from './ItemCount'

export default function ItemListContainer(props, contador) {

  const {saludo} = props
  const onAdd = () => {
    console.log( "compraste ");
  };

  let producto1 = { id: 100, name: 'Zapatillas Nike', price: 100, description:"Suma más y más kilómetros con tus Zapatillas Nike Revolution 6 Next Nature, que aportan amortiguación y confort a cada paso que des.", stock:"", initial:"", img:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5d2cf9e4/products/NI_DC3728-003/NI_DC3728-003-1.JPG", alt:"Zapatillas Nike" };
  let producto2 = { id: 101, name: 'Zapatillas Adidas', price: 150, description:"Las Zapatillas adidas Galaxy 5 presentan un diseño moderno y urbano, ideal para los runners que aman la moda." ,stock:"", initial:"", img:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw12ccc6d6/products/AD_GW0767/AD_GW0767-1.JPG", alt:"Zapatillas Adidas" };
  let producto3 = { id: 102, name: 'Zapatillas Puma', price: 300, description:"Las Zapatillas Puma Flyer Flex están diseñadas para los corredores más exigentes.", stock:"", initial:"", img:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw073d2af5/products/PU_376491-01/PU_376491-01-1.JPG", alt:"Zapatillas Puma"};

  return (
    <div>
        <h1>E-COMMERCE</h1>
        <h2>{saludo}</h2>
        <ItemCount  item={producto1} stock={producto1.stock=10} initial={producto1.initial=1} onAdd={onAdd}/>
        <ItemCount  item={producto2} stock={producto2.stock=7} initial={producto2.initial=1} onAdd={onAdd}/>
        <ItemCount  item={producto3} stock={producto3.stock= 9} initial={producto3.initial=1} onAdd={onAdd}/>
        
    </div>
  )
}