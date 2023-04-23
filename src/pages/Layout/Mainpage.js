import React from 'react';
import Mychild from './Mychild';



function Mainpage() {
    const name ="react js";
    const age = 50;
  return (
    <div>
        <h1>this is Parent Element: {name} age: {age}</h1> 

      <Mychild propname={name}></Mychild>
      <Mychild></Mychild>
      <Mychild></Mychild>
      <Mychild ageis={age}></Mychild>
    </div>
  )
}

export default Mainpage