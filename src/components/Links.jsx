import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import './style.css';


let category_Array = ["All", "Electronics", "Fashion", "Appliences", "Mobiles"]

const Links = ({onClick}) => {

const handleLinkClick = (category) => {
  onClick(category)
}


return(
  <div className="navbar_container">
<BrowserRouter>
      <Link to="/" className='btn_link' onClick={() => handleLinkClick("All")}>All</Link>
      <Link to="/electronics" className='btn_link' onClick={() => handleLinkClick("Electronics")}>Electronics</Link>
      <Link to="/fashion" className='btn_link' onClick={() => handleLinkClick("Fashion")}>Fashion</Link>
      <Link to="/appliances" className='btn_link' onClick={() => handleLinkClick("Appliences")}>Appliances</Link>
      <Link to="/mobiles" className='btn_link' onClick={() => handleLinkClick("Mobiles")}>Mobiles</Link>
      {/* <Parentbody selectedCategory={selectedCategory}/> */}
</BrowserRouter>
</div>
)

}

export default Links;
