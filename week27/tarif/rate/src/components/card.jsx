import React from "react"
import './card.scss'
import { useState } from "react"
import App from "../App";

function Card(props) {
    const [select, selectTarif] = useState(false);
    const changeTarif = () => {
        selectTarif(!select)
    }
    return (
        <div>
            <div className={`card-container ${select ? 'selected' : ''}`}>
                <div className="name">Безлимитный {props.number}</div>
                <div className="price">Руб {props.number}/мес</div>
                <div className="speed">до {props.speed} Мбит/сек</div>
                <div className="text">Объём включённого трафика не ограничен</div>
            </div>
            <button onClick={changeTarif} className="card_button">Выбрать</button>
        </div>
    )
}
export default Card