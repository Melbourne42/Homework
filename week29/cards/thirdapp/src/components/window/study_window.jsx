import React from "react"
import Card from "../card/card"
import { useState } from "react"
import { useEffect } from "react"
function Study_window({ words }) {
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
        <>
            <h2>Studing now</h2>
            {currentCard ? (
                <>
                    <button onClick={setPreviousIndex}>Previous</button>
                    <Card currentWord={currentCard} />
                    <button onClick={setNextIndex}>Next</button>
                </>
            ) : (
                <>
                    <p>404 not found</p>
                </>
            )}
            {currentIndex === words.length && (<p>Молодец!</p>)}
        </>
    )
}
export default Study_window