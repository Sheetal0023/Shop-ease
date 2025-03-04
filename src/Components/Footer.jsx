import React from 'react'
import { NavLink } from 'react-router-dom'
import home from './Assets/home.png'
import email from './Assets/email-24.png'
import phone from  './Assets/phone32.png'
import fax from './Assets/fax32.png'

function Footer() {
  return (
    <>
    <footer className='footerBottom'>
        <div className='grid-items'>
            <div>
                <h5>COMPANY NAME</h5>
            </div>
            <div className='list-details'>
                123456 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis nostrum neque eveniet quam provident ea alias. A consequuntur velit voluptatibus alias natus. Molestiae adipisci animi quisquam tempore expedita iure ipsam?
            </div>
        </div>
        <div className='grid-items'>
            <h5>PRODUCTS</h5>
            <div className='list-details'>
                <ul>
                    <li><NavLink to={"/"} >Home</NavLink></li>
                    <li><NavLink to={"/about"} >About</NavLink></li>
                    <li><NavLink to={"/"} >Home</NavLink></li>
                    <li><NavLink to={"/about"} >About</NavLink></li>
                
                </ul>
            </div>
        </div>
        <div className='grid-items'>
            <h5>USEFULL LINKS</h5>
            <div className='list-details'>
                <ul>
                    <li><NavLink to={"/"} >Home</NavLink></li>
                    <li><NavLink to={"/about"} >About</NavLink></li>
                    <li><NavLink to={"/"} >Home</NavLink></li>
                    <li><NavLink to={"/about"} >About</NavLink></li>
                    
                </ul>
            </div>
        </div>
        <div className='grid-items'>
            <h5>CONTACTS</h5>
            <div className='list-details'>
                <div className='flex-items'>
                    <img src={home} alt="" className='contact-img'/>
                    <div>New York</div>
                </div>
                <div className='flex-items'>
                    <img src={email} alt="" className='contact-img'/>
                    <div>Kumarsheetalsharma@gmail.com</div>
                </div>
                <div className='flex-items'>
                    <img src={phone} alt="" className='contact-img'/>
                    <div>+91 9882440023</div>
                </div>
                <div className='flex-items'>
                    <img src={fax} alt="" className='contact-img'/>
                    <div>+91 9882440023</div>
                </div>
            </div>
        </div>
    </footer>
    <div className="bottom">
    © 2025 Copyright:Shopme.com
   </div>
   </>
  )
}

export default Footer