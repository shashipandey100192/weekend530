import React from 'react'

function Myform() {
  return (
    <div className='container border p-5 bg-light shadow'>
        <div className='row'>
            <div className='col-md-6 mt-4'>
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" />
                <div className="text-danger">name if required</div>
            </div>
            <div className='col-md-6 mt-4'>
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" />
                <div className="text-danger">email id is required</div>
            </div>
            <div className='col-md-6 mt-4'>
                <label className="form-label">phone no</label>
                <input type="text" className="form-control" />
                <div className="text-danger">required phone no</div>
            </div>
            <div className='col-md-6 mt-4'>
                <label className="form-label">select course</label>
                <select className="form-control">
                    <option>Select you course</option>
                    <option>Javascript</option>
                    <option>css</option>
                    <option>php</option>
                    <option>html</option>
                </select>
                <div className="text-danger">required select</div>
            </div>
        </div>
        <div className='row'>
            <div className='col-12 text-center mt-5'>
                <button type='button' className='btn btn-success'>submit</button>
            </div>
        </div>
    </div>
  )
}

export default Myform