import './App.scss';
import Header from './components/header/header';
import React from 'react';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import StudyWindow from './components/window/studyWindow';
import { WordsContext } from "./components/context";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((responce) => {
        if (responce.ok) {
          return responce.json();
        }
        throw responce;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("Oh, no! Err0r!", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>Error</p>;
  }
  return (
    <WordsContext.Provider value={{ data }}>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path='/cards' element={<StudyWindow />}></Route>
        </Routes >
        <Footer />
      </div>
    </WordsContext.Provider>
  );
}

export default App;
