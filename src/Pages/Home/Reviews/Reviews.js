import React, { useEffect, useState } from 'react';
import { Container,Row,Spinner } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('https://niche-product-server-side.vercel.app/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <Container className='my-5'>
            <h3 className='text-center fw-bold mb-5'>Customer Reviews</h3>
            {reviews.length > 0?<Row xs={1} sm={2} md={3} lg={3} className='g-3'>
                {
                    reviews?.map(review => <Review key={review._id} reviews={review}></Review>)
                }
            </Row>
            :
            <div className="text-center"><Spinner animation="grow" variant="warning" /></div>
            }
        </Container>
    );
};

export default Reviews;