import React from 'react';
import { Link } from 'react-router-dom';

const Eservices = () => {
    return (
        <div className='important-links mb-3'>
            <h6 className='home-heading'>অভ্যন্তরীণ ই-সেবা</h6>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link to='/home'>ই-স্কুল</Link>
                </li>
                <li class="nav-item">
                    <Link to='/home'>পাঠশালা</Link>
                </li>
                <li class="nav-item">
                    <Link to='/home'>পিডিএস (সরকারি মাধ্যমিক)</Link>
                </li>
                <li class="nav-item">
                    <Link to='/home'>ভর্তি পরীক্ষার আবেদন</Link>
                </li>
            </ul>
        </div>
    );
};

export default Eservices;