import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
import './MakeAdmin.css'
const MakeAdmin = () => {
    const [adminEmail, setAdminEmail] = useState('')
    const handleBlur = (e) => {
        setAdminEmail(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://niche-product-server-side.vercel.app/users/${adminEmail}`, {
            method: "PUT",
            headers: {
                "authorization": `Bearer ${window.localStorage.getItem('token')}`,
                "content-type": "application/json",
            },
        })
            .then((res) => {
                if(res.status === 200){
                    return res.json()
                }else if(res.status === 403){
                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: 'Warning!',
                        text: "You don't have permission to make admin",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully Make Admin',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    e.target.reset()
                }
            });
    }
    return (
        <Container>
            <h4 className='text-center mt-5'>Make Admin</h4>
            <form className='admin-form' onSubmit={handleSubmit}>
                <input onBlur={handleBlur} type="email" name="" placeholder='Input Email' required />
                <Button type='submit' className='text-white fw-bold' variant='warning'>Make Admin</Button>
            </form>
        </Container>
    );
};

export default MakeAdmin;