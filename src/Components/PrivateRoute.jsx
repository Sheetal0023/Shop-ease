import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Header/Header.css'
import { Navigate } from 'react-router-dom'

function PrivateRoute({Component}) {
    
    const[isAuth, setIsAuth] = useState("")
    const[error, setIsError] = useState("")

    const localjson = localStorage.getItem('jsontoken')
    const localemail = localStorage.getItem('jemail')



    // const localjson = "Local JSON"
    // const localusername = "Local Username"

    useEffect(() => {

        const fetchData = async() => {
            try {
                const response = await axios.post(`${process.env.REACT_APP_NODE_API}/getuser`, {localjson, localemail})
                const result = response.data
                if(response.status == 200) {
                    setIsAuth(result)
                } else {
                    setIsError("please Login")
                }
            } catch (error) {
                setIsError("Please Log In")
            }
        }
        fetchData()
        
    })

    if(error) {
        return (
            <Navigate to={"/login"} />
        )
    }

    if(!isAuth) {
        return (
            <div className="main-loader">
                <div className="loader"></div>
            </div>
        )
    } else {
        return (
            <div>
                <Component user={isAuth}/>
            </div>
        )
    }
  
}

export default PrivateRoute