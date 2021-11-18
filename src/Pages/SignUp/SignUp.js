import React, { useState } from "react";
import { Alert, Container, Spinner, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

import "./Signup.css";

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({});
    const { createUser, authError, isLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...userInfo };
        newUser[field] = value;
        setUserInfo(newUser);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userInfo.password !== userInfo.Cpassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Your Password Didn't match!",
            })
            return;
        } else {
            createUser(userInfo.name, userInfo.email, userInfo.password, history, location,Swal);

        }
    };

    return (
        <>
            <Header></Header>
            <Container>
                <div className="my-5">

                    <h2 className="text-center mb-4 fw-bold">
                        Sign Up
                    </h2>
                    {isLoading ? <div className='text-center'>
                        <Spinner animation="border" variant="warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div> :<div className='sign-up'> <form onSubmit={handleSubmit} className='signup-container'>
                        <input
                            onBlur={handleBlur}
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                        <input
                            onBlur={handleBlur}
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />
                        <input
                            onBlur={handleBlur}
                            type="password"
                            name="password"
                            placeholder="Your Password"
                            required
                        />
                        <input
                            onBlur={handleBlur}
                            type="password"
                            name="Cpassword"
                            placeholder="Confirm Password"
                        />
                        <Button variant='warning' className='text-white fw-bold' type='submit'>Sign Up</Button>
                    </form>
                    {authError && <Alert className='mt-4' variant="danger">{authError}</Alert>}
                    <Link className='mt-4' to='/login'>Already have an account? Please Login</Link>
                    </div>
                    }
                </div>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default SignUp;
