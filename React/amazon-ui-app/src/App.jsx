import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button.jsx'
import AmazonCard from './AmazonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <AmazonCard title="item1" description="description1" oldPrice={10000} newPrice={200000}/>
      <AmazonCard title="item2" description="description2" oldPrice={10000} newPrice={200000}/>
      <AmazonCard title="item3" description="description3" oldPrice={10000} newPrice={200000}/>
      <AmazonCard title="item4" description="description4" oldPrice={10000} newPrice={200000}/> */}

      <Button/>

    </>
  )
}

export default App
