import './App.scss';
import Header from './components/header/header';
import React from 'react';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import StudyWindow from './components/window/studyWindow';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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
      <Header />
      <Routes>
        <Route path="/" element={<Main words={children} />}></Route>
        <Route path='/cards' element={<StudyWindow words={children} />}></Route>
      </Routes >
      <Footer />
    </div>
  );
}

export default App;
