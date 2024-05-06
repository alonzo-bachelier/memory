import React, { useState } from "react";
import CardContext from "./components/CardContext";
import Button from "./components/Button";
import Title from "./components/Title";
import GameBoard from "./components/GameBoard";
import { initializeCards } from "./components/CardData";

function App() {
    const [cards, setCards] = useState(initializeCards());

    return (
        <CardContext.Provider value={{ cards, setCards }}>
            <div>
                <Title />
                <Button
                    text="SHUFFLE"
                    onClick={() => setCards(initializeCards())}
                />

                <GameBoard />
            </div>
        </CardContext.Provider>
    );
}

export default App;
