import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './dashboard_styles/sidebar.css';
import { FaTachometerAlt, FaBox, FaStore, FaShoppingCart, FaTags, FaChartLine, FaHeadset, FaBars } from 'react-icons/fa';
import { FaCircleUser } from "react-icons/fa6";

const Sidebar = () => {
    // Read hover color from localStorage on load
    // const [hoverColor, setHoverColor] = useState(localStorage.getItem('hoverColor') || '#007bff');

    // useEffect(() => {
    //     // Apply hover color dynamically
    //     document.documentElement.style.setProperty('--sidebar-hover-color', hoverColor);
    // }, [hoverColor]);

    // Sidebar toggle state
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className={`sidebar ${!isSidebarVisible ? 'hidden' : ''}`}>
            <div className="company-name">
                BOTIGA
                <FaBars onClick={toggleSidebar} className="menu-icon" />
            </div>
            <hr /><br />
            <div className="sidebar-profile">
                <div className="prof">
                    <FaCircleUser className="profile-icon" />
                </div>
                <span className="profile-name"> <font color="white">Admin Name</font></span>
            </div><br />
            <hr />

            <ul>
                <li className="nav-item"><Link to="/dashboard"><FaTachometerAlt /> Dashboard</Link></li>
                <li className="nav-item"><Link to="/products"><FaBox /> Products</Link></li>
                <li className="nav-item"><Link to="/vendors"><FaStore /> Vendors</Link></li>
                <li className="nav-item"><Link to="/orders"><FaShoppingCart /> Orders</Link></li>
                <li className="nav-item"><Link to="/categories"><FaTags /> Categories</Link></li>
                <li className="nav-item"><Link to="/reports"><FaChartLine /> Reports</Link></li>
                <li className="nav-item"><Link to="/support"><FaHeadset /> Support</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
