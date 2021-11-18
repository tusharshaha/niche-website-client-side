import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from '../../Product/Product';

const TopProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fathomless-savannah-81203.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container className='my-5'>
            <h3 className='text-center fw-bold mb-5'>Our Top Products</h3>
            {products.length > 0 ?
                <Row xs={1} md={2} lg={3} className='g-3'>
                    {
                        products?.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                    }
                </Row>
                :
                <div className="text-center"><Spinner animation="grow" variant="warning" /></div>
            }
        </Container>
    );
};

export default TopProducts;