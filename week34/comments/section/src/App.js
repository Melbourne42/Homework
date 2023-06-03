import React, { useState } from "react";
import Message from "./message";

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const handleCommentsChange = (e) => {
    setNewComment(e.target.value);
  };
  const handleCommentsSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      const comment = {
        text: newComment,
        newText: true,
      };
      setComments((previousComments) => [comment, ...previousComments]);
      setNewComment("");
    }
  };
  return (
    <div>
      <h2>Комментарии </h2>
      <form onSubmit={handleCommentsSubmit}>
        <textarea onChange={handleCommentsChange}></textarea>
        <div>
          <button type="submit">Отправить комментарий</button>
        </div>
      </form>
      <div>
        {comments.map((comment, index) => (
          <Message text={comment.text} key={index} newText={index === 0} />
        ))}
      </div>
    </div>
  );
};
export default Comments;
