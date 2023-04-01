import React from "react"
function card(props) {
    return (
        <React.Fragment>
            <div><h2>{props.card_name}</h2></div>
            <div>{props.transcription}</div>
            <div><button>Проверить</button></div>
        </React.Fragment>
    )
}
export default card