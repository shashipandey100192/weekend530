import React, { Fragment } from "react";
import "./style.css";

function Aboutpage()
{
    return <h1 className="second">this project updated on git</h1>
}
export default Aboutpage


export function Contactus()
{
    return <h1>this is html return</h1>
}

export const Myfun = ()=>{

    return(
        <div className="first">
        <h1>this is first element</h1>
        <h2>this is second heading</h2>
        <marquee>moving text</marquee>
        </div>
    )

}


export const First = ()=>{

    return(
        <Fragment>
            <h1>this is first function</h1>
            <ol>
                <li>List</li>
                <li>List</li>
                <li>List</li>
            </ol>
        </Fragment>
    )

}

export const Second = ()=>{
    return(
        <div>
            <h1>this is nested components</h1>
            <First/>
        </div>
    )
}




