import React, { useMemo ,createContext,useEffect} from 'react'

import "./index.css"
import Modal from  "./Modal.js"
import Itemlists from "./itemlist.js"
import {useState} from "react"
import Nav from "./Nav.js"
import { auth } from '../firebaseconfing.js';
import { useNavigate } from 'react-router-dom'





const Mainpage=()=> {
  
  let [category,setcategory]=useState("all");
  const [modal,setmodal]=useState(false)
  const [data,setdata]=useState([])
  const [cartdata,setcartdata]=useState([])
  let keys={"모두":"all","전자기기":"electronics","보석":"jewelery","남성 의류":"men's clothing"
,"여성 의류":"women's clothing"}


  const [num,setnum]=useState(0)  


  const plus=()=>{
    let s=document.querySelector("span")
    s.textContent=Number(s.textContent)+1;
    setnum(num+1)

  }
  const minus=()=>{

    if( num===0){
      return
    }
    else{
      let s=document.querySelector("span")
      s.textContent=Number(s.textContent)-1;
      setnum(num-1)
    }}








    const all=(e)=>{
        setcategory(keys[e.target.textContent])
        let divs=document.querySelectorAll(".item")
        divs=Array.from(divs)
        for(let x of divs){
          x.style.backgroundColor="white"
        }
        e.target.style.backgroundColor="red"
      } 


      const backgrounds=(modal)=>{
        return{
        backgroundColor: modal? "rgba(0,0,0,0.2)": "white",
        zIndex:modal? "30":"0"
        }
      }
      



      /*<locals.Provider value={{cartdata}}>
      <Nav/>
  </locals.Provider>*/ 


  return (
    <div>
    {/*<Nav cartdata={cartdata} setcartdata={setcartdata}/>*/}
    <Modal modal={modal} setdata={setdata} data={data} setmodal={setmodal} 
      setcartdata={setcartdata} cartdata={cartdata}/>   
    <div className="blur" style={backgrounds(modal)}></div>


      
      <div className="select-bar">
      

        <div className="item" style={{backgroundColor:"red"}} onClick={all}>모두</div>
        <div className="item" onClick={all}>전자기기</div>
        <div className="item" onClick={all}>보석</div>
        <div className="item" onClick={all}>남성 의류</div>
        <div className="item" onClick={all}>여성 의류</div>
    </div>
    <Itemlists category={category} modal={modal} setmodal={setmodal} setdata={setdata}/>
  
   



  </div>
  )

}

export default Mainpage