import React from "react";
import { IoMdClose } from "react-icons/io";
import "../Styles/register.css";
import Usestatehook from './Login'; 

const RegisterForm = ({handleRegister}) => {
  return (
    <div className="overlay">

      <div className="modal-contents">
        <div className="auth-container">
          <form action="" className="auth-form">
            <div className="all">
              <div className="logi">Register</div>
                  <IoMdClose className="close-btn" onClick={handleRegister} />
            </div>
            <input type="text" placeholder="Enter your first name" className="input" required />
            <input type="text" placeholder="Enter your last name" className="input" required />
            <input type="email" placeholder="Enter your email" className="input" required />
            <input type="password" placeholder="Confirm your password" className="input" required /><br />
            <button type="submit" className="auth-button">Register</button>

            <h5 className="auth-footer">
              Already have an account? <a href="/login">Login</a>
        </h5>
          </form>
        </div>
      </div>      
    </div>
  );
};

export default RegisterForm;

