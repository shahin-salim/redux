import React, { useEffect } from 'react'
import ProductCompenent from './ProductComponent'
import { useSelector, useDispatch } from 'react-redux'
import Container from '@mui/material/Container';
import { setProducts, fetchProducts } from '../redux/actions/productActions';
import Grid from '@mui/material/Grid';


const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])


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