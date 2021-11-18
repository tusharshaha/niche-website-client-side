import React from 'react';
import { Container,Button } from 'react-bootstrap';
import './TopBanner.css'
const TopBanner = () => {
    return (
        <div className='hero-section'>
            <Container className='text-center'>
                <h2 className='text-white '>Our <span className='text-warning'>Toys</span> Open New Skills in Your <span className='text-warning'>Kids</span></h2>
                <Button variant='warning' className='text-white fw-bold mt-4 text-uppercase'> Shop Now</Button>
            </Container>
        </div>
    );
};

export default TopBanner;