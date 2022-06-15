import React from 'react';

const AllTeachers = ({teacher}) => {
    const {name} = teacher;
    return (
        <div>
            {name}
        </div>
    );
};

export default AllTeachers;