import React,{useState} from 'react';
import { Container,Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import './SendReview.css'
const SendReview = () => {
    const {user} = useAuth()
    const [review,setReview]= useState({})
    const handleBlur= e=>{
        const field = e.target.name
        const value = e.target.value
        const newReview = {...review}
        newReview[field] = value;
        newReview.name= user?.displayName
        setReview(newReview)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        fetch('https://kids-toy-server.onrender.com/reviews',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        }).then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Review Send Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                e.target.reset()
            }else{
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Opps! Review not send',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }
    return (
        <Container className='review-form'>
            <form onSubmit={handleSubmit}>
                <input defaultValue={user?.displayName} type="text" disabled/>
                <input onBlur={handleBlur} name='productName' placeholder='Product Name' required />
                <input onBlur={handleBlur} type="number" name="rating" id="" min={0} max={5} placeholder='Rate' required/>
                <textarea onBlur={handleBlur} name="description" id="" cols="10" rows="5" placeholder='Your Review' required></textarea>
                <Button type='submit' variant='warning'>Send Review</Button>
            </form>
        </Container>
    );
};

export default SendReview;