
import './App.css';
import Header from "./components/header.jsx";
import Home from "./components/home.jsx";
import Links from "./components/Links.jsx";
import Parentbody from "./components/Parentbody.jsx";
import { useState } from 'react';


function App() {

    const [valFromLink, setValFromLink] = useState('All');

    const handleLinkClick = (val) => {
      setValFromLink(val);
    };


  return (
    <div>
          <Header/>
          <Links onClick = {handleLinkClick}/>  
          <Home/>
          <Parentbody valFromLink = {valFromLink}/>
          
     </div>
  )
}

export default App;





















