import React from 'react';
import { Col, Card } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import './Review.css'
const Review = ({ reviews }) => {
    const { productName, name, rating, description } = reviews
    return (
        <Col data-aos='fade-in' >
            <Card className='h-100 card-hover'>
                <Card.Header>{productName}</Card.Header>
                <Card.Body>
                    <Card.Title className='text-capitalize'>{name}</Card.Title>
                    <Card.Text className='text-secondary mb-2'>
                        {description}
                    </Card.Text>
                    <div className='d-flex align-items-center'>
                        <ReactStars
                            count={5}
                            value={Number(rating)}
                            edit={false}
                            size={24}
                            activeColor="#ffd700"
                        /> <span className='ms-2'>({rating})</span>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;