import React, { useEffect, useState } from 'react';
import AllTeachers from '../../components/AllTeachers/AllTeachers';

const TeachersApi = () => {
    const [searchData, setSearchData] = useState("");
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('teachers_info.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])

    const handleSearch = e => {
        setSearchData(e.target.value)
    }

    return (
        <>
            <div className='d-lg-flex align-items-center justify-content-between mb-3'>
                <div>
                    <h5 className='fw-bold'>শিক্ষকদের তালিকা : </h5>
                </div>
                <div>
                    <input className='border-0 rounded p-1' onChange={handleSearch} type="text" placeholder='অনুসন্ধান করুন....' />
                </div>
            </div>
            <div class="mb-5 row row-cols-xm-1 row-cols-sm-2 row-cols-md-5 g-2 text-sm-center">
                {
                    (teachers.filter((value) => {
                        if (searchData === "") {
                            return value;
                        } else if (value.name.toLowerCase().includes(searchData.toLowerCase()) || value.title.includes(searchData) || value.phone.includes(searchData) || value.joined.includes(searchData) || value.district.includes(searchData)) {
                            return value;
                        }
                    })
                        .map(t => <AllTeachers
                            key={t.id}
                            t={t}
                        ></AllTeachers>))
                }
            </div>
        </>
    );
};

export default TeachersApi;