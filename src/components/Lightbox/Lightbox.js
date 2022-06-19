import React from 'react';
import { useState } from 'react';
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import './Lightbox.css'

const data = [
    {
        id: 1,
        imgSrc: img1
    },
    {
        id: 2,
        imgSrc: img2
    },
    {
        id: 3,
        imgSrc: img3
    },
    {
        id: 4,
        imgSrc: img4
    },
    {
        id: 5,
        imgSrc: img5
    },
    {
        id: 6,
        imgSrc: img6
    },
    {
        id: 7,
        imgSrc: img7
    },
    {
        id: 8,
        imgSrc: img8
    }
]
const Lightbox = () => {
    const [pic, setPic] = useState(false);
    const [tempImg, setTempImg] = useState("");
    const getImg = (imgSrc) => {
        setTempImg(imgSrc);
        setPic(true);
    }
    return (
        <div>
            <div className={pic ? "pic open" : 'pic'}>
                <img src={tempImg} alt="#" />
                <button onClick={() => setPic(false)} className='close-btn'>close</button>

            </div>
            <div className='lightbox'>
                {data.map((item, index) => {
                    return (
                        <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                            <img className='img-fluid' src={item.imgSrc} alt="#" />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Lightbox;