import React from "react";
import SubCompo from "./SubCompo";

function Services() {

    function Sum(){
    alert("Sum");
    }
    return (
        <div>
          Our Services
          <ol>
            <li>LLM Based Models</li>
            <li>Web Development</li>
            <li>Cyber Security</li>
            </ol>
            <SubCompo callfuncSum={Sum}/>
        </div>
    );
}

export default Services 
