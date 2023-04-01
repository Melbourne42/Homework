import React from "react";
import './main.scss'

function Main(props) {
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
                    <td><input type="text" className="input" disabled /></td>
                    <td><input type="text" disabled /></td>
                    <td><input type="text" disabled /></td>
                    <td className="td"><button>save</button> <button>edit</button> <button>delete</button></td>
                </tr>
            </tbody>
        </table>
    )
}
export default Main