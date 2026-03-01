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

    return (
        <div>
            <h2>Welcome to react JS web development conducted by Prinston Smart Engineers!
            </h2>
            <img src={reactLogo} width={200} height={200} alt="react-logo" />

            <Section userName={"Vara"} phoneNo={"030-2203-2341"}/>
            <Welcome generateAvg={getAvg}/>
        </div>
    );
}

export default Home;
