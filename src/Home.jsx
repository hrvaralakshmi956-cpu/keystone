import React,{useEffect} from "react";
import Section from "./Section.jsx";
import Welcome from "./Welcome.jsx";
import reactLogo from "./images/logo192.png";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigateTo=useNavigate();
    useEffect(()=>{
    console.log("inside useEffect");
    console.log("running inside the useffect");
    },[])


    function getAvg()
    {
        alert("avg");
    }
    const sampleProducts=[
        {name:"Panda",
        price:200,
        image:"https://m.media-amazon.com/images/I/61cjyX88PyL._SX679_.jpg"},


        {name:"Lipstick",
        price:50,
        image:"https://cdn.fcglcdn.com/brainbees/images/products/583x720/21253401a.webp"
    },
    {name:"Bangles",
        price:100,
        image:"https://i.etsystatic.com/24023014/r/il/425ffc/2500842045/il_fullxfull.2500842045_4rub.jpg"},


        {name:"Lipstick",
        price:50,
        image:"https://cdn.fcglcdn.com/brainbees/images/products/583x720/21253401a.webp"
    },

    {name:"Bangles",
        price:100,
        image:"https://i.etsystatic.com/24023014/r/il/425ffc/2500842045/il_fullxfull.2500842045_4rub.jpg"},


        {name:"Lipstick",
        price:50,
        image:"https://cdn.fcglcdn.com/brainbees/images/products/583x720/21253401a.webp"
    },



    ];
    
    return (
        <div>
            <h2>Welcome to react JS web development conducted by Prinston Smart Engineers!
            </h2>
            <img src={reactLogo} width={200} height={200} alt="react-logo" />

            <Section userName={"Vara"} phoneNo={"030-2203-2341"}/>
            <Welcome generateAvg={getAvg}/>
            {/* Rendering list in react js */}
            

            <div className="productContainer">
            {
              sampleProducts.map((ele)=>{
                return <div className="productCard" onClick={()=>{
                    navigateTo("/product-details",{state:ele})
                }}>
                    <p>Product Name is : {ele.name}</p>
                    <p> price {ele.price}</p>
                    <img src={ele.image} alt="" width={100} height={100} />
                    </div>
              }) 
            }
            </div>
        </div>
    );
}

export default Home;
