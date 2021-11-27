import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import {FcIdea} from 'react-icons/fc'
import {FaPuzzlePiece} from 'react-icons/fa'
import {IoSchoolSharp} from 'react-icons/io5'
import {FiHeart} from 'react-icons/fi'
import {FaDropbox} from 'react-icons/fa'
import {FaPaw} from 'react-icons/fa'

const AboutProducts = () => {
    const productInfo = [
        {id:1,icon:FcIdea,title:'Imagine',description:'Imagination is the ability to produce and simulate novel objects, sensations, and ideas in the mind without any immediate input of the senses.'},

        {id:2,icon:FaPuzzlePiece,iconColor:'red',title:'Create',description:"Personal development consists of activities that develop a person's capabilities and potential, build human capital, facilitate employability"},

        {id:3,icon:IoSchoolSharp,iconColor:'lightblue',title:'Learn',description:'Learning is the process of acquiring new understanding, knowledge, behaviors, skills, values, attitudes, and preferences.'},

        {id:4,icon:FiHeart,iconColor:'red',title:'Think',description:'In their most common sense, the terms thought and thinking refer to conscious processes that can happen independently of sensory stimulation. '},

        {id:5,icon:FaDropbox,iconColor:'lightBlue',title:'Play',description:'Helps your child reach their developmental milestones. We utilize a range of intervention services to guide your child into their full potential.'},

        {id:6,icon:FaPaw,iconColor:'lightgreen',title:'Teach',description:'Teaching is fundamentally about creating the pedagogical, social, and ethical conditions under which students agree to take charge of their own learning, individually and collectively.'}
    ]
    return (
        <Container className='my-5'>
            <Row xs={1} sm={2} md={2} lg={3} className="g-4">
                {
                    productInfo?.map(product=><Col key={product.id}>
                        <div data-aos='fade-up' className='text-center'>
                            <product.icon style={{color:product.iconColor, fontSize:'35px'}}/>
                            <h4 className='fw-bold mt-3'>{product.title}</h4>
                            <p className='text-secondary mt-2'>{product.description}</p>
                        </div>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default AboutProducts;