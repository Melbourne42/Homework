import './App.css';
import React, { useState } from 'react';
import Comments from './Form';
import CommentList from './List';

function App() {
  const [comments, setComments] = useState([]);
  const handleAddComment = (comment) => {
    setComments([comment, ...comments]);
  };
  return (
    <div class="container">
      <div class="header">
        <div>
          <p>Hi</p>
          <Comments onAddComment={handleAddComment} />
        </div>
      </div>
    </div>
  );
}

export default App;
