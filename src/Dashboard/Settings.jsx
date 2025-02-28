import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import "./dashboard_styles/settings.css"

const SettingsModal = ({ onClose, toggleTheme, isDarkMode, changeLanguage }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Settings</h2>
                <div className="setting-option">
                    <span>Change The Mode</span>
                    <button onClick={toggleTheme} className="toggle-button">
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
                <div className="setting-option2">
                    <span>Change Language</span><br /><br />
                    <select onChange={changeLanguage} className="language-select">
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                    </select>
                </div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default SettingsModal;

