import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Signup() {
  return (
    <div>
      <div id="a1">
          <h4 style={{textAlign:"center", color:"red",fontSize:"20px"}}>Login from</h4>
        <div id="b">
          <img className='b' src='https://www.shutterstock.com/image-photo/back-view-system-control-center-260nw-1073337962.jpg'alt='gh'/>
        </div>

          <div id='c'>
              <h4  style={{marginLeft:"50px",marginTop:"10px"}}><u>welcome back</u></h4>
              <div className="d">
                <p>please enter your email id and password to continue using ushing your dashbord</p>
              </div>
              <div className='a'>
                <label>email address</label><br></br>
                <span className='fa fa-email'></span>
                <input className='e' type='email'placeholder='enter your email'/>
              </div>
              <div className='f'>
                <label className=''>password</label><br/>
                <input className='e' type='password'placeholder='enter your password'/>
              </div>
              <button className='btn'>
                <Link to="/Login"
                className="px-3 py-1.5 font-semibold rounded-xl transition-all duration-700 hover:bg-pink-600 hover:text-pink-200 font-serif">
                <button >Login</button>
                </Link>
              </button>
 
          </div>
      </div>
      
    </div>
  )
}

export default Signup
