import React from "react";
import '../stylesheets/Screen.css';

function Screen( {input, result} ) {

    return <div className="screen">
        <input type="text" className="upper-screen" id="display" readOnly value={input}></input>
        <input type="text" className="lower-screen" placeholder="0" readOnly value={result}></input>
    </div>

};

export default Screen;