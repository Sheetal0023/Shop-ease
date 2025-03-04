import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Header/Header.css'
import { Navigate } from 'react-router-dom'

function PrivateRoute({Component}) {
    
    const[isAuth, setIsAuth] = useState("")

    const localjson = localStorage.getItem('jsontoken')
    const localemail = localStorage.getItem('jemail')



    // const localjson = "Local JSON"
    // const localusername = "Local Username"

    useEffect(() => {

        const fetchData = async() => {
            try {
                const response = await axios.post('http://localhost:8080/getuser', {localjson, localemail})
                const result = response.data
                if(result) {
                    setIsAuth(result)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
        
    })

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