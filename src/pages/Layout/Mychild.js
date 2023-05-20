import React from 'react'
import "./main.css";

function Mychild(props) {
var a = localStorage.getItem("mynew");

const mylcear =()=>{
  localStorage.clear();
  window.location.reload();
}


  return (
    <div className='box'>Mychild
        {props.propname}
        {props.ageis}
        <h5>get data form localstorage: {a}</h5>
        <button type='button' onClick={mylcear}>clear storge</button>
    </div>
  )
}

export default Mychild