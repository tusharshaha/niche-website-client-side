import React from 'react';
import { Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
import useAuth from '../../../Hooks/useAuth';
const Order = ({ order }) => {
    const { isAdmin } = useAuth()
    const { _id, userName, userEmail, productName, status, date, address, phone } = order
    const handleShip = (id)=>{
        fetch(`https://niche-product-server-side.vercel.app/orders/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Prdoduct shipped successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure, You want to delete?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://niche-product-server-side.vercel.app/orders/${id}`, {
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
        <Col data-aos='zoom-in'>
            <Card className='h-100 card-hover'>
                <Card.Body>
                    <Card.Title className='text-secondary fw-bold'>{productName}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <span className='me-3'><span className=' fw-bold'>Name:</span> {userName}</span>

                        <span><span className=' fw-bold'>Email:</span> {userEmail}</span>
                    </ListGroupItem>

                    <ListGroupItem>
                        <span className='me-3'><span className=' fw-bold'>Date:</span> {date}</span>

                    </ListGroupItem>

                    <ListGroupItem>
                        <span><span className=' fw-bold'>Phone: </span>{phone}</span>
                    </ListGroupItem>

                    <ListGroupItem>
                        <span className='me-3'>{address}</span>
                    </ListGroupItem>

                </ListGroup>
                <Card.Body>
                    {!isAdmin && <> {status === 'pending' ? <span className='me-3 text-danger text-capitalize'>{status}</span>
                        :
                        <span className='me-3 text-success text-capitalize'>{status}</span>
                    }
                        <Button onClick={() => handleDelete(_id)} variant='danger'>Delete</Button></>}

                    {isAdmin && <> {status === 'pending' ? <span className='me-3 text-danger text-capitalize'>{status}</span>
                        :
                        <span className='me-3 text-success text-capitalize'>{status}</span>
                    }
                        {status === 'pending' &&
                            <Button onClick={()=>handleShip(_id)} className='me-3' variant='success'>Ship</Button>
                        }

                        <Button onClick={() => handleDelete(_id)} variant='danger'>Delete</Button></>}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Order;