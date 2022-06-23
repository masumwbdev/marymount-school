import React from 'react';
import Eservices from '../../components/Eservices/Eservices';
import HeadTeacher from '../../components/HeadTeacher/HeadTeacher';
import Links from '../../components/Links/Links';
import WebMaster from '../../components/WebMaster/WebMaster';
import Banner from '../../shared/Banner/Banner';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Banner />
            <Navbar />

            <div className='layout d-flex justify-content-between width-control mt-5 mb-5 contact'>
                <div className='first-layout'>
                    <h6>যোগাযোগ : </h6>
                    <div className="contact-table text-center">
                        <table>
                            <thead>
                                <tr>
                                    <td>বিদ্যালয়ের নাম :</td>
                                    <td>মেরিমাউন্ট জিলা স্কুল</td>
                                </tr>
                                <tr>
                                    <td>গ্রাম/বাড়ী ও সড়কের বিবরণ :	</td>
                                    <td>
                                        জিলা স্কুল রোড
                                    </td>
                                </tr>
                                <tr>
                                    <td>ওয়ার্ড নম্বর :	</td>
                                    <td>
                                        8
                                    </td>
                                </tr>
                                <tr>
                                    <td>ইউনিয়ন/পৌরসভা/সিটি কর্পোরেশন :	</td>
                                    <td>
                                        মেরিমাউন্ট পৌরসভা
                                    </td>
                                </tr>
                                <tr>
                                    <td>পোস্ট অফিস :	</td>
                                    <td>
                                        মেরিমাউন্ট
                                    </td>
                                </tr>
                                <tr>
                                    <td>পোস্ট কোড :</td>
                                    <td>
                                        ২২০০
                                    </td>
                                </tr>
                                <tr>
                                    <td>পুলিশ স্টেশন :	</td>
                                    <td>
                                        কোতোয়ালী মডেল থানা
                                    </td>
                                </tr>
                                <tr>
                                    <td>উপজেলা :</td>
                                    <td>
                                        মেরিমাউন্ট সদর
                                    </td>
                                </tr>
                                <tr>
                                    <td>জেলা :</td>
                                    <td>
                                        মেরিমাউন্ট
                                    </td>
                                </tr>
                                <tr>
                                    <td>বিভাগ :</td>
                                    <td>
                                        মেরিমাউন্ট
                                    </td>
                                </tr>
                                <tr>
                                    <td>টেলিফোন :	</td>
                                    <td>
                                        ০8১-৬347৫০
                                    </td>
                                </tr>
                                <tr>
                                    <td>E-Mail :</td>
                                    <td>
                                        maryschool@gmail.com
                                    </td>
                                </tr>
                                <tr>
                                    <td>Website :</td>
                                    <td>
                                        www.mhs.edu.bd
                                    </td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className='second-layout'>
                    <HeadTeacher />
                    <Eservices />
                    <Links />
                    <WebMaster />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;