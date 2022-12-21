import React, { useEffect, useState } from 'react';
import { Container,Row } from 'react-bootstrap';
import MProduct from '../MProduct/MProduct';

const ManageProducts = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://kids-toy-server.onrender.com/products').then(res => res.json())
        .then(data => setProducts(data))
    },[products])
    return (
        <Container className='my-5'>
            <Row xs={1} md={2} lg={3} className='g-2'>
                {
                    products?.map(mp => <MProduct key={mp._id} product={mp}></MProduct>)
                }
            </Row>
        </Container>
    );
};

export default ManageProducts;