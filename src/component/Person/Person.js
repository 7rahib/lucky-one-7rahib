import React from 'react';
import './Person.css'

const Person = (props) => {
    const { name, img } = props.person;
    return (
        <div className='cart-items'>
            <img className='image' src={img} alt="" height={50} width={50} /><span className='name'>{name}</span>

        </div>
    );
};

export default Person;