import React from 'react';
import head from '../../assets/head-teacher.png'
import './HeadTeacher.css'

const HeadTeacher = () => {
    return (
        <div className='head-container'>
            <h6 className='home-heading'>প্রধান শিক্ষক</h6>
            <img className='img-fluid' src={head} alt="" />
            <p>আব্দুল্লাহ কাইজার</p>
        </div>
    );
};

export default HeadTeacher;