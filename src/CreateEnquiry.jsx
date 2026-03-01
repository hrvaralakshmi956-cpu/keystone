import React from "react";
import { useState } from "react";


function CreateEnquiry() {

    const [enquiry,setEnquiry]=useState({userName:"", password:""})

    function handleChange(e){
        const {name,value}=e.target.value;
        setEnquiry((oldval)=>({...oldval,[name]:value}))
     
    }

    return (
        <div>
            Create Enquiry
            <form>
                <input type="text" name="userName" id="" placeholder='userName' onChange={handleChange} />
                <input type="password" name="password" id="" placeholder='password' onChange={handleChange}/>
                <button type='submit'>Submit btn</button>
            </form>
        </div>
    )
}

export default CreateEnquiry
