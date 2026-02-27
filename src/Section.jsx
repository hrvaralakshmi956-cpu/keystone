import React from 'react'

function Section({userName,phoneNo}) {
    console.log("user",userName);

    return (
        <div>
            {/* Conditional Rendering */}
            {
                userName==="Vara" ? <h1>Conditional Rendering </h1>:<i>Invalid prop passed</i>
            }
            This is Section Component used to understand Probs
            <p>UserName Transfered from Home Component is {userName}</p>
            <h3>PhoneNo is {phoneNo}</h3>
        </div>
    )
}

export default Section
