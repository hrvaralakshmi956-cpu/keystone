import React from "react";
import { useState , useEffect } from "react";
import Signup from "./Signup.jsx";

function Login() {

    const [name,setname]=useState("Vara");
    const [password,setpassword]=useState("1");
    const [isSignUp,setIsSignUp]=useState(false);
    
    

    useEffect(()=>{
    console.log("Will be printed when password is updated")
    alert("pwd updated");
},[password])

    console.log("value in variable name",name);
    console.log("value in  variable password",password);


    function handleNameChange(a){
    setname(a.target.value);    
    }
    function handlePasswordChange(pwd){
    setpassword(pwd.target.value);
    }

    function handleSignup()
    {
       setIsSignUp(true)
    }

    return (
        <div>

            {
             isSignUp ? <Signup/>: 
             <div>
                <h1>Login</h1>
            <p>{name}</p>
            <p>{password}</p>
            <input type="username" name="" id="" onChange={handleNameChange} />
            <input type="password" name="" id="" onChange={handlePasswordChange} />
            <br />
            <button onClick={handleSignup}>Sign Up Now </button>
            </div>
            }
        </div>
    );
}

export default Login
