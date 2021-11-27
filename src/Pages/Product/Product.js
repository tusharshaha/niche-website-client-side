import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Product.css'
const Product = ({product}) => {
    const {_id,img,name,price,description}= product;
    const history= useHistory()
    return (
        <Col data-aos='zoom-in'>
            <Card className='h-100 card-hover'>
                <Card.Img className='card-img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='text-secondary'>
                        {description.split(' ').slice(0, 10).toString().replace(/,/g, ' ')}...
                    </Card.Text>
                    <h4 className='mb-3'>&#36; {price}</h4>
                    <Button onClick={()=>history.push(`/placeOrder/${_id}`)} variant="warning w-100 text-white fw-bold">BUY NOW</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;