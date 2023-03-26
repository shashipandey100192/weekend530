import React from 'react';
import xyz from "../image20/img5.jpg";

function Myform() {
const a = "this is variable";
const myimg = "https://play-lh.googleusercontent.com/fJwcR6E_LgEvhaU5mUlPGjJkx-SwfZF1PO2lLynHiKaZ8nL28SzRjvtPWXcJTy2yIA";


  return (
    <div>
        <h1>This is my form {a}</h1>
        <h4>this is heading{10+60}</h4>
      <img src="image10/img3.jpg"/>
      <img src={xyz} />
      <img src={myimg} width="500" />
    </div>
  )
}

export default Myform