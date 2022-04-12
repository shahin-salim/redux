import React, { useEffect } from 'react'
import ProductCompenent from './ProductComponent'
import { useSelector, useDispatch } from 'react-redux'
import Container from '@mui/material/Container';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';
import Grid from '@mui/material/Grid';



const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products)

    const dispatch = useDispatch()

    const featchProduct = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log(err)
        })
        const actions = setProducts(response.data) // return from the actions

        dispatch(actions) // giving the data to reducer
    }

    useEffect(() => {
        featchProduct()
    }, [])


    return (
        <>
            <Container>
                <Grid
                    container
                    spacing={3}
                    style={{ marginTop: "100px" }}>
                    <ProductCompenent />
                </Grid>
            </Container>
        </>
    )
}


export default ProductListing