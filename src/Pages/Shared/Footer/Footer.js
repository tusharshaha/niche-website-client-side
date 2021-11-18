import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { RiInstagramFill } from 'react-icons/ri'
import { FaLinkedin } from 'react-icons/fa'
import { FaPhoneVolume } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaSignInAlt } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { ImLocation2 } from 'react-icons/im'
import { SiAzuredataexplorer } from 'react-icons/si'
import { MdSpaceDashboard } from 'react-icons/md'
import './Footer.css'
const Footer = () => {

    return (
        <div className='footer-section'>
            <Container className=' py-5'>
                <Row xs={1} sm={2} md={2} lg={3} className="g-3">
                    <Col className='py-2'>
                        <h2 className='top-icon'>KidsToy</h2>
                        <p className='text-secondary fw-light mt-3'>A toy is an item that is used primarily by children though may also be marketed to adults under certain circumstances. Playing with toys can be an enjoyable means of training young children for life experiences.</p>
                        <div className="icon-container">
                            <a href="https://www.facebook.com/tusharshaha619" rel="noreferrer" target='_blank'><FaFacebook /></a>
                            <a href="https://www.twitter.com" rel="noreferrer" target='_blank'><AiFillTwitterCircle /></a>
                            <a href="https://www.instagram.com" rel="noreferrer" target='_blank'><RiInstagramFill/></a>
                            <a href="https://www.linkedin.com/in/tushar-kumar-shaha/" rel="noreferrer" target='_blank'><FaLinkedin /></a>
                        </div>
                    </Col>
                    <Col className='py-2'>
                        <h4 className='fw-bold'>Quick Links</h4>

                        <div className='mt-3'>
                            <ul className='mt-3 info'>
                                <li><FaHome className='icon' /> Home</li>
                                <li><SiAzuredataexplorer className='icon' /> Explore</li>
                                <li><MdSpaceDashboard className='icon' /> Dashboard</li>
                                <li><FaSignInAlt className='icon' /> Sign Up</li>
                            </ul>
                        </div>

                    </Col>
                    <Col className='py-2'>
                        <h4 className='fw-bold'>Contact Us</h4>
                        <ul className='mt-3 info'>
                            <li><FaPhoneVolume /> +1000053434</li>
                            <li><FiMail />  tusharkrs2018@gmail.com</li>
                            <li><ImLocation2 />  Chittagong,Bangladesh</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className='text-center pb-3'>
                <small>Copyright 2021 by  <span className='fw-bold'> Tushar Kumar Shaha</span> All Rights Reserved</small>
            </div>
        </div>
    );
};

export default Footer;