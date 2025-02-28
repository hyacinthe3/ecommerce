import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import "../Styles/login.css";
import RegisterForm from './Register';  // Import RegisterForm here

const Usestatehook = ({ handleloginform }) => {
  const [isRegistering, setIsRegistering] = useState(false); // Track whether we are showing the login or register form

  const toggleForm = () => {
    setIsRegistering(!isRegistering); // Toggle between login and register forms
  };

  return (
    <div className="overlay">
      <div className="modal-conten1">
        <div className="auth-container">
          {/* Toggle between Login and Register Forms */}
          {isRegistering ? (
            <RegisterForm toggleForm={toggleForm} handleRegister={handleloginform} />
          ) : (
            <div className='holder'>
              <div className="all">
                <div className="logi">Login</div>
                <div className="ic">
                  <center>
                    <IoMdClose className="close-btn" onClick={handleloginform} />
                  </center>
                </div>
              </div>
              <input type="text" placeholder="Enter username" className="input" /><br /><br />
              <input type="email" placeholder="Enter email" className="input" /><br /><br />
              <button type="submit" className="auth-button">Login</button>
              <h5 className="auth-footer">
                Don't have an account? <span onClick={toggleForm}>Register</span> {/* Switch to Register Form */}
              </h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Usestatehook;
