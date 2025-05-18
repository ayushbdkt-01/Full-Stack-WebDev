import React, { useState } from 'react';
import './App.css'
import Title from './Title.jsx';
import ProductCard from './ProductCard.jsx';  


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ProductCard/>
      <ProductCard/>
    </div>
  );
}

export default App
