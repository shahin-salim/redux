import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux'
import axios from 'axios';
import Grid from '@mui/material/Grid';

import { useNavigate } from "react-router-dom"

const UNSPLASH = {
    "Access Key": "lng8frRp0yLiG5xy4oEsBMhgYCcKjFlJc_hK0FFTWcY",
    "Secret key": "oQGwlXeavqCsiQ9RXmOlXOn873lLelfiBj-1WuN1WaQ"
}

const ProductCompenent = () => {

    const products = useSelector((state) => state.allProducts.products)
    console.log(products)

    const navigate = useNavigate()


    const renderList =  products.map((data) => {

        const { id, title, image, price, description } = data

        return (
            <Grid item sx={{ maxWidth: 345 }} xs={3} key={id} onClick={() => navigate(`/product/${id}`)}>
                <CardActionArea>
                    <div style={{ display: "flex", justifyContent: "center", width: "270px", height: "370px" }}>
                        <CardMedia
                            component="img"
                            image={image}
                            alt="green iguana"
                        />
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Grid>
        )

    })

    return (

        <>


            {renderList}


        </>


    );
}


export default ProductCompenent