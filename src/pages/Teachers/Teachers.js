import TeachersApi from '../../apis/TeachersApi/TeachersApi';
import Eservices from '../../components/Eservices/Eservices';
import HeadTeacher from '../../components/HeadTeacher/HeadTeacher';
import Links from '../../components/Links/Links';
import WebMaster from '../../components/WebMaster/WebMaster';
import Banner from '../../shared/Banner/Banner';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import './Teachers.css'

const Teachers = () => {

    return (
        <div className='teachers-container'>
            <Banner />
            <Navbar />

            <div className="home-container pt-5">
                <div className='layout d-flex justify-content-between width-control'>
                    <div className='first-layout'>
                        <TeachersApi />
                    </div>
                    <div className='second-layout'>
                        <HeadTeacher />
                        <Eservices />
                        <Links />
                        <WebMaster />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Teachers;