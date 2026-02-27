import React from 'react'

function SubCompo({callfuncSum}) {
    return (
        <div>
            <h2>This is SubComponent</h2>
           <button onClick={callfuncSum} >call func sub </button> 
        </div>
    )
}

export default SubCompo
