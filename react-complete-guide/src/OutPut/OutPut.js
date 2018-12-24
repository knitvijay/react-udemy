import React from 'react'

const output = (props) => {

    return (
        <div>
            <p>{props.input1} {props.username}</p>
            <p>{props.input2} {props.username}</p>
        </div>
    );

};

export default output;