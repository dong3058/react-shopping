import React, { useEffect, useMemo } from 'react'
import "./Cartbtn.css"
import { useNavigate } from 'react-router-dom'
const Cartbtn=({vi})=> {
console.log("cartbtn vi:",vi)
const navigate=useNavigate();
const handleroute=()=>{
    len=0
    navigate("/cartlist")
    
}
/*let getdatas=localStorage.getItem("cartdata")
    getdatas=JSON.parse(getdatas)*/

//let lens=0;
/*if(cartdata.length==0 ){
    lens=0
}
else{


    lens=cartdata.length
}*/

let len;


/*if(JSON.parse(localStorage.getItem("cartdata"))==null){
    len=Number(cartdata)


}
else if(Number(cartdata)!=JSON.parse(localStorage.getItem("cartdata")).length){

    len=JSON.parse(localStorage.getItem("cartdata")).length

}*/


if(JSON.parse(localStorage.getItem("cartdata"))==null){
    len=0


}
else{

    len=JSON.parse(localStorage.getItem("cartdata")).length
   
    

}




 if (len==0  | vi=="true"){

    

    return(
        
        <div className="cart">
      
      <button className="btns" onClick={()=>handleroute()}
      >cart</button>
            <div className="count"style={{opacity:0}}>
                {len}
        </div>
      
        </div>
        

    )
 }


  return (
    <div className="cart">
        
        <button className="btns" onClick={()=>handleroute()}>cart</button>
        
        <div className="count">
            {len}
        </div>
       


    </div>
  )
}

export default Cartbtn