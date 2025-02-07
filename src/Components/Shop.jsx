import React from 'react'
import '../styles/shop.css'
import shoop from '../assets/shop.webp'
import p7 from '../assets/p7.jpg'
import p8 from '../assets/p8.jpg'
import p10 from '../assets/p10.jpg'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaCircle } from "react-icons/fa6";
const Shop = () => {
    return (
  
        <div className='up'>
            <img src={shoop} alt="" width="1100"  />
            
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
                </div>
                <div className="results">
                    <ul>
                        <li>showing 1-9 of 13 results</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li><select name="" id="">
                            <option value="">Default Sorting</option>
                            <option value="">Sort By popularity</option>
                            <option value="">Sort By average rating</option>
                            <option value="">Sort By latest</option>
                            <option value="">Sort By price:low to high</option>
                            <option value="">Sort By price:hight to low</option>
                            </select></li>
                    </ul>
                    <div className="colors">
                    </div>
                    <hr />
                    <br />
                    <div className="images">
                        <div className="img8">
                            <img src={p7} alt="" width={270} height={300} />
                            <br /><b> All In One Bottle <br />
                                 $22.00 – $55.00</b><br />
                            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                            <MdOutlineStarPurple500 style={{ color: "gray", fontSize: "20px" }} />
                            <MdOutlineStarPurple500 style={{ color: "gray", fontSize: "20px" }} />
                            <br /><FaCircle style={{ color: "gray", fontSize: "20px" }} /> <FaCircle style={{ color: "brown", fontSize: "20px" }} /> <FaCircle style={{ color: "dimgrey", fontSize: "20px" }} />
                        </div>
                        <div className="img9">
                            <img src={p8} alt="" width={270} height={300} /><br />
                            <b>
                                Amazon Alexa <br />
                                $49.00 – $69.00 <br />
                            </b>
                            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                            <br /><FaCircle style={{ color: "gray", fontSize: "20px" }} />

                        </div>
                        <div className="img7">
                            <img src={p10} alt="" width={270} height={300} /><br />
                            Headset Gamer Legion <br />
                            $22.00 – $55.00 <br />
                            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                            <MdOutlineStarPurple500 style={{ color: "gray", fontSize: "20px" }} /> <br />
                            <FaCircle style={{ color: "gray", fontSize: "20px" }} /> <FaCircle style={{ color: "brown", fontSize: "20px" }} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Shop