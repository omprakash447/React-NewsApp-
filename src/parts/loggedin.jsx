import React, { useState } from 'react';

function Loggedin() {
    const [val,setval]=useState("");
    let loggeddata=false;
    if(loggeddata){
        setval(()=>{
            return(
                <h1>Logged in</h1>
            )
        })
    }
    else{
        setval(()=>{
            <h1>Not logged in</h1>
        })
    }
    return (
        <div>
            <p>{val}</p>
        </div>
    )
}

export default Loggedin;
