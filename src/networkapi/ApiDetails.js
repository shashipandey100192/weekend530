import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ApiDetails() {
const {id} = useParams();

    const [mydata,mydatafunc]=useState([]);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>{
            console.log(res.data);
            mydatafunc(res.data);
            })
    },[])

  return (
    <div>ApiDetails
        <p>{mydata.id}</p>
        <p>{mydata.userId}</p>
        <p>{mydata.body}</p>
        <p>{mydata.title}</p>

    </div>
  )
}

export default ApiDetails