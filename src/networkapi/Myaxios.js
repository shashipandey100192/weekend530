import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Myaxios() {

    
// axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
// console.log(res.data);
// })



// const [mydata,mydatafunc]=useState([]);
// const getAxios =()=>{
//     axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
//         console.log(res.data);
//         mydatafunc(res.data);
//         })
//     }

const [mydata,mydatafunc]=useState([]);
useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
        console.log(res.data);
        mydatafunc(res.data);
        })
},[])



  return (

    <div>

        {/* <input type='button' value="get data from api" onClick={getAxios} /> */}
        <div className='container'>
            <div className='row'>
                

                {mydata.map((a)=>{

                    return(
                        <div className='col-md-4' key={a.id}>
                     <div className="card">
                     <div className="card-body bg-info text-white">
                         <h5 className="card-title bg-success p-2">{a.title}</h5>
                         <p className="card-text">{a.body}</p>
                         <Link to={`${a.id}`} className="btn btn-primary">{a.id}</Link>
                     </div>
                     </div>
                     </div>
                    )

                })}

               

                
            </div>
        </div>

    </div>
  ) 
}


export default Myaxios