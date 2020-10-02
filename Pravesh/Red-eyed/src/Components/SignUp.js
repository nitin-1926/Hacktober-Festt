import React from 'react'
import { Link } from 'react-router-dom'

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Name:null,
            Email:null,
            Password:null
        }
    }
    changeHandler = (e) =>{
        this.setState({
            [e.target.name]:e.target.value 
        })
    }
    submitHandler = (e)=>{
        e.preventDefault();

    }


    render(){
    return(
        <div className='form'>
            <h1>Sign Up</h1>
            <form onSubmit={this.submitHandler}>
                <input type='name' placeholder='Name' className='textField' name='Name' onChange={this.changeHandler}/>
                <input type='email' onBlur={this.emailCheck} placeholder='Email' className='textField' name='Email' onChange={this.changeHandler}/>
                <input type='password' placeholder='Password' className='textField' name='Password' onChange={this.changeHandler}/>
                <input type='submit' value='Sign Up' className='btn'/>
            </form>
            <Link to='/LogIn' className='link'><h4>Sign In</h4></Link>
        </div>
    )
    }
}


export default Signup