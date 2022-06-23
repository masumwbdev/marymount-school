import React from 'react';
import Eservices from '../../components/Eservices/Eservices';
import HeadTeacher from '../../components/HeadTeacher/HeadTeacher';
import IntroHistory from '../../components/IntroHistory/IntroHistory';
import IntroTable from '../../components/IntroTable/IntroTable';
import Links from '../../components/Links/Links';
import WebMaster from '../../components/WebMaster/WebMaster';
import Banner from '../../shared/Banner/Banner';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';

const Introduction = () => {
    return (
        <div>
            <Banner />
            <Navbar />
            <div className='layout d-lg-flex justify-content-between width-control'>
                    <div className='first-layout'>
                    <IntroTable />
            <IntroHistory />
                    </div>
                    <div className='second-layout mt-5'>
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

export default Introduction;