import React from 'react';
import { useState } from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import './style.css';
import Parentbody from './Parentbody';


// let category_Array = ["All", "Electronics", "Fashion", "Appliences", "Mobiles"]

const Links = () => {

const [selectedCategory, Setselectedcategory] = useState("All");

const handleLinkClick = (category) => {
  Setselectedcategory(category)
}


return(
  <div className="navbar_container">
<BrowserRouter>
      <Link to="/" className='btn_link' onClick={() => handleLinkClick("All")}>All</Link>
      <Link to="/electronics" className='btn_link' onClick={() => handleLinkClick("Electronics")}>Electronics</Link>
      <Link to="/fashion" className='btn_link' onClick={() => handleLinkClick("Fashion")}>Fashion</Link>
      <Link to="/appliances" className='btn_link' onClick={() => handleLinkClick("Appliances")}>Appliances</Link>
      <Link to="/mobiles" className='btn_link' onClick={() => handleLinkClick("Mobiles")}>Mobiles</Link>
      {/* <Parentbody selectedCategory={selectedCategory}/> */}
</BrowserRouter>
</div>
)

}

export default Links;
