import React from 'react'
import { useSelector } from 'react-redux'

const ProductCompenent = () => {
    const products = useSelector((state) => state)
    console.log(products);
    return (
        <div>Product Compenent</div>
    )
}


export default ProductCompenent