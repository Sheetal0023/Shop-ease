import React from "react";
import './Product.css'
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helper/FormatPrice";
import '../Header/Header.css'



const Product = (curEle) => {
    const {id, name, image, price, category} = curEle
    return (
        <div className="featuredProduct-component">
            <NavLink to={`/singleproduct/${id}`}>
            <figure>
                <img src={image} alt={name} width="250px" />
                <figcaption>{category}</figcaption>
            </figure>
            <div style={{display:"flex", justifyContent:"space-between", fontSize:"0.85rem", padding:"10px 0"}}>
                <h4>{name}</h4>
                <p><FormatPrice price={price} /></p>
            </div>
            
        </NavLink>
        </div>
        
    )
}



export default Product

