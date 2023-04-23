import React from 'react'
import "./main.css";

function Mychild(props) {
  return (
    <div className='box'>Mychild
        {props.propname}
        {props.ageis}
    </div>
  )
}

export default Mychild