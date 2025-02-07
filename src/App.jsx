import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Shop from './Components/shop';
import Blog from './Components/Blog';
import Vendors from './Components/Vendors'
import Contact from './Components/Contact'
import Usestatehook from './Components/Login';
import RegisterForm from './Components/Register';
import SinglePage from './Components/SinglePage';
function App() {
  return (
  
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Layout/>}>
        {/* <Route  index element={<Home/>}/> */}
        <Route  path='/Home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/Vendors' element={<Vendors/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/sinlgepage/:id' element={<SinglePage/>}/>
       
        <Route path='/Login' element={<Usestatehook/>}></Route>
        <Route path='/Register' element={<RegisterForm/>}></Route>
        </Route>
        
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
