import React from 'react';
import './Student.css'

const Student = ({ student }) => {
    const { name, imgUrl, roll, sid } = student;
    return (
        <div className='student-container'>
            <div class="col">
                <div class="card stu-card h-100 border-0 p-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="text-center">
                            <img className='img-fluid' src={imgUrl} alt="..." />
                        </div>
                        <div className="card-body">
                            <h6 className='text-center'>{name}</h6>
                            <p className='text-center m-0'>Roll: {roll}</p>
                            <p className='text-center'>Stu ID: {sid}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Student;