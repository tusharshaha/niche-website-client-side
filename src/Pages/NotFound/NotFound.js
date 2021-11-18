import React from 'react';
import './NotFound.css'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const NotFound = () => {
    const history = useHistory()
    return (
        <div className='not-found'>
            <img src={`https://image.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg`} alt="" />
            <Button onClick={()=>history.push('/home')} variant='outline-danger'> Back To Home</Button>
        </div>
    );
};

export default NotFound;