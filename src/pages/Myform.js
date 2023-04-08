import React from 'react';
import { useForm } from 'react-hook-form';

function Myform() {
    const { register, handleSubmit,watch, formState: { errors }} = useForm();
    const myfunc = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(myfunc)}>
    <div className='container border p-5 bg-light shadow'>
        <div className='row'>
            <div className='col-md-6 mt-4'>
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" {...register("fullname",{ required: true })}/>
                {errors.fullname && <span className='text-danger'>This field is required</span>}
            </div>
            <div className='col-md-6 mt-4'>
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" {...register("email",{ required: true })}/>
                {errors.email && <span className='text-danger'>This field is required</span>}
            </div>
            <div className='col-md-6 mt-4'>
                <label className="form-label">phone no</label>
                <input type="text" className="form-control" {...register("phone",{ required: true })}/>
                {errors.phone && <span className='text-danger'>This field is required</span>}
            </div>
            <div className='col-md-6 mt-4'>
                <label className="form-label">select course</label>
                <select className="form-control" {...register("course",{ required: true })}>
                    <option hidden></option>
                    <option>Javascript</option>
                    <option>css</option>
                    <option>php</option>
                    <option>html</option>
                </select>
                {errors.course && <span className='text-danger'>This field is required</span>}
            </div>
        </div>
        <div className='row'>
            <div className='col-12 text-center mt-5'>
                <button type='submit' className='btn btn-success'>submit</button>
            </div>
        </div>
    </div>
    </form>
  )
}

export default Myform