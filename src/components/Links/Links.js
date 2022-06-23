import React from 'react';
import { Link } from 'react-router-dom';
import './Links.css'

const Links = () => {
    return (
        <div className='important-links mb-3'>
            <h6 className='home-heading'>গুরুত্বপূর্ণ লিংক</h6>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link to='/home'>প্রথম পাতা</Link>
                </li>
                <li class="nav-item">
                    <Link to='/introduction'>পরিচিতি</Link>
                </li>
                <li class="nav-item">
                    <Link to='/teachers'>শিক্ষক-শিক্ষিকা</Link>
                </li>
                <li class="nav-item">
                    <Link to='/students'>শিক্ষার্থী</Link>
                </li>
                <li class="nav-item">
                    <Link to='/results'>পরীক্ষার ফলাফল</Link>
                </li>
                <li class="nav-item">
                    <Link to='/gallery'>ছবির গ্যালারি</Link>
                </li>
                <li class="nav-item">
                    <Link to='/contact'>যোগাযোগ</Link>
                </li>
            </ul>
        </div>
    );
};

export default Links;