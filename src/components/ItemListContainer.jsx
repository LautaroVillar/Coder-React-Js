import React from 'react'

export default function ItemListContainer(props) {

  const {saludo} = props

  return (
    <div>
        <h1>E-COMMERCE</h1>
        <h2>{saludo}</h2>
        <hr />
        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod est vero neque numquam? Dolores sapiente quibusdam iure similique nulla error nesciunt inventore, vitae ullam earum reprehenderit ad ipsum, ex ipsam.</h3>
        <hr />
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex deleniti pariatur asperiores? Provident sint, iste voluptates nostrum numquam aliquam mollitia repellendus perspiciatis maiores. Nisi ratione vel necessitatibus quidem hic.</h4>
        <hr />
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam alias error, repellendus nam amet asperiores beatae similique, repudiandae officiis explicabo iusto eum labore voluptatem laborum consequuntur autem, magnam quam? Velit.</h5>
    </div>
  )
}
