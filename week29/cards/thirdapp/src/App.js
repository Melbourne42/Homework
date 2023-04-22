import './App.scss';
import Header from './components/header/header';
import React from 'react';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import Card from './components/card/card';
import Study_window from './components/window/study_window';

const children = [
  {
    english: "butterfly",
    transcription: "[ ˈbʌtəflaɪ ]",
    russian: "бабочка",
    id: 1,
  },
  {
    english: "apple",
    transcription: "[apple]",
    russian: "яблоко",
    id: 2,
  },
  {
    english: "pear",
    transcription: "[peə]",
    russian: "груша",
    id: 3,
  },
  {
    english: "plum",
    transcription: "[plʌm]",
    russian: "слива",
    id: 4,
  },
];

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Main words={children}></Main>
      <Study_window words={children}></Study_window>
      <Footer></Footer>
    </div>
  );
}

export default App;
