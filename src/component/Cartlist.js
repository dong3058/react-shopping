import React,{ useContext,useState,useEffect } from "react"
import { useLocation,useNavigate} from "react-router-dom";
import {locals} from "./index.js"
import  "./Cartlist.css"
function Cartlist({vi,setvi}) {
  
  console.log("cartlist vi:",vi)
  const data=useLocation()
  const navigation=useNavigate();
  console.log("cartlistdata:",data.state)
  //console.log("Cartlistupdate")
  //const {cartdata,setcartdata}=useContext(locals)
  
  //const location=useLocation();
  
  //const cartdatas={...location.state};
  //console.log(cartdatas.cartdata)
  const [num,setnum]=useState(0)  
  
  let datas2=localStorage.getItem("cartdata")
  
  datas2=JSON.parse(datas2)
  
  useEffect(()=>{

    if(JSON.parse(localStorage.getItem("cartdata"))===null){
  
    }
    else{
      let datas=JSON.parse(localStorage.getItem("cartdata"))
      
    
      datas.map(el=>{
          
          let listing=document.querySelector(".listingitem")
          let d=document.createElement("div");
          let i=document.createElement("img");
          let p=document.createElement("p");
          let p2=document.createElement("p");
          let plus=document.createElement("button");
          let minus=document.createElement("button");
          let s=document.createElement("div");
          let deletes=document.createElement("button");
          d.className="items"
          i.className="item-img"
          p.className="title"
          p2.className="price"
          s.textContent=0;
          plus.textContent="+"
          minus.textContent="-"
          deletes.textContent="결제하기";
          plus.addEventListener("click",()=>{
  
  
            s.textContent=Number(s.textContent)+1
  
          })
          minus.addEventListener("click",()=>{
  
            if(Number(s.textContent)===0){}
  
            else{
  
              s.textContent=Number(s.textContent)-1
            }
  
  
          })
          deletes.addEventListener("click",()=>{
            let save=datas2.filter(ele=>(
              
              ele[0]!=el[0]
              
              
            ))
            
            setvi(String(Number(vi)-1))
            localStorage.setItem("cartdata",JSON.stringify(save))
            
            datas2=localStorage.getItem("cartdata")
            datas2=JSON.parse(datas2)
            d.remove()
  
  
          })
  
  
          i.src=el[2]
          p.textContent=el[0].substring(0,10)
          p2.textContent=el[1]
  
          //d.appendChild(i,p,plus,minus)
          d.append(i)
          d.append(p)
          d.append(p2)
          d.append(s)
          d.append(plus)
          d.append(minus)
          d.append(deletes)
          
         
          listing.append(d)
          
          return el
      })}
  
   },[])








  
 /*useEffect(()=>{

  if(cartdatas.cartdata.length===undefined){

  }
  else{
     
  cartdatas.cartdata.map(el=>{
        console.log("el:",el)
        let listing=document.querySelector(".listingitem")
        let d=document.createElement("div");
        let i=document.createElement("img");
        let p=document.createElement("p");
        let p2=document.createElement("p");
        let plus=document.createElement("button");
        let minus=document.createElement("button");
        let s=document.createElement("div");
        let deletes=document.createElement("button");
        d.className="items"
        i.className="item-img"
        p.className="title"
        p2.className="price"
        s.textContent=0;
        plus.textContent="+"
        minus.textContent="-"
        deletes.textContent="결제하기";
        plus.addEventListener("click",()=>{


          s.textContent=Number(s.textContent)+1

        })
        minus.addEventListener("click",()=>{

          if(Number(s.textContent)===0){}

          else{

            s.textContent=Number(s.textContent)-1
          }


        })
        deletes.addEventListener("click",()=>{

          d.remove()


        })


        i.src=el[2]
        p.textContent=el[0].substring(0,10)
        p2.textContent=el[1]

        //d.appendChild(i,p,plus,minus)
        d.append(i)
        d.append(p)
        d.append(p2)
        d.append(s)
        d.append(plus)
        d.append(minus)
        d.append(deletes)
        
        console.log("d:",d)
        listing.append(d)
        console.log("list:",listing)
        return el
    })}

 },[])*/

 
  


  return (
    <div className="listingitem">



      


    </div>
    
  )

}

export default Cartlist