import React, { useEffect } from 'react'
import "./itemlist.css"
import {useState} from "react"
const Itemlists=({category,modal,setmodal,setdata})=>{
    console.log("itemlistupdate")
  useEffect(()=>{
    
    const f=async function(){
      
      
  
    if (category==="all"){
      console.log("check")
      let items=await fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      console.log(items)
      let listarea=document.querySelector(".listing-area")
      while(listarea.hasChildNodes()){
        listarea.removeChild(listarea.firstChild)
      }
      for(let x of items){
        
        let divs=document.createElement("div");
        let imgs=document.createElement("img");
        let button=document.createElement("button");
        button.textContent="장바구니에 담기"
        button.className="btn"
        button.addEventListener("click",()=>{
          setmodal(!modal)
          setdata([x.title,x.price,x.image])
  
        })
        imgs.src=`${x.image}`
        imgs.alt="1"
       
        divs.className="showitem"
        
        divs.append(imgs)
        divs.append(button)
        let p=document.createElement("p");
        p.textContent=`가격:${x.price}\n 제품명:${x.title.substring(0,7)}`
        divs.append(p)
        
  
        //divs.textContent=`${x.price},${x.title}`
        listarea.append(divs)
      }

    }
    else{
      
    let items=await fetch('https://fakestoreapi.com/products/category/'+`${category}`)
    .then(res=>res.json())
    
    let listarea=document.querySelector(".listing-area")
    while(listarea.hasChildNodes()){
      listarea.removeChild(listarea.firstChild)
    }
    for(let x of items){
      
      let divs=document.createElement("div");
      let imgs=document.createElement("img");
      let button=document.createElement("button");
      button.textContent="장바구니에 담기"
      button.className="btn"
      button.addEventListener("click",()=>{
        setmodal(!modal)
        setdata([x.title,x.price,x.image])

      })
      imgs.src=`${x.image}`
      imgs.alt="1"
     
      divs.className="showitem"
      
      divs.append(imgs)
      divs.append(button)
      let p=document.createElement("p");
      p.textContent=`가격:${x.price}\n 제품명:${x.title.substring(0,7)}`
      divs.append(p)
      

      //divs.textContent=`${x.price},${x.title}`
      listarea.append(divs)
    }
    
  
  
  }}
  f()
},[category]);
 


  

  return (
    <div className="main">
    <div className="listing-area">
      
    </div>
    </div>

  )
}

export default Itemlists



      /*let items= await fetch(`https://fakestoreapi.com/products/category`)
      .then(res=>res.json())*/
      //let listarea=document.querySelector(".listing-area")
      /*while(listarea.hasChildNodes()){
        listarea.removeChild(listarea.firstChild)
      }
      for(let x of items){
        
        let divs=document.createElement("div");
        let imgs=document.createElement("img");
        let name=["price","title"]
        imgs.src=`${x.image}`
        imgs.alt="1"
       
        divs.className="showitem"
        divs.append(imgs)
        
        let p=document.createElement("p");
        p.textContent=`가격:${x.price}\n 제품명:${x.title.substring(0,7)}`
        divs.append(p)
        
  
        //divs.textContent=`${x.price},${x.title}`
        listarea.append(divs)
      }*/