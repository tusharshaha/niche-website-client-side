import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { Link, useHistory, useLocation } from "react-router-dom";
import { Button,Alert,Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2'
import './Login.css'
const Login = () => {
    const [userInfo, setUserInfo] = useState({});
    const { logIn,authError,isLoading } = useAuth()
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
        logIn(userInfo.email, userInfo.password, history, location,Swal);
    };

    return (
        <>
            <Header></Header>
            {!isLoading?<div className='login'>
                <form onSubmit={handleSubmit} className='login-container'>
                    <div className='user-icon'>
                        <i className="fas fa-user"></i>
                    </div>
                    <input
                        onBlur={handleBlur}
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        onBlur={handleBlur}
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <Button variant='warning' className='text-white fw-bold' type='submit'>Login</Button>
                </form>
                {authError && <Alert className="mt-4" variant="danger">{authError}</Alert>}
                <Link className='mt-4' to='/signup'>Haven't account? Please Sign up</Link>

            </div>
            :
            <div className="text-center"><Spinner animation="grow" variant="warning" /></div>
            }
            <Footer></Footer>
        </>
    );
};

export default Login;