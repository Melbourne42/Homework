import React from "react";
import './main.scss'
import { useState, useEffect } from "react";

function TableInput({ word, addWords, isNew, deleteWords, editWords }) {
    const defaultProps = {
        english: ' ',
        transcription: '  ',
        russian: '  ',
    }

    const [info, setInformation] = useState(defaultProps);
    const [isEditing, setIsEditing] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)

    useEffect(() => {
        word && setInformation(word);
        isNew && setIsEditing(!isEditing);
    }, [word])

    const editingChange = () => {
        setIsEditing(!isEditing);
        isEditing && cancelChanges()
    }

    function setNewData(e) {
        const data = e.target.value;
        setInformation({ ...info, [e.target.name]: data })
        data ? setIsBlocked(false) : setIsBlocked(true);
    }

    function checkData() {
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
            saveData()
            setIsEditing(!isEditing);
        }
    }

    function saveData() {
        if (isNew) {
            addWords(info)
        } else {
            editWords(info)
        }
    }


    const cancelChanges = () => {
        const currentWord = word ? word : defaultProps;
        setInformation(currentWord);
        setIsBlocked(false);
        setIsEmpty(false)
    }

    function deleteData() {
        deleteWords(info.id)
    }

    return (
        <>
            <tr>
                <td><input type="text" className={info.english ? "input" : 'red-input'} disabled={!isEditing} placeholder="Слово" value={info.english} name="english" onChange={setNewData} /></td>
                <td><input type="text" className={info.transcription ? "input" : 'red-input'} disabled={!isEditing} placeholder="Транскрипция" value={info.transcription} name="transcription" onChange={setNewData} /></td>
                <td><input type="text" className={info.russian ? "input" : 'red-input'} disabled={!isEditing} placeholder="Перевод" value={info.russian} name="russian" onChange={setNewData} /></td>
                <td className="td"><button onClick={editingChange}>{!word || isEditing ? 'cancel' : 'edit'}</button> {word && <button onClick={deleteData}>delete</button>} <button disabled={isBlocked} onClick={checkData}>save</button></td>
            </tr>{isEmpty && <tr><th> Ошибка: пожалуйста заполните все поля</th></tr>}
        </>
    )
}

function Main({ words, addWords, deleteWords, editWords }) {
    const [isAdding, setIsAdding] = useState(false);
    const addingChange = () => {
        setIsAdding(!isAdding);
    }
    return (
        <div className="main-table-container">
            <button onClick={addingChange}>Добавить</button>
            <table className="main-table" border="1">
                <tbody>
                    <tr>
                        <th>Word</th>
                        <th>Transcription</th>
                        <th>Translate</th>
                        <th />
                    </tr>
                    {isAdding && <TableInput addWords={addWords} isNew={true} />}
                    {words.map((word) => <TableInput word={word} key={word.id} isNew={false} deleteWords={deleteWords} editWords={editWords} />)}
                </tbody>
            </table>
        </div>
    )
}
export default Main