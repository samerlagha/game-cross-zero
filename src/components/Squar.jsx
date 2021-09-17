import React from 'react';
import './Squar.css'
const Squar = ({value,onClick}) => {
    return (
        <button onClick={onClick} className="square">
            {value}
        </button>
    );
};

export default Squar;