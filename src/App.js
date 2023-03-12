import React from "react";
import "./App.css"
import { Route, Link, Routes } from "react-router-dom";
import Form from "./Componets/Form"
import Home from "./Componets/Home";
import Confirmation from "./Componets/Confirmation";




const App = () => {
  return (
    <div>
      <header>
          <h3>Bloomtech</h3>
          <nav>
          <Link to="/"><button id="home">Home</button></Link>
          <Link to="help"><button id="help">Help</button></Link>
          </nav>
      </header>
           <Routes>
            <Route path="pizza" element={<Form />} />
            <Route path="/" element={<Home />} />
            <Route path="/pizza/confirmation" element={<Confirmation />} />
          </Routes>
       
    </div>
  );
};
export default App;
