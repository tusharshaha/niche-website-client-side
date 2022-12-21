import React, { useState, useEffect } from 'react';
import { Container, Row,Spinner } from 'react-bootstrap';
import Product from '../Product/Product';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://kids-toy-server.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <Header></Header>

            {products.length >  0 ?
                <Container className='my-5'>
                <h3 className='text-center fw-bold mb-5'>Explore Our Top Product</h3>
                <Row xs={1} md={2} lg={3} className='g-3'>
                    {
                        products?.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </Row>
            </Container>
            :
            <div className="text-center"><Spinner animation="grow" variant="warning" /></div>
            }

            <Footer></Footer>
        </>
    );
};

export default Explore;