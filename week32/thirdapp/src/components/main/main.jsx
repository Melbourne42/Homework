import React from "react";
import './main.scss'
import { useState, useEffect } from "react";

function TableInput({ word }) {
    const [isEditing, setIsEditing] = useState(false);
    const editingChange = () => {
        setIsEditing(!isEditing);
    }
    const defaultProps = {
        english: 'Слово',
        transcription: 'Транскрипция',
        russian: 'Перевод',
    }
    const [info, setInformation] = useState(defaultProps);
    useEffect(() => { setInformation(word) }, [word])
    return (
        <tr>
            <td><input type="text" className="input" disabled={!isEditing} placeholder="Слово" value={info.english} /></td>
            <td><input type="text" className="input" disabled={!isEditing} placeholder="Транскрипция" value={info.transcription} /></td>
            <td><input type="text" className="input" disabled={!isEditing} placeholder="Перевод" value={info.russian} /></td>
            <td className="td"><button onClick={editingChange}>{isEditing ? 'cancel' : 'edit'}</button> <button>delete</button> <button>save</button></td>
        </tr>
    )
}
function Main({ words }) {
    return (
        <table className="main-table" border="1">
            <tbody>
                <tr>
                    <th>Word</th>
                    <th>Transcription</th>
                    <th>Translate</th>
                    <th />
                </tr>
                {words.map((word) => <TableInput word={word} key={word.id} />)}
            </tbody>
        </table>
    )
}
export default Main