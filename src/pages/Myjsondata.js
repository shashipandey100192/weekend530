import React from 'react'
import { Link } from 'react-router-dom';
import { datalist } from './Mydata';
function Myjsondata() {


  return (
    <div className='container'>
        <div className='row'>
            {/* <div className='col-md-4'>
                <div className='card shadow p-3'>
                    <p className='h3'>id</p>
                    <p>name</p>
                </div>
            </div> */}
            {datalist.map((p)=>{
                return(
                    <div className='col-md-4 mt-3'>
                        <div className='card shadow p-3'>
                            <p className='h3'>{p.id}</p>
                            <p>{p.name}</p>
                            <p>{p.email}</p>
                            <p>{p.course}</p>
                            <p>{p.phone}</p>
                            <img src={p.photo} width="100" />
                            <Link className='btn btn-info btn-sm mt-2' style={{width:'100px'}} to={`${p.id}`}>show details</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Myjsondata