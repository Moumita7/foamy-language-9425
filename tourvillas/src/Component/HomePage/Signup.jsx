
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/Login.css"
import Navbar from './Navbar'

const Login = () => {
    return(
        <>
        <Navbar/>
        <div className='log'>
     
        <div>
            {/* <form> */}
            <input className='inputt' type="type" placeholder='enter your Name'/>

                <input className='inputt' type="email" placeholder='enter your Email'/>
                <input className='inputt' type="password" placeholder='enter your Password'/>
                <Link to="/login"><button className='bbt'>Signup</button></Link>
                <p>Don't have an account <Link to="/login"><p>Login</p></Link></p>

            {/* </form> */}
            </div>
        </div>
        </>
    )
   
}
    
  


export default Login