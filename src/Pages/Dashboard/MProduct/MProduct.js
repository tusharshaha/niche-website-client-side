import React from 'react';
import {Col,Card,Button} from 'react-bootstrap'
import Swal from 'sweetalert2';
const MProduct = ({product}) => {
    const {_id,img,name,price}= product;
    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure, You want to delete?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://kids-toy-server.onrender.com/products/${id}`, {
                    method: 'DELETE'
                }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Successfully Deleted Your Order',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
            }
        })
    }
    return (
        <Col>
            <Card data-aos='fade-in' className='h-100 card-hover'>
                <Card.Img className='card-img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h4 className='mb-3'>&#36; {price}</h4>
                    <Button onClick={()=>handleDelete(_id)} variant='danger'>Delete</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MProduct;