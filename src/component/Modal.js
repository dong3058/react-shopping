import React from 'react'
import"./Modal.css"
import { useState,createContext,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
const Modal=({modal,setdata,data,setmodal,setcartdata,cartdata})=> {


  
  
  
 
  
  const navigation=useNavigate();

  console.log("modalupdate")
    const settingdatas=()=>{
       
        setdata([])
        setmodal(false)
    }
    const addcart=(datas)=>{
      let getdata=localStorage.getItem("cartdata")
      getdata=JSON.parse(getdata)


      if (cartdata.length===0){
        setcartdata([datas])
        if(getdata===null){
          localStorage.setItem("cartdata",JSON.stringify([datas]))
          //setitemnums(1)
          console.log("fir")
          navigation("/",{state:"1"})
        }
  
  
        else{
          let checksame=getdata.filter(el=>el===datas)
          if(checksame.length!=0){
  
          }
          else{
          localStorage.setItem("cartdata",JSON.stringify([...getdata,datas]))
          //setitemnums([...getdata,datas].length)
          navigation("/",{state:String([...getdata,datas].length)})
          }
        }




        
        
      }
      else{
        const x=cartdata.filter(el=>el[0]===datas[0])
      
        if(x.length===0){
          setcartdata((prev)=>([...prev,datas]))

          if(getdata===null){
            localStorage.setItem("cartdata",JSON.stringify([datas]))
            navigation("/",{state:"1"})
          }
    
    
          else{
            let checksame=getdata.filter(el=>el[0]===datas[0])
            if(checksame.length!=0){
    
            }
            else{
            localStorage.setItem("cartdata",JSON.stringify([...getdata,datas]))
            //setitemnums([...getdata,datas].length)
            navigation("/",{state:String([...getdata,datas].length)})
            }
          }
         
        }








      }

      

      


      
   
      

    }

  if(modal){  


    return (
        <div className="modal">
            <img className="modalimg" src={data[2]}/>
            <p>{data[0]}</p>
            <p>{data[1]}</p>
            <button onClick={settingdatas} className="cancle">x</button>
            <button onClick={()=>addcart(data)} >추가하기</button>
  



        </div>
    )

  }
  else{


    return(
        <div>


        </div>
    )
  }
}

export default Modal