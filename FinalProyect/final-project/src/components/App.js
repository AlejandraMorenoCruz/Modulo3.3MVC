import React from 'react';
//npm i -s react-router.dom
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route'
//Components
import Login from './Login/Login';
//import Registro from './Registro/Registro';
import Header from './Header/Header';
import List from './List/List';

//CSS
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Route component={Header}/>
      <Route exact path="/" component = {Login}/>
      <Route path="/list" component = {List} />
    </BrowserRouter>
  );
}

export default App;
