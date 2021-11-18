import React,{useState,useEffect} from 'react';
import { Container,Row} from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Order from '../Order/Order';

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([])
    const {user} = useAuth()
    useEffect(()=>{
        fetch(`https://fathomless-savannah-81203.herokuapp.com/myOrder/${user?.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[user,myOrders])
    return (
        <Container className='my-5'>
            <Row xs={1} md={2} lg={2} className='g-2'>
                {
                    myOrders?.map(mOrder => <Order key={mOrder._id} order={mOrder}></Order>)
                }
            </Row>
        </Container>
    );
};

export default MyOrder;