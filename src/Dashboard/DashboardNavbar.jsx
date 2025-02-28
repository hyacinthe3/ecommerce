import React, { useState } from 'react';
import './dashboard_styles/Dashboard_navbar.css';
import { FaSearch, FaShoppingCart, FaCog } from 'react-icons/fa';
import { FaCircleUser } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import SettingsModal from './Settings';

const DashboardNavbar = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleSettingsClick = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
        document.body.classList.toggle('dark-mode'); // Apply dark mode to the body
    };

    return (
        <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}> 
            <div className="navbar-container">
                <div className="left-section">
                    <h2 className="logo"></h2>
                </div>
                <div className="right-section">
                    <div className="nav-icon"><FaSearch className={`icon ${isDarkMode ? 'light-icon' : ''}`} /></div>
                    <div className="nav-icon"><IoMdNotifications className={`icon ${isDarkMode ? 'light-icon' : ''}`} /></div>
                    <div className="nav-icon"><FaShoppingCart className={`icon ${isDarkMode ? 'light-icon' : ''}`} /></div>
                    <div className="nav-icon profile-icon">
                        <FaCircleUser className={`icon ${isDarkMode ? 'light-icon' : ''}`} />
                        <ul className="hover-list">
                            <li>Profile</li>
                            <li>Role</li>
                            <li>Inbox</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                    <div className="nav-icon">
                        <FaCog className={`spinning-icon icon ${isDarkMode ? 'light-icon' : ''}`} onClick={handleSettingsClick} />
                    </div>
                </div>
            </div>
            {modalOpen && <SettingsModal onClose={closeModal} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />}
        </nav>
    );
};

export default DashboardNavbar;
