import React from "react";

function Cards() {
    function handleAlienClick() {
        const alien = document.querySelector("#alien1");
        const card = document.querySelector("#card1");
        alien.classList.add("hidden");
        card.classList.remove("hidden");
        card.classList.add("show");
    }
    function displayCards() {
        return (
            <>
                <table border="1" className="card-container">
                    <tr>
                        <td>
                            <div className="cards">
                                <img
                                    src="src/assets/cardsIMG/img1.jpg"
                                    alt="card"
                                    className="card hidden"
                                    id="card1"
                                />
                                <img
                                    src="src/assets/images/alien.jpg"
                                    alt="alien"
                                    className="alien"
                                    id="alien1"
                                    onClick={handleAlienClick}
                                />
                            </div>
                        </td>
                        <td>
                            <div className="cards">
                                <img
                                    src="src/assets/cardsIMG/img2.jpg"
                                    alt="card"
                                    className="card"
                                    id="card2"
                                />
                                <img
                                    src="src/assets/images/alien.jpg"
                                    alt="alien"
                                    className="alien"
                                    id="alien2"
                                />
                            </div>
                        </td>
                        <td>
                            <div className="cards">
                                <img
                                    src="src/assets/cardsIMG/img3.jpg"
                                    alt="card"
                                    className="card"
                                    id="card3"
                                />
                                <img
                                    src="src/assets/images/alien.jpg"
                                    alt="alien"
                                    className="alien"
                                    id="alien3"
                                />
                            </div>
                        </td>
                        <td>
                            <div className="cards">
                                <img
                                    src="src/assets/cardsIMG/img4.jpg"
                                    alt="card"
                                    className="card"
                                    id="card4"
                                />
                                <img
                                    src="src/assets/images/alien.jpg"
                                    alt="alien"
                                    className="alien"
                                    id="alien4"
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cards">
                                <img
                                    src="src/assets/cardsIMG/img5.jpg"
                                    alt="card"
                                    className="card"
                                    id="card5"
                                />
                                <img
                                    src="src/assets/images/alien.jpg"
                                    alt="alien"
                                    className="alien"
                                    id="alien5"
                                />
                            </div>
                        </td>
                        <td>
                            <div className="cards">
                                <img
                                    src="src/assets/cardsIMG/img6.jpg"
                                    alt="card"
                                    className="card"
                                    id="card6"
                                />
                                <img
                                    src="src/assets/images/alien.jpg"
                                    alt="alien"
                                    className="alien"
                                    id="alien6"
                                />
                            </div>
                        </td>
                        <td>
                            <div className="cards">
                                <img
                                    src="src/assets/cardsIMG/img7.jpg"
                                    alt="card"
                                    className="card"
                                    id="card7"
                                />
                                <img
                                    src="src/assets/images/alien.jpg"
                                    alt="alien"
                                    className="alien"
                                    id="alien7"
                                />
                            </div>
                        </td>
                        <td>
                            <div className="cards">
                                <img
                                    src="src/assets/cardsIMG/img8.jpg"
                                    alt="card"
                                    className="card"
                                    id="card8"
                                />
                                <img
                                    src="src/assets/images/alien.jpg"
                                    alt="alien"
                                    className="alien"
                                    id="alien8"
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cards">
                                <img
                                    src="src/assets/cardsIMG/img1.jpg"
                                    alt="card"
                                    className="card"
                                    id="card9"
                                />
                                <img
                                    src="src/assets/images/alien.jpg"
                                    alt="alien"
                                    className="alien"
                                    id="alien9"
                                />
                            </div>
                        </td>
                        <td>
                            <div className="cards">
                                <img
                                    src="src/assets/cardsIMG/img2.jpg"
                                    alt="card"
                                    className="card"
                                    id="card10"
                                />
                                <img
                                    src="src/assets/images/alien.jpg"
                                    alt="alien"
                                    className="alien"
                                    id="alien10"
                                />
                            </div>
                        </td>
                        <td>
                            <div className="cards">
                                <img
                                    src="src/assets/cardsIMG/img3.jpg"
                                    alt="card"
                                    className="card"
                                    id="card11"
                                />
                                <img
                                    src="src/assets/images/alien.jpg"
                                    alt="alien"
                                    className="alien"
                                    id="alien11"
                                />
                            </div>
                        </td>
                        <td>
                            <div className="cards">
                                <img
                                    src="src/assets/cardsIMG/img4.jpg"
                                    alt="card"
                                    className="card"
                                    id="card12"
                                />
                                <img
                                    src="src/assets/images/alien.jpg"
                                    alt="alien"
                                    className="alien"
                                    id="alien12"
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cards">
                                <img
                                    src="src/assets/cardsIMG/img5.jpg"
                                    alt="card"
                                    className="card"
                                    id="card13"
                                />
                                <img
                                    src="src/assets/images/alien.jpg"
                                    alt="alien"
                                    className="alien"
                                    id="alien13"
                                />
                            </div>
                        </td>
                        <td>
                            <div className="cards">
                                <img
                                    src="src/assets/cardsIMG/img6.jpg"
                                    alt="card"
                                    className="card"
                                    id="card14"
                                />
                                <img
                                    src="src/assets/images/alien.jpg"
                                    alt="alien"
                                    className="alien"
                                    id="alien14"
                                />
                            </div>
                        </td>
                        <td>
                            <div className="cards">
                                <img
                                    src="src/assets/cardsIMG/img7.jpg"
                                    alt="card"
                                    className="card"
                                    id="card15"
                                />
                                <img
                                    src="src/assets/images/alien.jpg"
                                    alt="alien"
                                    className="alien"
                                    id="alien15"
                                />
                            </div>
                        </td>
                        <td>
                            <div className="cards">
                                <img
                                    src="src/assets/cardsIMG/img8.jpg"
                                    alt="card"
                                    className="card"
                                    id="card16"
                                />
                                <img
                                    src="src/assets/images/alien.jpg"
                                    alt="alien"
                                    className="alien"
                                    id="alien16"
                                />
                            </div>
                        </td>
                    </tr>
                </table>
            </>
        );
    }

    return displayCards();
}

export default Cards;
