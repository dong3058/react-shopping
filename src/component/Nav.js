import React, { useState,useEffect,useContext} from 'react'
import {DataContext} from "./Modal.js"
import "./Nav.css"
import Cartbtn from  "./Cartbtn.js"
import { useLocation } from 'react-router-dom'
import {locals} from "./index.js"
const Nav=({vi})=>{
 const data=useLocation()
  console.log("nav:",vi)
  //console.log("navupdate")
  
  //console.log("nav:",data)
  //console.log(data.state)
  const [cartdatas,setcartdatas]=useState([]);
  
  useEffect(()=>{
    
    if(JSON.parse(localStorage.getItem("cartdata"))==null){
      localStorage.setItem("cartdata",JSON.stringify([]))
    }    
    else{
    setcartdatas(JSON.parse(localStorage.getItem("cartdata")))}},
  [])

  return (

    
    <div className="topbar">Products
      <div className="cartsection"><Cartbtn vi={vi}/*cartdata={data.state} setcartdata={setcartdata}*/ /></div>
    </div>


   

  )
}

export default Nav