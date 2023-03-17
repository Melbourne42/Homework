import React from "react"
function Superhero(props) {
    return (
        <React.Fragment>
            <div className="hero"><h3>{props.name}</h3></div>
            <img className="img" src={props.src} />
            <div><b> Вселенная:</b> {props.universe}</div>
            <div><b> Альтер-эго:</b>  {props.alter_ego}</div>
            <div><b>Род деятельности: </b>  {props.career} </div>
            <div><b>Друзья: </b>{props.friends}</div>
            <div><b>Суперсилы: </b>{props.superpowers}</div>
            <div><b>Подробнее: </b>{props.learn_more}</div>
        </React.Fragment>
    )
}
export default Superhero