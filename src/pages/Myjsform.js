import React, { useState } from 'react';


function Myjsform() {

const [a,b]=useState({
fullname:'',
email:'',
phone:'',
course:''
});

const inputdata= (p)=>{
    console.log(p.target.value);
    const {name,value} = p.target;
    b((xyz)=>{
        return{
            ...xyz,
            [name]:value
             }
        
    })
    
}

document.cookie = "favorite_food=tripe; SameSite=None; Secure";
const myfinaldata = ()=>{
    console.log(a);
    localStorage.setItem("mydata",JSON.stringify(a));
    localStorage.setItem("mynew","kumar");
    sessionStorage.setItem("mydata",JSON.stringify(a));
    sessionStorage.setItem("mynew","kumar");
    
}


  return (
    <form>
    <div className='container border p-5 bg-light shadow'>
        <div className='row'>
            <div className='col-12 text-center'>
                <h1>javascript core validation</h1>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6 mt-4'>
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" value={a.fullname} name='fullname' onInput={inputdata}/>
              
            </div>
            <div className='col-md-6 mt-4'>
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" value={a.email} name="email" onInput={inputdata}/>
              
            </div>
            <div className='col-md-6 mt-4'>
                <label className="form-label">phone no</label>
                <input type="text" className="form-control" value={a.phone} name='phone' onInput={inputdata}/>
             
            </div>
            <div className='col-md-6 mt-4'>
                <label className="form-label">select course</label>
                <select className="form-control" name='course' value={a.course} onInput={inputdata}>
                    <option hidden></option>
                    <option>Javascript</option>
                    <option>css</option>
                    <option>php</option>
                    <option>html</option>
                </select>
              
            </div>
        </div>
        <div className='row'>
            <div className='col-12 text-center mt-5'>
                <button type='button' className='btn btn-success' onClick={myfinaldata}>submit</button>
            </div>
        </div>
    </div>
    </form>
  )
}

export default Myjsform