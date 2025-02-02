import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import userService from '../../../services/users';


function UsersLogin() {
  const location = useLocation();
  const { register, handleSubmit, isValid, setError, formState: {errors} } = useForm({mode: 'onBlur', defaultValues: { username: location?.state?.student?.username }});
  const navigate = useNavigate();

  const onLoginSubmit = async (user) => {

  }

  return (

    <form onSubmit={handleSubmit(onLoginSubmit)} className='flex flex-col justify-center p-8'>
      
            <div className='w-sm mx-auto flex flex-col mb-8'>
              <label htmlFor='name' className='font-bold'>Name</label>
              <input id="name" {...register("name", { 
                required: "Your name is required"
              })} placeholder='John' className={`border-b cursor-pointer outline-none p-2 hover:border-b-2 border-black focus:font-bold focus:text-black focus:border-2 focus:rounded-lg focus:transition-all ${errors.name ? 'border-red-600 border-2 rounded-lg bg-red-300 transition-all' : ''}` }/>
      
            { errors.name && <div className='text-red-600 mt-4 font-medium transition-all'>{errors.name?.message}</div> }  
            </div>
            
      
            <div className='w-sm mx-auto font-bold flex flex-col mb-8'>
              <label htmlFor='email' className='font-bold'>Email</label>
              <input id="email" type='email' {...register("email", { 
                required: "Email is required",
      
              })} placeholder='user@example.org' className={` placeholder:font-light border-b cursor-pointer outline-none p-2 hover:border-b-2 border-black focus:font-bold focus:text-black focus:border-2 focus:rounded-lg focus:transition-all ${errors.email ? 'border-red-600 border-2 rounded-lg bg-red-300 transition-all' : ''}` }/>
      
      { errors.email && <div className='text-red-600 font-medium'>{errors.email?.message}</div> } 
            </div>
            <div className='w-sm mx-auto flex flex-col mb-14'>
              <label htmlFor='password' className='font-bold'>Password</label>
              <input id="password" type="password" {...register("password", { 
                required: "A password is required"
              })} placeholder='********' className={`border-b cursor-pointer outline-none p-2 hover:border-b-2 border-black focus:font-bold focus:text-black focus:border-2 focus:rounded-lg focus:transition-all ${errors.password ? 'border-red-600 border-2 rounded-lg bg-red-300 transition-all' : ''}` }/>
      
      { errors.password && <div className='text-red-600 font-medium'>{errors.password?.message}</div> }  
            </div>
            <button type='submit' className={`w-sm mb-4 px-4 py-3 mx-auto border rounded-lg bg-primary text-white transition-all ${!isValid ? 'opacity-30 pointer-events-none' : ''}`}
            disabled={!isValid}>Create an account</button>
            <button className='underline-offset-2 underline cursor-pointer'><Link to="/login">Already have an account? Sign in</Link></button>
    </form>
  )
}

export default UsersLogin