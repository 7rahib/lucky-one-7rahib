import React from 'react';
import './Person.css'

const Person = (props) => {
    const { name } = props.person;
    return (
        <div>
            <h5>{name}</h5>
        </div>
    );
};

export default Person;