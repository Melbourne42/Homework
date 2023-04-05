import React from "react";
import './main.scss'

function EnableInput(props) {
    return (
        <>
            <td><input type="text" className="input" /></td>
            <td><input type="text" className="input" /></td>
            <td><input type="text" className="input" /></td>
        </>
    )
}

function DisableInput(props) {
    return (
        <>
            <td><input type="text" className="input" disabled /></td>
            <td><input type="text" className="input" disabled /></td>
            <td><input type="text" className="input" disabled /></td>
        </>
    )
}

function Main(props) {
    let isEditing = false;
    let changeEditing = () => isEditing = !isEditing;
    console.log(changeEditing)
    return (
        <table border="1">
            <tbody>
                <tr>
                    <th>Word</th>
                    <th>Transcription</th>
                    <th>Thanslate</th>
                    <th></th>
                </tr>
                <tr>
                    {props.isEditing ? <EnableInput /> : <DisableInput />}
                    <td className="td"><button onClick={changeEditing}>edit</button> <button>delete</button> <button>save</button></td>
                </tr>
            </tbody>
        </table>
    )
}
export default Main