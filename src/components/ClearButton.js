import React from "react";
import '../stylesheets/ButtonClear.css';

const ClearButton = (props) => (
    <div className='clear-button'
    onClick={props.handleClear}
    id={props.id}>
        {props.children}
    </div>
);

export default ClearButton;