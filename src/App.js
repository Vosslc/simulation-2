import React from 'react';
import './App.css';
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import Header from './Components/Header/Header';


function App() {
  return (

    <HashRouter> 
          <div className="app-contanier">
            <Header />
            
            {routes}
          </div>
    </HashRouter>
  );
}

export default App;


/* <nav className='nav'>
<div className='link-wrap'>
  <Link to="/" className='links'>
    Dashboard
  </Link>
  <Link to="/wizard" className='links'>
    Wizard
  </Link> 
</div>
</nav> */