import Card from "../card/card"
import './studyWindow.scss'
import { useState, useEffect, useContext } from "react"
import { WordsContext } from "../context";
function StudyWindow({ defaultWords }) {
    const { data: words } = useContext(WordsContext)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentCard, setCurrentCard] = useState(null)
    function setPreviousIndex() {
        if (currentIndex !== 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }
    function setNextIndex() {
        if (currentIndex !== words.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    useEffect(() => {
        if (words.length) {
            const card = words[currentIndex] || null;
            setCurrentCard(card)
        }
    }, [words, currentIndex])

    const [count, setCount] = useState(0);
    const learnedWords = () => {
        setCount(count + 1);
    }
    return (
        <div className="study-window">
            <p>Слов изучено: {count} </p>
            {currentCard ? (
                <div className="game-container">
                    <button onClick={setPreviousIndex} className="study-button">Previous</button>
                    <Card currentWord={currentCard} learnedWords={learnedWords} />
                    <button onClick={setNextIndex} className="study-button">Next</button>
                </div>
            ) : (
                <>
                    <p>404 not found</p>
                </>
            )}
            {currentIndex === words.length - 1 && (<p>Молодец!</p>)}
        </div>
    )
}
export default StudyWindow