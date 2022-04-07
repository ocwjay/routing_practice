import React from "react";
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Colors from "./components/Colors";
import Home from './components/Home'
import WordOrNum from './components/WordOrNum'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:won" element={<WordOrNum />}/>
        <Route path="/:won/:bgColor/:txtColor" element={<Colors />}/>
      </Routes>
    </BrowserRouter>
  );
}
    
export default App;