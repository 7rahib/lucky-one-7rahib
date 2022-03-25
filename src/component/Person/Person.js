import React from 'react';
import './Person.css'

const Person = (props) => {
    const { person } = props
    return (
        <div>
            <h1>{person}</h1>
        </div>
    );
};

export default Person;