import React from "react";
import './App.css';

function Welcome({generateAvg})
{

   return (
    <div className="WelcomeSection">
    <h4 className="Welcometxt"> This is Welcome Component</h4>
    <button onClick={generateAvg}>generate btn</button>
    </div>
   )
}

export default Welcome