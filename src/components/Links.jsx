import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';


const Links = () => {
return(
<>
  <aside className='aside_container'>
    {/* <Link to="/1" >Electronics</Link>
    <Link to="/2" >Cloths</Link>
    <Link to="/3" >Appliences</Link>
    <Link to="/4" >Mobiles</Link> */}

    <button >Electronics</button>
    <button >Fashion</button>
    <button >Appliences</button>
    <button >Mobiles</button>
    <button >Home & Kitchen</button>
    <button >Books</button>
  </aside>
</>
)

}

export default Links;