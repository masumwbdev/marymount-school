import React from 'react';
import './AllTeachers.css'

const AllTeachers = ({ t }) => {
    const { name, title, joined, district, phone, imgURL } = t;
    return (
        <div className='all-teachers'>
            <div class="col">
                <div class="card h-100 border-0 p-2 hvr-underline-from-left">
                    <div className="text-center">
                    <img src={imgURL} className="card-img-top at-img" alt="..." />
                    </div>
                    <div className="card-body">
                        <h6 className='text-center'>{name}</h6>
                        <p className='text-center'>{title}</p>
                        <div className='text-center'>
                            <small>ফোন: {phone}</small><br />
                            <small>যোগদান: {joined}</small><br />
                            <small>জেলা: {district}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTeachers;