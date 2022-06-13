import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to='/home'>প্রথম পাতা</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/home'>পরিচিতি</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/home'>শিক্ষক-শিক্ষিকা</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/home'>শিক্ষার্থী</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/home'>পরীক্ষার ফলাফল</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/home'>ছবির গ্যালারি</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/home'>যোগাযোগ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;