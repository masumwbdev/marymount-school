import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Student from '../../components/Student/Student';
import './StudentApi.css'

const StudentsApi = () => {
    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState("");
    const handleChangeCourse = e => {
        setStudent(e.target.value)
    }
    const getUnique = (arr, comp) => {
        const unique = arr
            //store the comparison values in array
            .map(e => e[comp])

            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the dead keys & store unique objects
            .filter(e => arr[e])

            .map(e => arr[e]);

        return unique;
    };

    useEffect(() => {
        fetch('student_info.json')
            .then(res => res.json())
            .then(data => setStudents(data))

    }, [])

    const uniqueCouse = getUnique(students, "tag");
    const filterDropdown = students.filter(function (result) {
        return result.tag === student;
    })
    return (
        <div className='student-api'>
            <h5 className='text-center'>অধ্যয়নরত শিক্ষার্থীর তালিকা</h5>
            <div className='text-center mb-5 mt-3'>
                <label>
                    <span className="find-stu-tag" >ক্লাস সিলেক্ট করে শিক্ষার্থীদের অনুসন্ধান করুন : </span>
                    <select value={student} onChange={handleChangeCourse}>
                        {uniqueCouse.map(student => (
                            <option key={student.id} value={student.tag}>
                                {student.tag}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div className='mb-5 row row-cols-2 row-cols-md-4 g-3'>
                {filterDropdown.map(student => <Student
                    key={student.id}
                    student={student}
                ></Student>)}
            </div>
        </div>
    );
};

export default StudentsApi;