// CheckWin.jsx
import React from "react";

function CheckWin({ win }) {
    if (win) {
        return <h2 className="win">You won!</h2>;
    } else {
        return null;
    }
}

export default CheckWin;
