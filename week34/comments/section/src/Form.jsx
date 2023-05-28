import React, { useState } from "react";

const Form = () => {
    const [newComment, setNewComment] = useState("")
}

const handleAddComment = () => { }

function Comments() {
    return (
        <>
            <div>
                <p>how are you?</p>
                <ul class="result"></ul>
            </div>
            <div>
                <div>
                    <textarea name="" id="textarea" cols="101" rows="5"></textarea>
                </div>
                <div>
                    <button class="button" id="button">Send</button>
                </div>
            </div>
        </>
    )
}

export default Comments