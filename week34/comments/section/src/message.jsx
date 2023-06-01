import React from "react";

function Message({ text, isNew }) {
    return (
        <div>
            <span style={{ color: isNew ? "red" : "inherit" }}>{text}</span>
        </div>
    );
};

export default Message;