import React, { useEffect, useState } from 'react';
import { datalist } from './Mydata';
import { useParams } from 'react-router-dom';


function Detailspage() {

    let {id}= useParams();
    console.log(id);

const [one,two]=useState({});

useEffect(()=>{
    two(datalist[id-1]);

},[]);

  console.log(one);
  console.log(datalist[id]);
    return(
    <div>
      
     
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                    <img src={one.photo} width="300" />
                    </div>
                    <div className='col-md-6'>
                            <p className='h1'>{one.id}</p>
                            <p className='h2'>{one.name}</p>
                            <p>{one.email}</p>
                            <p>{one.course}</p>
                            <p>{one.phone}</p>


                    </div>
                </div>
            </div>
      
    </div>
  )
}

export default Detailspage