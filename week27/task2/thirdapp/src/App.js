import './App.scss';
import Header from './components/header/header';
import React from 'react';
import Footer from './components/footer/footer';
import Main from './components/main/main';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Main isEditing={true}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
