import { AppContext } from "../Components/context/ProductContext"
import Header from "../Components/Header/Header"
import React, {useContext, useReducer, useState} from "react"
import "../Components/Header/Header.css"



const About = ({user}) => {
    const {username, phone} = user
    const name = useContext(AppContext)
    
    return (
        <>
            <Header />
            <div className="infoUser">
                <p>Hi {username}</p>
                <p>Phone Number: {phone}</p>
            </div>
            
        </>
    )
}

export default About