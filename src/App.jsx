import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Shop from './Components/Shop';
import Blog from './Components/Blog';
import Vendors from './Components/Vendors';
import Contact from './Components/Contact';
import Usestatehook from './Components/Login';
import RegisterForm from './Components/Register';
import SinglePage from './Components/SinglePage';
import DashboardLayout from './Dashboard/DashboardLayout';
import DashboardView from './Dashboard/DashboardView';
import Settings from './Dashboard/Settings';

function App() {
  return (
    <BrowserRouter>
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
          <Route path="login" element={<Usestatehook />} />
          <Route path="register" element={<RegisterForm />} />

        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardView />} />
          <Route path="Settings" element={<Settings/>}/>


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
