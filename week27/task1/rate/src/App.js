import './App.css';
import React from 'react';
import Card from './components/card';

const cardsInfo = [{
  number: "300",
  speed: "10",
}, {
  number: "450",
  speed: "50",
}, {
  number: "550",
  speed: "100",
  isSelected: true
}, {
  number: "1000",
  speed: "200",
}
]

function App() {
  return (
    <div className="container">
      {
        cardsInfo.map((card) =>
          <Card number={card.number} speed={card.speed} isSelected={card.isSelected}>
          </Card>)
      }
    </div>
  );
}

export default App;
