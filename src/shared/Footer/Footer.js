import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='width-control mt-5 d-lg-flex justify-content-between'>
            <div>
                <h6>কারিগরি সহায়তায়:</h6>
                <h6>কর্পোরেট সিস্টেম সলিউশনস লিমিটেড</h6>
                <span>Email: anischpbd@gmail.com</span>
            </div>
            <div>
                <h6>পরিকল্পনা ও বাস্তবায়নে:</h6>
                <h6>বিদ্যালয় ও পরিদর্শন শাখা</h6>
                <h6>মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর</h6>
            </div>
        </div>
        </div>
    );
};

export default Footer;