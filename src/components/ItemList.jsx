import React from 'react'
import Items from './Items'

const ItemList = ({listProducts}) => {
  return (
    <>
        {listProducts.map(product => <Items product={product} key={product.id}/>)}
    </>
  )
}

export default ItemList
