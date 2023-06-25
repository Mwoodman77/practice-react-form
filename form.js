import React from 'react';
import App from 'app.js';

const Form = () => {
    return (
        <label>Enter your name:
            <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </label>
       
    )


}

const Button = ({label, handleClick}) => (
    
        <button
            className="btn btn-default"
            onClick={handleClick}>

            {label}
            </button>
    );

export default Button;