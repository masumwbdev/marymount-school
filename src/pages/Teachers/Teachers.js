import React from 'react';
import TeachersApi from '../../apis/TeachersApi/TeachersApi';
import Banner from '../../shared/Banner/Banner';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';

const Teachers = () => {
    return (
        <div>
            <Banner />
            <Navbar />
            <TeachersApi />
            <Footer />
        </div>
    );
};

export default Teachers;