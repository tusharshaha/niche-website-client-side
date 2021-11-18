import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user,logOut } = useAuth()
    const history = useHistory()
    return (
        <Navbar sticky="top" expand="lg" bg="warning" variant='light'>
            <Container>
                <Navbar.Brand className='top-icon'>KidsToy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='text-center'>
                <Nav className="ms-auto fw-bold">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to='/explore'>Explore</Nav.Link>
                    {
                        user.email ?
                            <>
                                <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link>
                                <Button onClick={logOut} className='fw-bold bg-dark me-3'>Log Out</Button>
                                {
                                    user?.displayName && <Navbar.Text className='text-capitalize'>
                                    {user?.displayName}
                                  </Navbar.Text>
                                }
                            </>
                            :
                            <Button onClick={()=>history.push('/login')} variant='dark' className='fw-bold'>Log In</Button>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;