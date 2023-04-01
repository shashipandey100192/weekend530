import React from 'react'

function Myjsondata() {
const datalist = [
    {
        id:1,
        name:'kumar',
        course:"web design",
        email:"kumar@gmail.com",
        phone:"5451545441",
        photo:'https://cdn-icons-png.flaticon.com/512/219/219986.png'
    },
    {
        id:2,
        name:'kumar',
        course:"web design",
        email:"kumar@gmail.com",
        phone:"5451545441",
        photo:'https://cdn-icons-png.flaticon.com/512/219/219986.png'
    },
    {
        id:3,
        name:'kumar',
        course:"web design",
        email:"kumar@gmail.com",
        phone:"5451545441",
        photo:'https://cdn-icons-png.flaticon.com/512/219/219986.png'
    },
    {
        id:4,
        name:'kumar',
        course:"web design",
        email:"kumar@gmail.com",
        phone:"5451545441",
        photo:'https://cdn-icons-png.flaticon.com/512/219/219986.png'
    },
    {
        id:5,
        name:'kumar',
        course:"web design",
        email:"kumar@gmail.com",
        phone:"5451545441",
        photo:'https://cdn-icons-png.flaticon.com/512/219/219986.png'
    },
    {
        id:6,
        name:'kumar',
        course:"web design",
        email:"kumar@gmail.com",
        phone:"5451545441",
        photo:'https://cdn-icons-png.flaticon.com/512/219/219986.png'
    },
];

console.log(datalist);

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <div className='card shadow p-3'>
                    <p className='h3'>id</p>
                    <p>name</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Myjsondata