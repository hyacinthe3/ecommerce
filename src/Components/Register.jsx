import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import "../Styles/register.css";

const RegisterForm = ({ toggleForm, handleRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
    // For example, make an API request to register the user
    console.log(formData);
  };

  return (
    <div className="holdform">
    <div className="auth-form-container">
      <div className="all">
        <div className="logi2"><h2>Register</h2></div>
        <div className="ic">
          
            <IoMdClose className="close-btn" onClick={handleRegister} />
          
        </div>
        
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter name" 
          className="input" 
          name="name" 
          value={formData.name} 
          onChange={handleInputChange} 
        /><br /><br />
        <input 
          type="email" 
          placeholder="Enter email" 
          className="input" 
          name="email" 
          value={formData.email} 
          onChange={handleInputChange} 
        /><br /><br />
        <input 
          type="password" 
          placeholder="Enter password" 
          className="input" 
          name="password" 
          value={formData.password} 
          onChange={handleInputChange} 
        /><br /><br />
        <input 
          type="password" 
          placeholder="Confirm password" 
          className="input" 
          name="confirmPassword" 
          value={formData.confirmPassword} 
          onChange={handleInputChange} 
        /><br /><br />
        <button type="submit" className="auth-button">Register</button>
      </form>
      <h5 className="auth-footer">
        Already have an account? <span onClick={toggleForm}>Login</span> {/* Switch to Login Form */}
      </h5>
    </div>
    </div>
  );
};

export default RegisterForm;
