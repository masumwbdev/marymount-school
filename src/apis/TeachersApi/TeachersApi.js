import React, { useEffect, useState } from 'react';
import AllTeachers from '../../components/AllTeachers/AllTeachers';

const TeachersApi = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('teachers_info.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div class="mb-5 row row-cols-2 row-cols-md-5 g-3">
            {
                teachers.map(t => <AllTeachers
                    key={t.id}
                    t={t}
                ></AllTeachers>)
            }
        </div>
    );
};

export default TeachersApi;