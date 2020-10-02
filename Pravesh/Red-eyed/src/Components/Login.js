import React from 'react'
import { Link } from 'react-router-dom'

const Login = () =>{
    const emailCheck=()=>{

    }
    return(
        <div className='form'>
            <h1>Sign In</h1>
            <form>
                <input type='email' onBlur={emailCheck} placeholder='Email' className='textField'/>
                <input type='password' placeholder='Password' className='textField'/>
                <input type='submit' value='Sign In' className='btn'/>
            </form>
            <Link to='/SignUp' className='link'><h4>Sign Up</h4></Link>
        </div>
    )
}

export default Login