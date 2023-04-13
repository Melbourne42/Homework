import './App.scss';
import Header from './components/header/header';
import React from 'react';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import Card from './components/card/card';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Main></Main>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
