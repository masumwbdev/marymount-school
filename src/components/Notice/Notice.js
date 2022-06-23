import React from 'react';
import { Link } from 'react-router-dom';
import notice from '../../assets/notice.png'
import './Notice.css'

const Notice = () => {
    return (
        <div className='card-style hvr-underline-from-left mt-4 notice important-links'>
            <div className="row">
                <div className='col-lg-4'>
                    <img className='notice-img' src={notice} alt="" />
                </div>
                <div className='col-lg-8'>
                    <h5>নোটিশ বোর্ড</h5>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item mb-2">
                            <Link to='/home'>বিদ্যালয়ের শ্রেণি কার্যক্রম চালু করা সংক্রান্ত জরুরী নোটিশ</Link>
                        </li>
                        <li class="nav-item mb-2">
                            <Link to='/home'>এপ্রিল হতে জুন- ২০২২ খ্রি. পর্যন্ত তিন মাসের শিক্ষার্থীদের টিউশন ফি আদায়ের নোটিশ</Link>
                        </li>
                        <li class="nav-item mb-2">
                            <Link to='/home'>প্রাক নির্বাচনী ও অর্ধ-বার্ষিক পরীক্ষা- ২০২২ এর সময়সূচি</Link>
                        </li>
                        <li class="nav-item mb-2">
                            <Link to='/home'>এসএসসি প্রস্তুতিমূলক পরীক্ষা- ২০২২ এর সময়সূচি</Link>
                        </li>
                        <li class="nav-item mb-2">
                            <Link to='/home'>১৫/০৩/২০২২ খ্রি. হতে বিদ্যালয়ের শ্রেণি কার্যক্রম সংক্রান্ত জরুরী নোটিশ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Notice;