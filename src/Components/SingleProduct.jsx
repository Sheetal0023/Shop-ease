import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from './context/ProductContext'
import PageNavigation from './PageNavigation'
import Header from './Header/Header'
import Footer from './Footer'
import './Header/Header.css'
import FormatPrice from './Helper/FormatPrice'
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdDeliveryDining, MdSecurity} from "react-icons/md";
import { IconContext } from "react-icons";

import MyImages from './MyImages'

const API = "https://api.pujakaitem.com/api/products"

function SingleProduct() {
    const {id} = useParams()
    const {getSingleProduct, isSingleLoading, singleProduct} = useProductContext()

    

    const {
        id: alias,
        name,
        company,
        price,
        category,
        stock,
        stars,
        reviews,
        description,
        image,

    } = singleProduct

    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`)
    }, [])
    console.log(id)

    if(isSingleLoading) {

        return <div className="main-loader">

        <div className="loader"></div>
        </div>


    } else {
        return (
            <>
            <Header />
            <PageNavigation title={name}/>
            <div className="singleProduct">
                <div className="productImages">
                    <MyImages image={image} />
                </div>
                <div className="productData">
                    <h2>{name}</h2>
                    <p>{stars}</p>
                    <p>{reviews} reviews</p>
                    <p className="productData-price">
                        MRP:
                        <del>
                            < FormatPrice price={price + 250000} />
                        </del>
                    </p>
                    <p className='productData-real-price'>
                        Deal of the Day: <FormatPrice price={price} />
                    </p>
                    <p className='productData-description'>
                        {description}
                    </p>
                    <div className="productData-warranty">
                    <IconContext.Provider value={{ size: "1.8em" }}>

                        <div className="productData-warr"> 
                                <div>
                                    <TbTruckDelivery /> 
                                </div>
                            <div className="warr-text">Free Delivery</div>
                        </div>

                        <div className="productData-warr">
                            <TbReplace />  
                            <div className="warr-text">30 Days Replacement</div>
                        </div>

                        <div className="productData-warr">
                            <MdDeliveryDining />        
                            <div className="warr-text">Secure Delivery</div>
                        </div>


                        <div className="productData-warr">
                        <MdSecurity />
                        <div className="warr-text">2 Year Warranty</div>
                        </div>
                        </IconContext.Provider>

                    </div>
                    <div className="productData-info">
                        <p> Available: 
                           <span>
                                {stock > 0 ? "In Stock" : "Not Available"}
                            </span> 
                        </p>
                        <p>
                            ID: <span>{id}</span>
                        </p>
                        <p>
                            Brand: <span>{company}</span>
                        </p>
    
                    </div>
                </div>
            </div>
            <Footer />
            </>
        )
    }
  
}

export default SingleProduct