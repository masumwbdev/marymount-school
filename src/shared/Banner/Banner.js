import React from 'react';
import './Banner.css'
import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>মেরিমাউন্ট জিলা স্কুল</h3>
                            <h5>সদর, মেরিমাউন্ট</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;