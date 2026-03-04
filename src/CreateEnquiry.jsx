import React from 'react';
import { useState } from 'react';


function CreateEnquiry() {

    const [enquiry,setEnquiry]=useState({userName:"", password:"",Age:0,FatherName:""})

    function handleChange(e){
        //extraction
        const {name,value}=e.target;
        setEnquiry((oldval)=>({...oldval,[name]:value}));
     
    }
    console.log("enquiry obj",enquiry)
    return (
        <div>
            Create Enquiry
            <form>
                <input type="text" name="userName" id="" placeholder='userName' onChange={handleChange} />
                <input type="password" name="password" id="" placeholder='password' onChange={handleChange}/>
                <input type="number" name="Age" id=""  placeholder='Age' onChange={handleChange}/>
                <input type="text" name="FatherName" id="" placeholder='FatherName' onChange={handleChange} />
                <button type='submit'>Submit btn</button>
            </form>
        </div>
    )
}

export default CreateEnquiry
