import React, { useState, useEffect, useContext } from "react";
import CardContext from "./CardContext";

function GameBoard() {
    const { cards, setCards } = useContext(CardContext);
    const [win, setWin] = useState(false);

    // Image used for the back of each card
    const cardBack = "src/assets/images/alien.jpg";

    // State to keep track of which cards are currently flipped
    const [flippedIndices, setFlippedIndices] = useState([]);

    useEffect(() => {
        const allFlipped = cards.every(card => card.flipped);
        setWin(allFlipped);
    }, [cards]);

    // Effect hook to handle logic when two cards are flipped
    useEffect(() => {
        if (flippedIndices.length === 2) {
            // Check if two cards are flipped
            const [firstIndex, secondIndex] = flippedIndices;
            if (cards[firstIndex].imageName === cards[secondIndex].imageName) {
                // Check if the flipped cards match
                setFlippedIndices([]); // Clear flipped indices if they match
            } else {
                // If no match, flip cards back after a delay
                setTimeout(() => {
                    setCards(cards =>
                        cards.map((card, index) =>
                            index === firstIndex || index === secondIndex
                                ? { ...card, flipped: false }
                                : card
                        )
                    );
                    setFlippedIndices([]); // Reset flipped indices
                }, 1000);
            }
        }
    }, [flippedIndices, cards]); // Depend on flippedIndices and cards for updates

    // Function to handle card click events
    function handleCardClick(index) {
        if (!cards[index].flipped && flippedIndices.length < 2) {
            // Check if the card is not already flipped and less than two are flipped
            const newCards = [...cards];
            newCards[index].flipped = true; // Flip the card
            setCards(newCards); // Update the cards state
            setFlippedIndices([...flippedIndices, index]); // Add this card's index to flippedIndices
        }
    }

    // Render the game board as a 4x4 table of cards
    return (
        <div className="table-container">
            <table border="1" className="card-container">
                {Array.from({ length: 4 }).map((_, rowIdx) => (
                    <tr key={rowIdx}>
                        {Array.from({ length: 4 }).map((_, colIdx) => {
                            const cardIndex = rowIdx * 4 + colIdx; // Calculate card index based on row and column
                            const card = cards[cardIndex]; // Get the card from the cards array
                            return (
                                <td key={colIdx}>
                                    <div
                                        className="cards"
                                        onClick={() =>
                                            handleCardClick(cardIndex)
                                        } // Set click handler
                                    >
                                        <img
                                            src={
                                                card.flipped
                                                    ? `src/assets/cardsIMG/${card.imageName}`
                                                    : cardBack // Determine which image to display
                                            }
                                            alt={`Card ${cardIndex}`}
                                            className={`card ${
                                                card.flipped ? "flipped" : ""
                                            }`} // Apply flipped class if card is flipped
                                            id={`card${cardIndex}`}
                                        />
                                    </div>
                                </td>
                            );
                        })}
                    </tr>
                ))}
                {win && <h2 className="win">You won!</h2>}
            </table>
        </div>
    );
}

export default GameBoard;
