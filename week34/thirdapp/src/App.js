import './App.scss';
import Header from './components/header/header';
import React, { useEffect, useState } from 'react';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import StudyWindow from './components/window/studyWindow';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { observer, inject } from 'mobx-react'
import { set } from 'mobx';

function App({ words, isLoaded, fetchWords, addWords, deleteWords, editWords }) {
  const [children, setChildren] = useState([]);
  useEffect(() => {
    fetchWords();
  }, [])
  useEffect(() => {
    setChildren(words);
  }, [isLoaded])
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Main words={children} addWords={addWords} deleteWords={deleteWords} editWords={editWords} />}></Route>
        <Route path='/cards' element={<StudyWindow words={children} />}></Route>
      </Routes >
      <Footer />
    </div>
  );
}

export default inject(({ WordStore }) => {
  const { isLoaded, words, fetchWords, addWords, deleteWords, editWords } = WordStore;
  return {
    isLoaded,
    words,
    fetchWords,
    addWords,
    deleteWords,
    editWords
  };
})(observer(App));