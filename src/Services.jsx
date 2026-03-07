import React from "react";
import SubCompo from "./SubCompo";
import axios from "axios";

function Services() {

    function Sum(){
    alert("Sum");
    }
    function getProducts(){
        axios.get("https://fakestoreapi.com/products").then((apiResponse)=>{
          console.log(apiResponse.data);
        }).catch((err)=>{
            console.log(err);
        });
    }

    return (
        <div>
          Our Services
          <ol>
            <li>LLM Based Models</li>
            <li>Web Development</li>
            <li>Cyber Security</li>
            </ol>
            <button onClick={getProducts}>get products</button>
            <SubCompo callfuncSum={Sum}/>
        </div>
    );
}

export default Services 
