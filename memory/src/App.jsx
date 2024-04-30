import React from "react";

import Button from "./components/Button/Button";
import Title from "./components/title/title";
import Cards from "./components/cards/cards";

function App() {
    return (
        <>
            <div>
                <Title />
                <Button text="SHUFFLE" />
                <Cards />
            </div>
        </>
    );
}

export default App;
