import React from "react";
import './main.scss'
import { useState, useEffect } from "react";

function TableInput({ word }) {
    const defaultProps = {
        english: 'Слово',
        transcription: 'Транскрипция',
        russian: 'Перевод',
    }

    const [info, setInformation] = useState(defaultProps);
    const [isEditing, setIsEditing] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)

    useEffect(() => { setInformation(word) }, [word])

    const editingChange = () => {
        setIsEditing(!isEditing);
        isEditing && cancelChanges()
    }

    function setNewData(e) {
        const data = e.target.value;
        setInformation({ ...info, [e.target.name]: data })
        data ? setIsBlocked(false) : setIsBlocked(true);
    }

    function saveData() {
        let empty = 0;
        const fields = Object.values(info)
        fields.forEach((field) => {
            if (field === " ") {
                empty = empty + 1
            }
        })
        if (empty !== 0) {
            setIsEmpty(true)
        }
        else {
            setIsEmpty(false)
            console.log(info)
            editingChange()
        }
    }

    const cancelChanges = () => {
        setInformation(word);
        setIsBlocked(false);
        setIsEmpty(false)
    }

    return (
        <>
            <tr>
                <td><input type="text" className={info.english ? "input" : 'red-input'} disabled={!isEditing} placeholder="Слово" value={info.english} name="english" onChange={setNewData} /></td>
                <td><input type="text" className={info.transcription ? "input" : 'red-input'} disabled={!isEditing} placeholder="Транскрипция" value={info.transcription} name="transcription" onChange={setNewData} /></td>
                <td><input type="text" className={info.russian ? "input" : 'red-input'} disabled={!isEditing} placeholder="Перевод" value={info.russian} name="russian" onChange={setNewData} /></td>
                <td className="td"><button onClick={editingChange}>{isEditing ? 'cancel' : 'edit'}</button> <button>delete</button> <button disabled={isBlocked} onClick={saveData}>save</button></td>
            </tr>{isEmpty && <tr><th> Ошибка: пожалуйста заполните все поля</th></tr>}
        </>
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