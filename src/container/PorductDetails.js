
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct } from '../redux/actions/productActions'

import * as React from 'react';
import { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Container from '@mui/material/Container';

const ProductDetails = () => {
    const { productId } = useParams()
    const dispatch = useDispatch()

    const product = useSelector((state) => state.product)

    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
            console.log(err)
        })
        console.log(response.data)
        dispatch(selectedProduct(response.data))
    }

    useEffect(() => {
        fetchProductDetails()
    }, [productId])

    return (
        <Container>

            <Box sx={{ flexGrow: 1 }} style={{ marginTop: "100px" }}>

                <Grid container>
                    <Grid item xs={12} md={6} >
                        <div >
                            <img src={`${product.image}`} style={{ width: "50%" }} />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center" }}>
                        <div>
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <h1 style={{color: "blue"}}>${product.price}</h1>
                        </div>
                    </Grid>
                </Grid>
            </Box>

        </Container>
    )
}


export default ProductDetails