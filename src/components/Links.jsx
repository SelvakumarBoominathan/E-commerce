import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import './style.css';


// let category_Array = ["All", "Electronics", "Fashion", "Appliences", "Mobiles"]

const Links = () => {
return(
  <div className="navbar_container">
<BrowserRouter>
      <Link to="/" className='btn_link'>All</Link>
      <Link to="/electronics" className='btn_link'>Electronics</Link>
      <Link to="/fashion" className='btn_link'>Fashion</Link>
      <Link to="/appliances" className='btn_link'>Appliances</Link>
      <Link to="/mobiles" className='btn_link'>Mobiles</Link>
</BrowserRouter>
</div>
)

}

export default Links;
