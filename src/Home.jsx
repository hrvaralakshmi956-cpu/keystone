import React,{useEffect} from "react";
import Section from "./Section.jsx";
import Welcome from "./Welcome.jsx";
import reactLogo from "./images/logo192.png";

function Home() {
    useEffect(()=>{
    console.log("inside useEffect");
    console.log("running inside the useffect");
    },[])


    function getAvg()
    {
        alert("avg");
    }
    const sampleProducts=[
        {name:"Bangles",
        price:100,
        image:"https://i.etsystatic.com/24023014/r/il/425ffc/2500842045/il_fullxfull.2500842045_4rub.jpg"},
        {name:"bow",price:50,
        img:"https://tse4.mm.bing.net/th/id/OIP.BQyxW4aRGo3if6OgB6ZWcwHaHa?pid=Api&P=0&h=180"},

    ];

    return (
        <div>
            <h2>Welcome to react JS web development conducted by Prinston Smart Engineers!
            </h2>
            <img src={reactLogo} width={200} height={200} alt="react-logo" />

            <Section userName={"Vara"} phoneNo={"030-2203-2341"}/>
            <Welcome generateAvg={getAvg}/>
            {/* Rendering list in react js */}

            {
              sampleProducts.map((ele)=>{
                return <div className="productCard">
                    <p>Product Name is : {ele.name}</p>
                    <p> price :{ele.price}</p>
                    <img src={ele.image} alt="" width={100} height={100} />
                    </div>
              }) 
            }
        </div>
    );
}

export default Home;
