import React, { useState } from 'react'

import './login.css'
import { assets } from '../../assets/assets'

const Login = ({setShowLogin}) => {
    const[currentState,setCurrentState]=useState("Login")
  return (
    <div className='login'>
        <form className='login-container'>
            <div className="login-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="cross_icon" />
            </div>
            <div className="login_input">
                {currentState === "Login" ? <></> : <input type="text" placeholder='Your Name' required/>}
                <input type="email" placeholder='Your Email' required/>
                <input type="password" placeholder='Your Password' required/>
            </div>
                <button>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
            <div className="login-condition">
                <input type="checkbox" name="" id="" />
                <p>By Continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currentState === "Login" ? <p>Create a new account? <span onClick={()=>{setCurrentState("Sign Up")}}>Click Here</span></p> : <p>Already have an account? <span onClick={()=>{setCurrentState("Login")}}>Login Here</span></p> }
        </form>
    </div>
  )
}

export default Login