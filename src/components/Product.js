import React from 'react'

export default function Product(props) {
    const {product, onAdd} = props;
    return (
        <div className="alignCenter">
            <img className="small" src={product.image} alt={product.name}></img>
            <div>
                <button onClick={() => onAdd(product)}>Add To Cart</button>
            </div>
            <h3>{product.name}</h3>
            <div>${product.price}</div>
        </div>
    )
}
