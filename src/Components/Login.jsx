import React from 'react';
import { IoMdClose } from "react-icons/io";
import "../Styles/login.css";
import { useState } from 'react';
import RegisterForm from './Register';

const Usestatehook = ({ handleloginform }) => {
  const [form, setForm] = useState(false);

  const handleRegister = () => {
    // setModal((prev) => !prev); // Toggle modal state correctly
    setForm(!form)
  };
  return (
    <div className="overlay">
      {form && <RegisterForm handleRegister={handleRegister} />}

      <div className="modal-content">
        <div className="auth-container">
          <form action="" className="auth-form">
            <div className="all">
              <div className="logi">
                Login
              </div>
              <div className="ic">
                <center><IoMdClose className="close-btn" onClick={handleloginform} /></center>
              </div>
            </div>
            <input type="text" placeholder="Enter username" className="input" /><br /><br />
            <input type="email" placeholder="Enter email" className="input" /><br /><br />
            <button type="submit" className="auth-button">Login</button>
            <h5 className="auth-footer">
              Don't have an account? <span onClick={handleRegister}>Register</span>
            </h5>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Usestatehook;
