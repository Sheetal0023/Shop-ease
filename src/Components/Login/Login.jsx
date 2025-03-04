import React, { useState, useEffect } from 'react'
import '../SignUp/SignUp.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import user_icon from '../Assets/user (1).png'
import telephone_icon from '../Assets/telephone.png'
import password_icon from '../Assets/padlock.png'
import email_icon from '../Assets/email.png'

import axios from "axios"

const LogIn = () => {
    const[action, setAction] = useState("Login")
    const [response, setResponse] = useState("")
    
    const intialValue = {email:"", password:""}

    const [formValue, setFormValue] = useState(intialValue) 
    const [formError, setFormError] = useState({}) 
    const [backError, setBackError] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [loading, setIsLoading] = useState({})

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
                    const response = await axios.post(`${process.env.REACT_APP_NODE_API}/login`, formValue)
                    let result = response.data
                    setBackError(result)
                    if(response.status == 200) {
                        localStorage.setItem('jsontoken', result.token)
                        localStorage.setItem('jemail', result.email)
                        navigate("/newPage", {state: result})
                        setIsLoading(true)
                    }
                } catch (error) {
                    console.log(error)
                    setBackError({message:"Invalid Credentials"})
                }
            }
            fetchData()
        }
    }, [formError])

    const validate = (value) => {
        const error = {}
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
 

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

    if(!loading) {
        
            <div>LOader</div>
        
    } else {
        return (

    
            <div className="main-body">
                <div className='container'>
                    <form action="post" onSubmit={handleSubmit}>
        
                    
                <div className="header">
                    <div className="text">{action}</div>
                </div>
        
                <div className="inputs">      
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
                    <small className='errorMessage'>{formError.email}{backError.message}</small>
        
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
                    <small className='errorMessage'>{formError.password}</small>
        
                </div>
                {action === "Sign Up"?<div></div>:<div className="forgot-password">Lost Password <span>Click here!</span></div>}  
                <button type='submit' className='submit-button'>Submit</button>
                </form>
                <p className='forgot-password center'>Don't have an account <Link to="/sign">Register Here</Link></p>
            </div>
            </div>
          )
    }
  
}

export default LogIn