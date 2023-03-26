import React, { Fragment, useEffect, useState } from "react";

function Myhooks()
{
    const [sv,sf]= useState("xyz")
const myfun = ()=>{

    sf("jsdkfj skdfj klsd fjkshjfkhsdjkfh");
}

const [a,b]=useState("myinput");
    const mysub = (p)=>{
       console.log(p.target.value);
       b(p.target.value);
    }

/* use of useEffect hooks*/
    useEffect(()=>{
        alert("hi");
    })



    return(
        <Fragment>
            <h1>this is usestate Hooks {sv} {a}</h1>
            <input type="button" value="updatestate" onClick={myfun}/>
            <input type="text" value={a} onInput={mysub} />

        </Fragment>
    )
}

export default Myhooks