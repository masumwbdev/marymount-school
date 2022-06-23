import React from 'react';
import { Link } from 'react-router-dom';

const WebMaster = () => {
    return (
        <div className='important-links mb-4'>
            <h6 className='home-heading'>ওয়েব মাস্টার</h6>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link to='/home'>ওয়েব মাস্টার লগইন</Link>
                </li>
            </ul>
        </div>
    );
};

export default WebMaster;