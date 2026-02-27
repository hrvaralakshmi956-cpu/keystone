import React from "react";
import { useState , useEffect } from 'react';

function Login() {

    const [name,setname]=useState("Vara");
    const [password,setpassword]=useState("1");

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

    return (
        <div>
            <h1>Login</h1>
            <p>{name}</p>
            <p>{password}</p>
            <input type="username" name="" id="" onChange={handleNameChange} />

            <input type="password" name="" id="" onChange={handlePasswordChange} />
           

        </div>
    );
}

export default Login
