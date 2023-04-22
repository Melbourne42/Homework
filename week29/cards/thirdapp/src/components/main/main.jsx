import React from "react";
import './main.scss'
import { useState, useEffect } from "react";


function Main({ words }) {
    const [edit, isEditing] = useState(false);
    const editingChange = () => {
        isEditing(!edit);
    }
    const Default_Props = {
        word: 'Слово',
        transcription: 'Транскрипция',
        translate: 'Перевод',
    }
    const [info, setInformation] = useState(Default_Props);
    useEffect(() => { setInformation(words[0]) }, [words])
    // function EnableInput() {
    //     return (
    //         <>
    //             <td><input type="text" className="input" placeholder="Слово" /></td>
    //             <td><input type="text" className="input" placeholder="Транскрипция" /></td>
    //             <td><input type="text" className="input" placeholder="Перевод" /></td>
    //         </>
    //     )
    // }
    function DisableInput() {
        return (
            <>
                <td><input type="text" className="input" disabled={edit} placeholder="Слово" value={info.word} /></td>
                <td><input type="text" className="input" disabled placeholder="Транскрипция" value={info.transcription} /></td>
                <td><input type="text" className="input" disabled placeholder="Перевод" value={info.translate} /></td>
            </>
        )
    }
    return (
        <table border="1">
            <tbody>
                <tr>
                    <th>Word</th>
                    <th>Transcription</th>
                    <th>Translate</th>
                    <th></th>
                </tr>
                <tr>
                    {/* {edit ? <EnableInput /> : <DisableInput />} */}
                    <DisableInput />
                    <td className="td"><button onClick={editingChange}>edit</button> <button>cancellation</button> <button>save</button></td>
                </tr>
            </tbody>
        </table>
    )
}
export default Main