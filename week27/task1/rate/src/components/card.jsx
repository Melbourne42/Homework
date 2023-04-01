import React from "react"
import './card.scss'
function Card(props) {
    const selected = (props.isSelected ? "selected" : " ")
    return (
        <div>
            <div className={"card-container " + selected}>
                <div className="name">Безлимитный {props.number}</div>
                <div className="price">Руб {props.number}/мес</div>
                <div className="speed">до {props.speed} Мбит/сек</div>
                <div className="text">Объём включённого трафика не ограничен</div>
            </div>
        </div>
    )
}
export default Card