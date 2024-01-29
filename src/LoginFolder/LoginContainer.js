import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function LoginContainer() {
  const [toggle, setToggle] = useState(true);
  const handleSwichPage = () => {
    setToggle(!toggle);
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        }}
    >
      <div style={{ width: "40%", backgroundColor: "black" }}>
        <div
          style={{
            padding: "2rem",
            paddingTop: "3rem",
          }}
        >
          <img
            src="https://www.truad.co/wp-content/uploads/2023/11/logo_transparent_1-150x150.png"
            alt="this is logo"
            height="50%"
            width="50%"
          />
        </div>
        <p style={{ color: "white" }}>
          TruAD is an intelligent technology company backed by a strong team of
          researchers, Oscar winners and data scientists
        </p>
      </div>
      <div
        style={{
          width: "60%",
          backgroundColor: "#2d3436",
          backgroundImage: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
          display: "flex",
          flexDirection: "column",
          color: "white",
          padding: "30px",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "end" }}
          onClick={handleSwichPage}
        >
          <h1>{toggle ? "Sign Up" : "Sign In"}</h1>
        </div>
        {toggle ? (
          <SignIn handleSwichPage={handleSwichPage} />
        ) : (
          <SignUp handleSwichPage={handleSwichPage} />
        )}
      </div>
    </div>
  );
}

export default LoginContainer;
