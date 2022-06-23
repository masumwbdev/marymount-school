import React from 'react';
import Eservices from '../../components/Eservices/Eservices';
import HeadTeacher from '../../components/HeadTeacher/HeadTeacher';
import Lightbox from '../../components/Lightbox/Lightbox';
import Links from '../../components/Links/Links';
import WebMaster from '../../components/WebMaster/WebMaster';
import Banner from '../../shared/Banner/Banner';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';

const Gallery = () => {
    return (
        <div>
            <Banner />
            <Navbar />
            <div className='layout d-lg-flex justify-content-between width-control mt-5 mb-5'>
                <div className='first-layout'>
                    <Lightbox />
                </div>
                <div className='second-layout'>
                    <HeadTeacher />
                    <Eservices />
                    <Links />
                    <WebMaster />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Gallery;