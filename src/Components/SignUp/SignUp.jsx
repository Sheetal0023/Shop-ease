import React, { useState, useEffect } from 'react'
import './SignUp.css'

import user_icon from '../Assets/user (1).png'
import telephone_icon from '../Assets/telephone.png'
import password_icon from '../Assets/padlock.png'
import email_icon from '../Assets/email.png'

import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

    const[action, setAction] = useState("Sign Up")
    
    const intialValue = {username:"",phonenumber:"", email:"", password:""}

    const [formValue, setFormValue] = useState(intialValue) 
    const [formError, setFormError] = useState({}) 
    const [isSubmit, setIsSubmit] = useState(false)
    const [backError, setBackError] = useState({})
    const [dataError, setDataError] = useState()

    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValue({...formValue, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validate(formValue))
        setIsSubmit(true)

    }

    
    
    useEffect(() => {
        if(Object.keys(formError).length == 0 && isSubmit) {
            const fetchData = async () => {
                try {
                    const response = await axios.post(`${process.env.REACT_APP_NODE_API}/sign`, formValue)
                        
                        let responseData = response.data
                        
                        setBackError(responseData)

                        if(response.status == 201) {
                            navigate("/login")
                        } else {
                            setDataError("wrong")
                        }

                } catch (error) {
                    console.log(error)
                }
            }
            fetchData()

        
        }
    }, [formError])

    const validate = (value) => {
        const error = {}
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if(!value.username) {
            error.username = "Username is required"
        }

        if(!value.phonenumber) {
            error.phonenumber = "Phone Number is required"
        } else if (!Number(value.phonenumber)) {
            error.phonenumber = "Phone Number cannot be String"
        } else if (value.phonenumber.length != 10) {
            error.phonenumber = "Invalid Phone Number"
        }
        

        if(!value.email) {
            error.email = "Email is required"
        } else if(!regex.test(value.email)) {
            error.email = "Invalid email address"
        }

        if(!value.password) {
            error.password = "Password is required"
        } else if(value.password.length < 4) {
            error.password = "Password is not strong"
        } else if(value.password.length > 13) {
            error.password = "Password cannot exceed more than 13 characters"
        }

        return error

    }

    

  return (
    <div className="main-body">
        <div className='container'>
            <form action="post" onSubmit={handleSubmit}>

            
        <div className="header">
            <div className="text">{action}</div>
            {dataError === "wrong"?<div>Somthing is wrong</div>: <div></div>}
        </div>

        <div className="inputs">
            {action === "Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input 
                    type="text" 
                    placeholder='Username'
                    name="username"
                    autoComplete='off'
                    value={formValue.username}
                    onChange={handleChange}
                />
            </div>}
            <small className='errorMessage'>{formError.username}</small>

            {action === "Login"?<div></div>:<div className="input">
                <img src={telephone_icon} alt="" />
                <input 
                    type="text" 
                    placeholder='Phone Number'
                    name='phonenumber'
                    autoComplete='off'
                    value={formValue.phonenumber}
                    onChange={handleChange}
                />
            </div>} 
            <small className='errorMessage'>{formError.phonenumber}{backError.errorPhone}</small>

            <div className="input">
                <img src={email_icon} alt="" />
                <input 
                    type="email" 
                    placeholder='Email' 
                    name='email'
                    autoComplete='off'
                    value={formValue.email}
                    onChange={handleChange}
                />
            </div>
            <small className='errorMessage'>{formError.email}{backError.errorEmail}</small>

            <div className="input">
                <img src={password_icon} alt="" />
                <input 
                    type="password" 
                    placeholder='Password' 
                    name='password'
                    autoComplete='off'
                    value={formValue.password}
                    onChange={handleChange}
                />
            </div>
            <small className='errorMessage'>{formError.password}{backError.errorPassword}</small>

        </div>
        {action === "Sign Up"?<div></div>:<div className="forgot-password">Lost Password <span>Click here!</span></div>}
        
        <button type='submit' className='submit-button'>Submit</button>
        </form>
        <p className='forgot-password center'>Already have an account <Link to="/login">Login Here</Link></p>

    </div>
    </div>
  )
}

export default SignUp