import React from 'react';
import { useState } from 'react';

function Login() {

    const [name,setname]=useState("Varalakshmi");
    const [password,setpassword]=useState("vara@123");

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
