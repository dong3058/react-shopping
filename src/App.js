import './App.css';
import {useState,useContext,useEffect} from "react"
import Itemlists from "./component/itemlist.js"
import { Outlet,Route,Routes } from 'react-router-dom';
import Modal from  "./component/Modal.js"
import MainPage from "./component/index.js"
import Nav from "./component/Nav.js"
import Cartlist from "./component/Cartlist.js"
import {locals} from "./component/index.js"
import Join from './component/Join.js';
import { auth } from './firebaseconfing.js';
function App() {    

  //const {cartdata,setcartdata}=useContext(locals)
 
  const [vi,setvi]=useState("0")
 
  console.log("app:",vi)

  const Layout=()=>{
    return(
      <div>
        <Nav vi={vi}/>

        <Outlet/>

      </div>
    )
  }
        
  /*useEffect(() => {
    // 페이지 로드 시 Firebase 인증 리다이렉션 이벤트 리스너 추가
    auth.getRedirectResult().then((result) => {
      if (result.user) {
        // 사용자가 로그인 성공한 경우
        console.log('로그인 성공', result.user);
      }
    }).catch((error) => {
      // 오류 처리
      console.error('로그인 실패', error);
    });
  }, []);*/





  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<Layout  />}>
          <Route index element={<MainPage 
          /*cartdata={cartdata} setcartdata={setcartdata}
          category={category}
          setcategory={setcategory} modal={modal} setmodal={setmodal}
          data={data} setdata={setdata} cartdata={cartdata}
          setcartdata={setcartdata}*//>}></Route>
          <Route path="cartlist" element={<Cartlist vi={vi} setvi={setvi} />}></Route>
          <Route path="join" element={<Join/>}></Route>


        </Route>
      </Routes>
       {/*<Nav cartdata={cartdata}/>


      <Modal modal={modal} setdata={setdata} data={data} setmodal={setmodal} 
      setcartdata={setcartdata} cartdata={cartdata}/>
     <div className="blur" style={backgrounds(modal)}></div>

      
      
      <div className="select-bar">
      <div className="item" onClick={all}>모두</div>
      
        <div className="item" onClick={()=>eletronics()}>전자기기</div>
        <div className="item" onClick={()=>jesus()}>보석</div>
        <div className="item" onClick={()=>man()}>남성 의류</div>
        <div className="item" onClick={()=>woman()}>여성 의류</div>
  </div>
     
          
      <Itemlists category={category} modal={modal} setmodal={setmodal} setdata={setdata}/>*/}
       

      
      
      
    </div>
  );
}

export default App;
