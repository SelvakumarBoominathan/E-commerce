import React from 'react';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import StorefrontSharpIcon from '@mui/icons-material/StorefrontSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import './style.css'

const header = () => {
  return (
    <div className="header">

      <div className="header_logo">
        <StorefrontSharpIcon className='header_logoImage'  fontSize="large"/>
        <h2 className='header_logoTitle'>E shop</h2>
      </div>

      <div className="header_search">
        <SearchSharpIcon className="header_searchIcon"/>
        <input type="text" className="header_input" />


      </div>


      <div className="header_nav">

        <div className="nav_Item">
          <span className="nav_Item1">Hello Guest</span>
          <span className="nav_Item2">Sign In</span>
        </div>

        <div className="nav_Item">
        <span className="nav_Item1">Your</span>
          <span className="nav_Item2">Shop</span>
        </div>

        <div className="nav_ItemBasket">
        <ShoppingCartSharpIcon className="itembasket"  fontSize='large'/>
          <span className="nav_Item2 nav_basketCount">0</span>
        </div>

      </div>
      
    </div>
  )
}

export default header;
