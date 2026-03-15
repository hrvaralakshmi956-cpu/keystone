import React, { useState } from "react";
import SubCompo from "./SubCompo";
import axios from "axios";

function Services() {
    const [productList,setProductList]=useState([]);

    function Sum(){
    alert("Sum");
    }
    function getProducts(){
        axios.get("https://fakestoreapi.com/products").then((apiResponse)=>{
          console.log(apiResponse.data);
          setProductList(apiResponse.data)
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
            <button onClick={getProducts}>Get products</button>
            {
                productList.map((ele)=>{
                   return <div>
                      <p>Title : {ele.title}</p>
                      <p>Category :{ele.category}</p>
                      <div> Description :{ele.description}</div>
                      <img src={ele.image} alt="" width={200} height={200}/>
                      <p>Our Price :{ele.price}</p>
                      <p>rating :{ele.rating.rate}</p>
                      <i>Reviewed by :{ele.rating.count}</i>
                      <button onClick={ async ()=>{
                         axios.post("http://localhost:8000/addToCart",ele).then((res)=>{
                         console.log(res);
                         alert(res.data);   
                         }).catch((err)=>{
                          console.log(err);
                         });
                      }}>Add To Cart</button>
                      </div>
                })
            }
            <SubCompo callfuncSum={Sum}/>
        </div>
    );
}

export default Services 
