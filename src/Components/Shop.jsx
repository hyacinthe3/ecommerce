import React, { useState } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaCircle } from "react-icons/fa6";

import '../styles/shop.css';
import shoop from '../assets/shop.webp';
import p7 from '../assets/p7.jpg';
import p8 from '../assets/p8.jpg';
import p10 from '../assets/p10.jpg';

const Shop = () => {
    const [priceRange, setPriceRange] = useState([0, 79]);

    const handlePriceChange = (e, index) => {
        const newPrice = [...priceRange];
        newPrice[index] = parseInt(e.target.value);
        setPriceRange(newPrice);
    };

    const products = [
        {
            id: 1,
            name: "Headset Gamer Legion Plus",
            price: "$22.00 – $55.00",
            rating: 5,
            image: p7,
            colors: ["#8B5E3B", "#D9D9D9", "#E0E0E0"],
        },
        {
            id: 2,
            name: "JDoe’s Styling Watch",
            price: "$22.00 – $33.00",
            rating: 5,
            image: p8,
            colors: ["#D9D9D9", "#8B5E3B"],
        },
        {
            id: 3,
            name: "Jessi Cam Recorder",
            price: "$22.00 – $55.00",
            rating: 5,
            image: p10,
            colors: ["#FFFFFF", "#8B5E3B", "#D9D9D9"],
        },
    ];

    return (
        <div className='up'>
            <img src={shoop} alt="Shop Banner" width="1100" />

            <div className="contains">
                <div className="cat">
                    <h2>Categories</h2>
                    <ul>
                        <li>Body lotion</li>
                        <li>Computer gadget</li>
                        <li>Electronics</li>
                        <li>Fashion</li>
                        <li>General shoes</li>
                        <li>Sport</li>
                        <li>Watch</li>
                        <li>Women clothes</li>
                    </ul>
                    <div className="scrollable-section">
                    <div className="filter-section">
                        <h3>Rating</h3>
                        <div className="rating-filter">
                            {[5, 4.5, 4].map((stars, index) => (
                                <div key={index} className="rating-option">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        i < Math.floor(stars) ? <FaStar key={i} color="orange" /> :
                                            i < stars ? <FaStarHalfAlt key={i} color="orange" /> :
                                                <FaRegStar key={i} color="gray" />
                                    ))}
                                    <span>({[8, 4, 1][index]})</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="filter-section">
                        <h3>Price</h3>
                        <div className="range-slider">
                            <input
                                type="range"
                                min="0"
                                max="79"
                                value={priceRange[0]}
                                onChange={(e) => handlePriceChange(e, 0)}
                            />
                            <input
                                type="range"
                                min="0"
                                max="79"
                                value={priceRange[1]}
                                onChange={(e) => handlePriceChange(e, 1)}
                            />
                        </div>
                        <div className="price-values">
                            <input type="text" value={`$${priceRange[0]}`} readOnly />
                            <input type="text" value={`$${priceRange[1]}`} readOnly />
                        </div>
                    </div>
                </div>

                </div>

                
                <div className="results">
                    <ul>
                        <li>showing 1-9 of 13 results</li>
                        <li><select>
                            <option value="">Default Sorting</option>
                            <option value="">Sort By popularity</option>
                            <option value="">Sort By average rating</option>
                            <option value="">Sort By latest</option>
                            <option value="">Sort By price: low to high</option>
                            <option value="">Sort By price: high to low</option>
                        </select></li>
                    </ul>
                    <hr />
                    <br />
                    <div className="images">
                        {products.map((product) => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.name} width={270} height={300} />
                                <b>{product.name} <br /> {product.price}</b>
                                <div className="stars">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        i < product.rating ? <MdOutlineStarPurple500 key={i} color="orange" /> :
                                            <MdOutlineStarPurple500 key={i} color="gray" />
                                    ))}
                                </div>
                                <div className="color-options">
                                    {product.colors.map((color, index) => (
                                        <FaCircle key={index} style={{ color, fontSize: "20px" }} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
