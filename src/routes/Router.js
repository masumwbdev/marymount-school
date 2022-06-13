import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Navbar from '../shared/Navbar/Navbar';
import Banner from '../shared/Banner/Banner'

const Router = () => {
    return (
        <div>
            <Banner />
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='home' element={<Home />} />
            </Routes>
        </div>
    );
};

export default Router;