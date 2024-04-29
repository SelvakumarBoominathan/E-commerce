import { useState } from 'react'
import './App.css'
import Header from "./components/header.jsx";
import Home from "./components/home.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Home/>
    </>
  )
}

export default App
