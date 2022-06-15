import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllTeachers from '../../components/AllTeachers/AllTeachers';

const TeachersApi = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('teachers_info.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div>
            {
                teachers.map(teacher => <AllTeachers
                    key={teacher.id}
                    teacher={teacher}
                >
                </AllTeachers>)
            }
        </div>
    );
};

export default TeachersApi;