import React, { useState } from 'react';
import './App.css'
import Title from './Title.jsx';
import ProductCard from './ProductCard.jsx';  
import MsgBox from "./MsgBox.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MsgBox username="ayush_01" textColor="blue"/>
      <MsgBox username="heyy.ayush__01" textColor="magenta"/>

    </div>
  );
}

export default App
