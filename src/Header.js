import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className='q'>
        
        <div>
          <img style={{borderRadius:"50%",height:"80px",width:"80px"}} src='https://th.bing.com/th?id=OIP.
        </div>
        <div className='r' style={{marginTop:"-55px"}}>
        <input className='s' type='Dropdown'placeholder='serch here'/>
        
        <img className='t' src='https://t3.ftcdn.net/jpg/03/25/73/68/240_F_325736897_lyouuiCkWI59SZAPGPLZ5OWQjw2Gw4qY.jpg'/>

    <div className='u'>
      <div>
      <img className='v' src='https://t4.ftcdn.net/jpg/02/50/30/59/240_F_250305943_sDC6la1N1fDl3bLgfLxOkQwItIodsdMb.jpg'/>
      </div> 
<div>
      <img className='v' src='https://t3.ftcdn.net/jpg/01/77/30/48/240_F_177304889_R7cxBSbOlwYk05BRuwj8VZxpLClKSzlk.jpg'/>
      </div>
    <div>
      <img className='v' src='https://t4.ftcdn.net/jpg/01/08/24/99/240_F_108249947_UMBLfSCpTWU6AGiUz0F7a524koG3eO0z.jpg'/>
      </div>

    </div> 

        </div>
      </div>
      <div style={{marginLeft:"150px",marginTop:"-80p" ,position:"absolute"}}>
          <div style={{marginTop:"-55px"}}>
                <Link to="/Signup"
                className="px-3 py-1.5 font-semibold rounded-xl transition-all duration-700 hover:bg-pink-600 hover:text-pink-200 font-serif">
                <button >Signup</button>
                </Link>
                <Link to="/Login"
                className="px-3 py-1.5 font-semibold rounded-xl transition-all duration-700 hover:bg-pink-600 hover:text-pink-200 font-serif">
                <button >Login</button>
                </Link>
             
              
                <Link
                        to="/Contactus"
                        className="px-3 py-1.5 font-semibold rounded-xl transition-all duration-700 hover:bg-pink-600 hover:text-pink-200 font-serif">
                        Contactus
                      </Link>
            
                
           
                <Link
                        to="/Home"
                        className="px-3 py-1.5 font-semibold rounded-xl transition-all duration-700 hover:bg-pink-600 hover:text-pink-200 font-serif">
                        Home
                      </Link>
             </div>
        </div>
    </div>
  )
}

export default Header;







     