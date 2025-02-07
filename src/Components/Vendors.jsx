import React from 'react'
import '../Styles/vendors.css'
import { CgSortAz } from "react-icons/cg";
import { MdWindow } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import s1 from '../assets/s1.jpg'
import s111 from '../assets/s111.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import s4 from '../assets/s4.jpg'
import s5 from '../assets/s5.jpg'
import s6 from '../assets/s6.jpg'
import s11 from '../assets/s11.jpg'
import s22 from '../assets/s22.jpg'
import s33 from '../assets/s33.webp'
import s44 from '../assets/s44.webp'
import s55 from '../assets/s55.webp'
import s66 from '../assets/s66.png'
const Vendors = () => {
    return (
        <div>
            <br />
            <center><h1>Store List</h1></center>
            <div className="title">
                <div className="showing">
                    Total stores showing: 6
                </div>
                <div className="btn">
                    <button><CgSortAz /> Filter</button>
                </div>
                <div className="sorting">
                    Sort by: <select name="" id="">
                        <option value="">Most Recent</option>
                        <option value="" id="">Polpular</option>
                        <option value="">Options</option>
                    </select>
                </div>
                <div className="ico">
                    <MdWindow /><HiOutlineBars3 />
                </div>
            </div><br />
            <div className="vending">
                <ul>
                    <li><img src={s111} alt="" width={330} height={280} /></li>
                    <li><img src={s2} alt="" width={330} height={280} /></li>
                    <li><img src={s3} alt="" width={330} height={280} /></li>
                </ul>
            </div>
            <div className="ima">
                <div className="image1">
                    
                    <div class="image-text">
                        john Doe's store <br />
                        <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                        <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                        <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                        <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                        <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} /><br />
                        central park, <br />
                        New York,<br />
                        New York,United States(US)
                    </div>
                    <img src={s1} alt="" width={120} height={90} /><br />
                    <FaArrowCircleRight style={{ color: "blue", fontSize: "20px",cursor: "pointer" }}/>
                </div>
                <div className="image2">
                    <img src={s22} alt="" width={120} height={90} />
                    <div class="image-text2">
                    Jessica's Store <br />
                        <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                        <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                        <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                        <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                        <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} /><br />
                        central park, <br />
                        New York,<br />
                        New York,United States(US)
                    </div><br />
                    <FaArrowCircleRight style={{ color: "blue", fontSize: "20px",cursor: "pointer" }}/>
                </div>
                <div className="image3">
                    <img src={s33} alt="" width={120} height={90} />
                    <div class="image-text3">
                    Santa Monica's Store <br />
                        <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                        <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                        <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                        <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
                        <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} /><br />
                        central park, <br />
                        New York,<br />
                        New York,United States(US)
                    </div><br />
                    <FaArrowCircleRight style={{ color: "blue", fontSize: "20px",cursor: "pointer" }}/>
                </div>
            </div>
            <br /><br /><br />
        </div>
    )
}

export default Vendors