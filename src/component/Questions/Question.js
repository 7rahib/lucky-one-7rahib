import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='questions'>
            <div className='qaheader'>
                <h2>Questions and Answers</h2>
            </div>
            <hr />
            <div className='container'>
                <h4>Question 1</h4>
                <div>
                    <h3>How React Works ?</h3>
                    <h4>Props</h4>
                    <p>React is a JavaScript library for creating logical and efficient user interfaces (UIs). Components which are how we show information are created using JSX. Components are reusable user interfaces that allow you to divide an app into discrete parts that work independently of one another. To construct a functioning and dynamic UI, components may communicate with each other via props and state. React keeps a copy of the DOM using JavaScript's virtual DOM, and it utilizes a diff algorithm to compare it to any changes before applying it to the real DOM. React's lightweight version of the Real DOM is the Virtual DOM. Real DOM manipulation takes much longer than virtual DOM manipulation. When the state of an object changes, Virtual DOM just updates that object in the real DOM, not all of them.</p>
                </div>
            </div>
            <hr />
            <div className='container'>
                <h4>Question 2</h4>
                <div>
                    <h3>What are the differences between Props and State ?</h3>
                    <h4>Props</h4>
                    <p>Props is short for Properties. They are a type of data that may be sent from one component to another. Props are read-only and immutable, thus they can't be changed. These might be functions or data variables. Props are mostly utilized to communicate between the parent and child parts of the app. Also props cannot be changed within the child component.</p>
                    <h4>State</h4>
                    <p>Parts of an function that can change are expressed by state. Each component has the ability to have its own state. The state is dynamic and only exists inside the component. The state is a set of factors that determine the component's present state. A component's state is internal, meaning it is set within the component and may only be changed within the component. Any change in state causes the component to be displayed again.</p>
                </div>
            </div>
            <hr />
            <div className='container'>
                <h4>Question 3</h4>
                <div>
                    <h3>How useState works ?</h3>
                    <p>useState is a hook that allows state variables to be used in functional components. This function takes the starting state and returns a variable with the current state value and another function to update it. The useState hook allows function components to access and update react's internal state. The initial state is the single input to the useState() Hook. The state, unlike classes, does not have to be an object. Any data type, including text, integer, boolean, array, and object, can be used as the state. useState takes a single parameter and returns an array of two values: the current state value and the function/method that may be used to update it.</p>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Question;