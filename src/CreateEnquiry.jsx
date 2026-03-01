import React from "react";
import {usestate} from 'react';


function CreateEnquiry() {

    const [enquiry,setEnquiry]=usestate({userName:"", password:""})
    return (
        <div>
            Create Enquiry
            <form>
                <input type="text" name="" id="" />
                <input type="password" name="" id="" />
                <button type='submit'>Submit btn</button>
            </form>
        </div>
    )
}

export default CreateEnquiry
