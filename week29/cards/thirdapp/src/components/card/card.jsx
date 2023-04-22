import React from "react"
import { useState } from "react"
import './card.scss'

function LetTranslate({ russian }) {
    return (
        <div><b>{russian}</b></div>
    )
}

function Card({ currentWord }) {
    const [translate, showTranslate] = useState(false);
    const changeCard = () => {
        showTranslate(!translate)
    }
    const { english, transcription, russian } = currentWord
    return (
        <>
            <div className="card_container">
                <div><h2>{english}</h2></div>
                <div>{transcription}</div>
                <div>{translate && <LetTranslate russian={russian} />}</div>
                <button onClick={changeCard}>Проверить</button>
            </div>
        </>
    )
}

export default Card