import { useEffect, useRef, useState } from "react"
import './card.scss'

function LetTranslate({ russian }) {
    return (
        <div><b>{russian}</b></div>
    )
}

function Card({ currentWord, learnedWords }) {
    const [translate, setShowTranslate] = useState(false);
    const changeCard = () => {
        setShowTranslate(!translate)
        learnedWords();
    }
    const { english, transcription, russian } = currentWord
    const refButton = useRef(null);
    function addFocus() {
        if (refButton.current !== null) {
            refButton.current.focus();
        }
    }
    useEffect(() => {
        setShowTranslate(false);
        addFocus();
    }, [currentWord])
    return (
        <>
            <div className="card-container">
                <div><h2>{english}</h2></div>
                <div>{transcription}</div>
                <div>{translate && <LetTranslate russian={russian} />}</div>
                {!translate && < button onClick={changeCard} className="card-button" ref={refButton}>Проверить</button>}
            </div >
        </>
    )
}

export default Card