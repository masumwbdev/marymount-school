import React from 'react';
import { Link } from 'react-router-dom';
import downloads from '../../assets/downloads.png'

const Downloads = () => {
    return (
        <div className='card-style hvr-underline-from-left mt-4 notice important-links'>
            <div className="row">
                <div className='col-lg-4'>
                    <img className='notice-img' src={downloads} alt="" />
                </div>
                <div className='col-lg-8'>
                    <h5>নোটিশ বোর্ড</h5>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item mb-2">
                            <Link to='/home'>২০২২ শিক্ষাবর্ষে অপেক্ষমান তালিকা হতে শিক্ষার্থী ভর্তি সংক্রান্ত নোটিশ</Link>
                        </li>
                        <li class="nav-item mb-2">
                            <Link to='/home'>২০২২ শিক্ষাবর্ষে ভর্তিচ্ছু নির্বাচিত শিক্ষার্থীদের ভর্তি সংক্রান্ত নোটিশ</Link>
                        </li>
                        <li class="nav-item mb-2">
                            <Link to='/home'>২০২২ শিক্ষাবর্ষে ভর্তিচ্ছু কোটায় নির্বাচিত শিক্ষার্থীদের ভর্তি সংক্রান্ত নোটিশ</Link>
                        </li>
                        <li class="nav-item mb-2">
                            <Link to='/home'>মেরিমাউন্ট জিলা স্কুলে ২০২২ শিক্ষাবর্ষে ৩য় ও ৬ষ্ঠ শ্রেণিতে শিক্ষার্থী ভর্তির লক্ষে নির্বাচিত অপেক্ষমান তালিকা</Link>
                        </li>
                        <li class="nav-item mb-2">
                            <Link to='/home'>মেরিমাউন্ট জিলা স্কুলে ২০২২ শিক্ষাবর্ষে ৩য় ও ৬ষ্ঠ শ্রেণিতে শিক্ষার্থী ভর্তির লক্ষে নির্বাচিত শিক্ষার্থী তালিকা</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Downloads;