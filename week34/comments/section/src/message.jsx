import React from "react";

function Message({ text, newText }) {
    return (
        <div>
            <span style={{ color: newText ? "red" : "inherit" }}>{text}</span>
        </div>
    );
};

export default Message;