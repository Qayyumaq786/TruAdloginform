import React, { useState } from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';

function LoginContainer() {
    const [toggle,setToggle]=useState(true);
    const handleSwichPage=()=>{
        setToggle(!toggle);

    }
  return (
    <div style={{display:"flex",width:"100%",height:"100vh",flexWrap:"wrap"}}>
        <div style={{width:"40%",backgroundColor:"red" }}>left side</div>

        <div style={{width:"60%",backgroundColor:"green",height:"100%"}}>
            <button onClick={handleSwichPage}>Switch</button>
            {toggle?<SignIn/>:<SignUp/> }



        </div>
    </div>
  )
}

export default LoginContainer