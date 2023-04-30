import React from "react"
import Card from "../card/card"
import './studyWindow.scss'
import { useState } from "react"
import { useEffect } from "react"
function StudyWindow({ words }) {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [currentCard, setCurrentCard] = useState(null)
    function setPreviousIndex() {
        if (currentIndex !== 1) {
            setCurrentIndex(currentIndex - 1)
        }
    }
    function setNextIndex() {
        if (currentIndex !== words.length) {
            setCurrentIndex(currentIndex + 1)
        }
    }
    useEffect(() => {
        if (words.length) {
            const card = words.find((item) => item.id === currentIndex) || null;
            setCurrentCard(card)
        }
    }, [words, currentIndex])
    return (
        <div className="study-window">
            {currentCard ? (
                <div className="game-container">
                    <button onClick={setPreviousIndex} className="study-button">Previous</button>
                    <Card currentWord={currentCard} />
                    <button onClick={setNextIndex} className="study-button">Next</button>
                </div>
            ) : (
                <>
                    <p>404 not found</p>
                </>
            )}
            {currentIndex === words.length && (<p>Молодец!</p>)}
        </div>
    )
}
export default StudyWindow