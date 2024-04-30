import React from 'react';


const Body = ({data}) => {

  return (
    <div className= "products">
      {data.map((item) => (
      <div className='product' key={item.id}>
        <img src={item.image}alt='image'></img>
        <div className="Details_div">
        <span className='rating'>{item.rating}</span>
        <h4>{item.name}</h4>
        <h3>{item.price}</h3>
        <button id='cart_button'>Add to cart</button>
        </div>
      </div>
      ))}
      
    </div>
  )
}

export default Body;


