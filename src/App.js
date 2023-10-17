import React from 'react';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Aboutus from './Aboutus';
import './App.css';
import Contactus from './Contactus';
import Home from './Home'
import Forgetpassword from './Forgetpassword';
import Footer from './Footer';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


function App() {
  return (
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route paath="/Signup" element={<Signup/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='Aboutus' element={<Aboutus/>}/>
          <Route path='Contactus' element={<Contactus/>}/>
          <Route path='/Forgetpasword'element={<Forgetpassword/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  )
}

export default App

