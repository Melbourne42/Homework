import './App.css';
import React from 'react';
import Card from './components/card';
import cardsInfo from './cardinfo';

function App() {
  return (
    <div className="container">
      {
        cardsInfo.map((card) =>
          <Card number={card.number} speed={card.speed}>
          </Card>)
      }
    </div>
  );
}

export default App;
