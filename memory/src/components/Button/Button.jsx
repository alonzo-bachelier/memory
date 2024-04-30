import React from "react";

function Button(props) {
    return (
        <div className="btn-container">
            <button className="btn" type="button">
                <strong>{props.text}</strong>
                <div id="container-stars">
                    <div id="stars"></div>
                </div>

                <div id="glow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </button>
        </div>
    );
}

export default Button;
