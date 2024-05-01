import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Body from "./Body";

const Parentbody = ({valFromLink}) => {
 
const updatedData =Data.filter((val) => val.Category === valFromLink);

  return (
    <BrowserRouter>
    <Routes>
                  <Route path="/" element={<Body  data={updatedData}/>}/>
                  <Route path="/electronics" element={<Body  data={updatedData}/>}/>
                  <Route path="/fashion" element={<Body  data={updatedData}/>}/>
                  <Route path="/appliances" element={<Body  data={updatedData}/>}/>
                  <Route path="/mobiles" element={<Body  data={updatedData}/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Parentbody





// data
const Data = [
  {
    "id": 1,
    "image": "https://m.media-amazon.com/images/I/61yyQD1KLOL._SX522_.jpghttps://m.media-amazon.com/images/I/41cU0ptdpWL.AC_SX250.jpg",
    "name": "Product 1",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Electronics",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "price": 19.99
  },
  {
    "id": 2,
    "image": "https://m.media-amazon.com/images/I/61UzQMCRaeL._AC._SR360,460.jpg",
    "name": "Product 2",
    "rating": "⭐⭐⭐⭐",
    "Category": "Electronics",
    "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "price": 29.99
  },
  {
    "id": 3,
    "image": "https://m.media-amazon.com/images/I/7180ZAZmERL._AC._SR360,460.jpg",
    "name": "Product 3",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Electronics",
    "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "price": 24.99
  },
  {
    "id": 4,
    "image": "https://m.media-amazon.com/images/I/51G84HQlj6L._AC._SR360,460.jpg",
    "name": "Product 4",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Electronics",
    "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 39.99
  },
  {
    "id": 5,
    "image": "https://m.media-amazon.com/images/I/61fl+k9O-FL._AC._SR360,460.jpg",
    "name": "Product 5",
    "rating": "⭐⭐",
    "Category": "Electronics",
    "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 49.99
  },
  {
    "id": 6,
    "image": "https://m.media-amazon.com/images/I/61b91WUDxmL._AC._SR360,460.jpg",
    "name": "Product 6",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Electronics",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "price": 14.99
  },
  {
    "id": 7,
    "image": "https://m.media-amazon.com/images/I/21uXmiH98wL._AC._SR360,460.jpg",
    "name": "Product 7",
    "rating": "⭐⭐⭐⭐",
    "Category": "Electronics",
    "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "price": 34.99
  },
  {
    "id": 8,
    "image": "https://m.media-amazon.com/images/I/51J5PYJKFIL._AC._SR360,460.jpg",
    "name": "Product 8",
    "rating": "⭐",
    "Category": "Electronics",
    "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "price": 19.99
  },
  {
    "id": 9,
    "image": "https://images-eu.ssl-images-amazon.com/images/I/51tKouSturL._AC_UL600_SR600,400_.jpg",
    "name": "Product 9",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Electronics",
    "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 44.99
  },
  {
    "id": 10,
    "image": "https://images-eu.ssl-images-amazon.com/images/I/71aDXA6rvZL._AC_UL600_SR600,400_.jpg",
    "name": "Product 10",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Electronics",
    "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 54.99
  },

  {
    "id": 11,
    "image": "https://m.media-amazon.com/images/I/31ifIQqjX2L._AC_UL480_QL65_.jpg",
    "name": "Product 1",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Fashion",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "price": 19.99
  },
  {
    "id": 12,
    "image": "https://m.media-amazon.com/images/I/610IIi6wHuL._AC_UL480_QL65_.jpg",
    "name": "Product 2",
    "rating": "⭐⭐⭐⭐",
    "Category": "Fashion",
    "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "price": 29.99
  },
  {
    "id": 13,
    "image": "https://m.media-amazon.com/images/I/81TRdxk1wnL._AC_UL480_QL65_.jpg",
    "name": "Product 3",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Fashion",
    "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "price": 24.99
  },
  {
    "id": 14,
    "image": "https://m.media-amazon.com/images/I/A10JGz2JOZL._AC_UL480_QL65_.jpg",
    "name": "Product 4",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Fashion",
    "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 39.99
  },
  {
    "id": 15,
    "image": "https://m.media-amazon.com/images/I/61F348t3NML._AC_UL480_QL65_.jpg",
    "name": "Product 5",
    "rating": "⭐⭐",
    "Category": "Fashion",
    "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 49.99
  },
  {
    "id": 16,
    "image": "https://m.media-amazon.com/images/I/41bfMH1b6nL._AC_UL480_QL65_.jpg",
    "name": "Product 6",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Fashion",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "price": 14.99
  },
  {
    "id": 17,
    "image": "https://m.media-amazon.com/images/I/61KtcQpsjrL._AC_UL480_FMwebp_QL65_.jpg",
    "name": "Product 7",
    "rating": "⭐⭐⭐⭐",
    "Category": "Fashion",
    "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "price": 34.99
  },
  {
    "id": 18,
    "image": "https://m.media-amazon.com/images/I/41KML+1HubL._AC_UL480_FMwebp_QL65_.jpg",
    "name": "Product 8",
    "rating": "⭐",
    "Category": "Fashion",
    "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "price": 19.99
  },
  {
    "id": 19,
    "image": "https://m.media-amazon.com/images/I/715iH4uEh2L._AC_UL480_FMwebp_QL65_.jpg",
    "name": "Product 9",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Fashion",
    "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 44.99
  },
  {
    "id": 20,
    "image": "https://m.media-amazon.com/images/I/41Dr9I4x1EL._AC_UL480_FMwebp_QL65_.jpg",
    "name": "Product 10",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Fashion",
    "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 54.99
  },
  {
    "id": 21,
    "image": "https://m.media-amazon.com/images/I/81hEMXaSbYL._AC_UL480_QL65_.jpg",
    "name": "Product 1",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Appliences",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "price": 19.99
  },
  {
    "id": 22,
    "image": "https://m.media-amazon.com/images/I/71kbH5v9QWL._AC_UL480_QL65_.jpg",
    "name": "Product 2",
    "rating": "⭐⭐⭐⭐",
    "Category": "Appliences",
    "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "price": 29.99
  },
  {
    "id": 23,
    "image": "https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_UL480_QL65_.jpg",
    "name": "Product 3",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Appliences",
    "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "price": 24.99
  },
  {
    "id": 24,
    "image": "https://m.media-amazon.com/images/I/61okssN3Y6L._AC_UL480_QL65_.jpg",
    "name": "Product 4",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Appliences",
    "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 39.99
  },
  {
    "id": 25,
    "image": "https://m.media-amazon.com/images/I/51mN-RUnn5L._AC_UL480_QL65_.jpg",
    "name": "Product 5",
    "rating": "⭐⭐",
    "Category": "Appliences",
    "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 49.99
  },
  {
    "id": 26,
    "image": "https://m.media-amazon.com/images/I/61qEhDtYkRL._AC_UL480_QL65_.jpg",
    "name": "Product 6",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Appliences",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "price": 14.99
  },
  {
    "id": 27,
    "image": "https://m.media-amazon.com/images/I/51PidK9P2nL._AC_UL480_QL65_.jpg",
    "name": "Product 7",
    "rating": "⭐⭐⭐⭐",
    "Category": "Appliences",
    "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "price": 34.99
  },
  {
    "id": 28,
    "image": "https://m.media-amazon.com/images/I/61GQUtqKIpS._AC_UL480_QL65_.jpg",
    "name": "Product 8",
    "rating": "⭐",
    "Category": "Appliences",
    "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "price": 19.99
  },
  {
    "id": 29,
    "image": "https://m.media-amazon.com/images/I/61kBmC8NfGL._AC_UL480_QL65_.jpg",
    "name": "Product 9",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Appliences",
    "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 44.99
  },
  {
    "id": 30,
    "image": "https://m.media-amazon.com/images/I/61IWiEogW8L._AC_UL480_QL65_.jpg",
    "name": "Product 10",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Appliences",
    "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 54.99
  },
  {
    "id": 31,
    "image": "https://m.media-amazon.com/images/I/717JX3femML._AC_UL480_FMwebp_QL65_.jpg",
    "name": "Product 1",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Mobiles",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "price": 19.99
  },
  {
    "id": 32,
    "image": "https://m.media-amazon.com/images/I/71XNeka-BRL._AC_UL480_FMwebp_QL65_.jpg",
    "name": "Product 2",
    "rating": "⭐⭐⭐⭐",
    "Category": "Mobiles",
    "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "price": 29.99
  },
  {
    "id": 33,
    "image": "https://m.media-amazon.com/images/I/81H7FJtH4SL._AC_UL480_FMwebp_QL65_.jpg",
    "name": "Product 3",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Mobiles",
    "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "price": 24.99
  },
  {
    "id": 34,
    "image": "https://m.media-amazon.com/images/I/71d1ytcCntL._AC_UL480_FMwebp_QL65_.jpg",
    "name": "Product 4",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Mobiles",
    "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 39.99
  },
  {
    "id": 35,
    "image": "https://m.media-amazon.com/images/I/51X1axWGFZL._AC_UL480_FMwebp_QL65_.jpg",
    "name": "Product 5",
    "rating": "⭐⭐",
    "Category": "Mobiles",
    "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 49.99
  },
  {
    "id": 36,
    "image": "https://m.media-amazon.com/images/I/71tCOhEigtL._AC_UL480_FMwebp_QL65_.jpg",
    "name": "Product 6",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Mobiles",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "price": 14.99
  },
  {
    "id": 37,
    "image": "https://m.media-amazon.com/images/I/8195A49fZbL._AC_UL480_FMwebp_QL65_.jpg",
    "name": "Product 7",
    "rating": "⭐⭐⭐⭐",
    "Category": "Mobiles",
    "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "price": 34.99
  },
  {
    "id": 38,
    "image": "https://m.media-amazon.com/images/I/71dEY4Neo3L._AC_UL480_QL65_.jpg",
    "name": "Product 8",
    "rating": "⭐",
    "Category": "Mobiles",
    "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "price": 19.99
  },
  {
    "id": 39,
    "image": "https://m.media-amazon.com/images/I/818VqDSKpCL._AC_UL480_QL65_.jpg",
    "name": "Product 9",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Mobiles",
    "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 44.99
  },
  {
    "id": 40,
    "image": "https://m.media-amazon.com/images/I/612JxXPJPPL._AC_UL480_QL65_.jpg",
    "name": "Product 10",
    "rating": "⭐⭐⭐⭐⭐",
    "Category": "Mobiles",
    "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 54.99
  }
];