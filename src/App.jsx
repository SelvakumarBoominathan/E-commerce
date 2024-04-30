
import './App.css';
import Header from "./components/header.jsx";
import Home from "./components/home.jsx";
import Links from "./components/Links.jsx";
import Parentbody from "./components/Parentbody.jsx";
import { useState } from 'react';


function App() {

    const [valueFromLinks, setValueFromLinks] = useState(null);
  
    // Callback function to receive the value from child component
    const handleValueFromLink = (value) => {
      setValueFromLinks(value);
    };
  

  return (
    <div>
          <Header/>
          <Links valueFromParent={valueFromLinks}/>  
          <Home/>
          <Parentbody onValueFromLink={handleValueFromLink}/>
          
     </div>
  )
}

export default App;





















