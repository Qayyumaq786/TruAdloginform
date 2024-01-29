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
        <div style={{width:"40%",backgroundColor:"black" }}>
          <div style={{
            padding:'2rem',
            paddingTop:'3rem'
          }}>
            <img src="https://www.truad.co/wp-content/uploads/2023/11/logo_transparent_1-150x150.png" alt='this is logo' height='50%' width='50%'/>
          </div>
          <p style={{color:'white'}}>
          TruAD is an intelligent technology company backed by a strong team of researchers, Oscar winners and data scientists
          </p>
        </div>
        <div style={{width:"60%",backgroundColor:"green",height:"100%"}}>
            <button onClick={handleSwichPage}>Switch</button>
            {toggle?<SignIn/>:<SignUp/> }



        </div>
    </div>
  )
}

export default LoginContainer