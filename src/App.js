import React, { useEffect } from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import LoginPage from "./Pages/Login";
import SignPage from "./Pages/Sign";
import SingleProduct from "./Components/SingleProduct";
import NewPage from "./Components/newPage";
import PrivateRoute from "./Components/PrivateRoute";


function App() {
    console.log(process.env)
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact/>} />

        <Route path="/about" element={<PrivateRoute Component={About}/>}/>
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/sign" element={<SignPage />} />
        <Route path="/newPage" element={<NewPage />} />
      </Routes>
    </BrowserRouter>
  )
       
}

export default App;