import React from 'react'
import './LoginSignup.css'

import user_icon from '../Assests/user.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/padlock.png'
import { useState } from 'react'

export const LoginSignup = () => {
    const [action,setAction] = useState("Login")
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "Login" ? <div></div>:  <div className="input">
                <img src={user_icon} alt="user" height="25px" width="25px"/>
                <input type="text" placeholder='Username' />
            </div>}
           
            <div className="input">
                <img src={email_icon} alt="email" height="25px" width="25px"/>
                <input type="email" placeholder="Email Id" />
            </div>
            <div className="input">
                <img src={password_icon} alt="password" height="25px" width="25px" />
                <input type="password" placeholder="Password"/>
            </div>
        </div>
        {action === "Sign Up" ? <div></div> :  <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
       
        <div className="submit-container">
            <div className={action==="Login" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>  
            <div className={action==="Sign Up" ? "submit gray" : "submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}
