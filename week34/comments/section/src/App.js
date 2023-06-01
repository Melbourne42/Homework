import React, { useState } from "react";
import Message from "./message";

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const handleCommentsChange = (event) => {
    setNewComment(event.target.value);
  };
  const handleCommentsSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== "") {
      const comment = {
        text: newComment,
        isNew: true,
      };
      setComments((prevComments) => [comment, ...prevComments]);
      setNewComment("");
    }
  };
  return (
    <div>
      <h2>Комментарии </h2>
      <form onSubmit={handleCommentsSubmit}>
        <textarea
          value={newComment}
          onChange={handleCommentsChange}
        ></textarea>
        <div>
          <button type="submit">Отправить комментарий</button>
        </div>
      </form>
      <div>
        {comments.map((comment, index) => (
          <Message key={index} text={comment.text} isNew={index === 0} />
        ))}
      </div>
    </div>
  );
};
export default Comments;
