import React from 'react';
import StudentsApi from '../../apis/StudentsApi/StudentsApi';
import Eservices from '../../components/Eservices/Eservices';
import HeadTeacher from '../../components/HeadTeacher/HeadTeacher';
import Links from '../../components/Links/Links';
import WebMaster from '../../components/WebMaster/WebMaster';
import Banner from '../../shared/Banner/Banner';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import './Students.css'

const Students = () => {
    return (
        <div className='students-container'>
            <Banner />
            <Navbar />
            <div className='layout d-lg-flex justify-content-between width-control mt-5'>
                <div className='first-layout'>
                    <StudentsApi />
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

export default Students;