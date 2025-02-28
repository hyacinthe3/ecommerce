import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { IoIosSearch } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { PiShoppingBagThin } from "react-icons/pi";
import { LuUserRound } from "react-icons/lu";
import Usestatehook from './Login'; 

const Navbar = () => {
  const [modal, setModal] = useState(false); 

  const handleloginform = () => {
    // setModal((prev) => !prev); // Toggle modal state correctly
    setModal(!modal)
  };

  
 

  return (
    <div>
      {/* Display Login Modal When `modal` is True */}
      {modal && <Usestatehook handleloginform={handleloginform} />}

      <div className="header">
        <div className="logo">
          <h1>Botiga</h1>
        </div>

        <div className="search-container">
          <div className="category-dropdown">
            <select>
              <option>All Categories</option>
              <option>Body lotion</option>
              <option>Electronics</option>
              <option>Women Clothes</option>
              <option>Shoes</option>
              <option>Watch</option>
            </select>
            <span className="arrow-down">▼</span>
          </div>

          <div className="search-box">
            <input type="text" placeholder="Search products..." />
            <IoIosSearch 
              style={{ fontSize: '28px', color: 'gray', cursor: 'pointer' }} 
              onClick={handleloginform} //  Fixed click event
              className='search'
            />
          </div>
        </div>

        <div className="icons">
          <LuUserRound 
            style={{ color: "black", fontSize: "30px", cursor: "pointer" }} 
            onClick={handleloginform} //  Open login modal when clicked
          />
          <div className="cart-icon">
            <PiShoppingBagThin style={{ color: "black", fontSize: "30px", cursor: "pointer" }}/>
            <span className="badge">0</span>
          </div>
          <div className="heart-icon">
            <GoHeart style={{ color: "black", fontSize: "30px", cursor: "pointer" }}/>
            <span className="badge">0</span>
          </div>
        </div>
      </div>

      <br />

      <div className="nav">
        <div className="left">
          <div className="hover-container">
            <div className="trending-categories">
              <span>Trending Categories</span>
              <span className="arrow">↓</span>
              <font color="black">
              <ul className="hover-list">
                <li>Body lotion</li>
                <li>Electronics</li>
                <li>Women Clothes</li>
                <li>Shoes</li>
                <li>Watch</li>
              </ul>
              </font>
            </div>
          </div>
        </div>

        <div className="center">
          <ul>
            <Link to="/Home"><li>Home</li></Link>
            <Link to="/shop"><li>Shop</li></Link>
            <Link to="/Vendors"><li>Vendors</li></Link>
            <Link to="/Blog"><li>Blog</li></Link>
            <Link to="/Contact"><li>Contact</li></Link>
            {/* <Link to="/DashboardView"><li>DashboardView</li></Link> */}


          </ul>
        </div>

        <div className="right">
          <FaPhoneAlt style={{ color: "white", fontSize: "18px" }} />
          <span className="phone-number">800-123-4567</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
