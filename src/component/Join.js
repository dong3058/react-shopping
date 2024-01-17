import React from 'react'
import {auth}  from "../firebaseconfing";

import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { useState } from "react";

function Join() {
  console.log("join")

  const [userData, setUserData] = useState(null);
  const provider=new GoogleAuthProvider();
  function signin(){
   signInWithRedirect(auth,provider)
   .then((data)=>{
    setUserData(data.user); // user data 설정
    console.log(data); // console에 UserCredentialImpl 출력

   })
  }

  signin()

 

  return (
    <div>
    {/*<h3>구글 로그인 테스트</h3>
    <button onClick={signin}>로그인</button>
    <h4>로그인하면 아래쪽에 이름이 나타납니다.</h4>
    <div>
      {userData
        ? "당신의 이름은 : " + userData.displayName
        : "로그인 버튼을 눌러주세요 :)"}
      </div>*/}
  </div>
  )
}

export default Join