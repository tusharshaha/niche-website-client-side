import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Order from '../Order/Order';

const ManageAllOrder = () => {
    const [allOrders, setAllOrders] = useState([])
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        fetch('https://kids-toy-server.onrender.com/allOrder')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [update])
    return (
        <Container className='my-5'>
            <Row xs={1} md={2} lg={2} className='g-2'>
                {
                    allOrders?.map(aOrder => <Order
                        key={aOrder._id}
                        order={aOrder}
                        setUpdate={setUpdate}
                    />)
                }
            </Row>
        </Container>
    );
};

export default ManageAllOrder;