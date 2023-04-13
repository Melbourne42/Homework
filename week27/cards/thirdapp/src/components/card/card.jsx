import React from "react"
import { useState } from "react"
import './card.scss'

function LetTranslate() {
    return (
        <div><b> Кошка</b></div>
    )
}

function DontTranslate() {
    return
}

function Card(props) {
    const [translate, showTranslate] = useState(false);
    const changeCard = () => {
        showTranslate(!translate)
    }
    return (
        <>
            <div className="card_container">
                <div><h2>Cat{props.card_name}</h2></div>
                <div>[Kat]{props.transcription}</div>
                <div>{translate ? <LetTranslate /> : <DontTranslate />}</div>
                <button onClick={changeCard}>Проверить</button>
            </div>
        </>
    )
}
export default Card