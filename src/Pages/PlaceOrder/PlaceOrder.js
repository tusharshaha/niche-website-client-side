import React,{useState} from 'react';
import { Container,Card,Row,Col,Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Swal from 'sweetalert2'
import './PlaceOrder.css'
const PlaceOrder = () => {
    const [product, setProduct] = useState({});
    const [orderInfo, setOrderInfo] = useState({})
    const {user} = useAuth()
    const {id}= useParams();
    fetch(`https://fathomless-savannah-81203.herokuapp.com/products/${id}`)
    .then(res=>res.json())
    .then(data => setProduct(data))
    const handleBlur=(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newOrder = {...orderInfo};
        newOrder.userName = user?.displayName
        newOrder.userEmail = user?.email
        newOrder.productName = product?.name
        newOrder.status = 'pending'
        newOrder[field] = value;
        setOrderInfo(newOrder)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch('https://fathomless-savannah-81203.herokuapp.com/myOrder',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(orderInfo)
        }).then(res=>res.json())
        .then(data =>{
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully place Your order',
                    showConfirmButton: false,
                    timer: 1500
                })
                e.target.reset()
            }
        })
    }
    return (
        <>
        <Header></Header>
        <Container className='my-5'>
        <Row xs={1} md={2} className='g-3'>
                    <Col data-aos='fade-right'>
                        <Card className='h-100'>
                            <Card.Img className='card-img' variant="top" src={product?.img} />
                            <Card.Body>
                                <Card.Title>{product?.name}</Card.Title>
                                <Card.Text>
                                    {product?.description}
                                </Card.Text>
                                <h4 className='mb-3'>&#36; {product.price}</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col data-aos='fade-left'>
                        <div className='place-order'>
                            <h2 className='text-center mb-3 fw-bold text-warning'>Place Your Order</h2>
                            <form onSubmit={handleSubmit}>
                                <input onBlur={handleBlur} type="text" name='userName' placeholder="User Name" defaultValue={user?.displayName} required />

                                <input onBlur={handleBlur} type="email" name='userEmail'  defaultValue={user?.email} required disabled/>

                                <input type="text" name='productName' defaultValue={product?.name} disabled/>

                                <input onBlur={handleBlur} type="date" name='date' placeholder="Date" required />

                                <input onBlur={handleBlur} type="text" name='address' placeholder="Address" required />

                                <input onBlur={handleBlur} type="number" name='phone' placeholder="Phone Number" required />

                                <Button type='submit' variant='warning' className='text-white fw-bold mt-4'>Place Order</Button>
                            </form>
                        </div>
                    </Col>
                </Row>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default PlaceOrder;