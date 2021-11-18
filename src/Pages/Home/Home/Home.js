import React from 'react';
import TopProducts from '../TopProducts/TopProducts';
import TopBanner from '../TopBanner/TopBanner';
import AboutProducts from '../AboutProducts/AboutProducts';
import Reviews from '../Reviews/Reviews';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <>
        <Header></Header>
        <TopBanner></TopBanner>
        <AboutProducts></AboutProducts>
        <TopProducts></TopProducts>
        <Reviews></Reviews>
        <Footer></Footer>
        </>
    );
};

export default Home;