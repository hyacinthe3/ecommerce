import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Navbar from "./Components/Navbar"; // Assuming you have a Navbar component where your icon is
import Footer from "./Components/Footer";
import Shop from "./Components/Shop";
import Blog from "./Components/Blog";
import Vendors from "./Components/Vendors";
import Contact from "./Components/Contact";
import Usestatehook from "./Components/LoginForm"; // Your LoginForm Modal
import RegisterForm from "./Components/Register";
import SinglePage from "./Components/SinglePage";
import DashboardLayout from "./Dashboard/DashboardLayout";
import DashboardView from "./Dashboard/DashboardView";
import Dashboardproducts from "./Dashboard/Dashboardproducts";
import Settings from "./Dashboard/Settings";
import Dashboardorders from "./Dashboard/Dashboardorders";
import Dashboardvendors from "./Dashboard/Dashboardvendors";

function App() {
  const [showLogin, setShowLogin] = useState(false); // State to toggle the login modal

  // Function to show login modal
  const handleShowLogin = () => setShowLogin(true);

  // Function to close login modal
  const handleCloseLogin = () => setShowLogin(false);

  return (
    <BrowserRouter>
      {/* Conditionally render LoginForm when showLogin is true */}
      {showLogin && <LoginForm handleClose={handleCloseLogin} />}

      <Routes>
        {/* Main Website Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="shop" element={<Shop />} />
          <Route path="vendors" element={<Vendors />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="singlepage/:id" element={<SinglePage />} />
          {/* <Route path="login" element={<LoginForm />} /> */}
          <Route path="register" element={<RegisterForm />} />
          {/* <Navbar handleShowLogin={handleShowLogin} /> */}
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardView />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Dashboardproducts" element={<Dashboardproducts />} />
          <Route path="Dashboardorders" element={<Dashboardorders />} />
          <Route path="Dashboardvendors" element={<Dashboardvendors />} />
        </Route>
      </Routes>

      {/* Assuming your Navbar is here, passing handleShowLogin to open the modal */}

    </BrowserRouter>
  );
}

export default App;
