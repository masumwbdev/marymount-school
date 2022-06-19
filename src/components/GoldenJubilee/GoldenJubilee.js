import React from 'react';
import './GoldenJubilee.css'
import suvorno from '../../assets/suborno-joyonti.png'
import { Link } from 'react-router-dom';

const GoldenJubilee = () => {
    return (
        <div className='home-card-style hvr-underline-from-left'>
            <div className="row">
                <div className='col-lg-4'>
                    <img className='img-fluid' src={suvorno} alt="" />
                </div>
                <div className='col-lg-8'>
                    <h5>স্বাধীনতার সুবর্ণজয়ন্তী</h5>
                    <p>বাংলাদেশের স্বাধীনতার সুবর্ণজয়ন্তী হলো ১৯৭১ সালে ২৬ মার্চ থেকে ১৬ ডিসেম্বর নয়মাস সশস্ত্র মুক্তিযুদ্ধের মাধ্যমে পাকিস্তানের কাছ থেকে বাংলাদেশের স্বাধীনতা অর্জনের ৫০ বছরপূর্তি পালনের জন্য বাংলাদেশ সরকার কর্তৃৃক ঘোষিত একটি বার্ষিক পরিকল্পনা।</p>
                    <Link to='/gallery'>সুবর্ণজয়ন্তী ছবির গ্যালারী</Link>
                </div>
            </div>
        </div>
    );
};

export default GoldenJubilee;