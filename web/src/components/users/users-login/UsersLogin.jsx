import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import usersService from '../../../services/users';


function UsersLogin() {
  const location = useLocation();
  const { register, handleSubmit, setError, formState: {errors, isValid} } = useForm({mode: 'onBlur', defaultValues: { name: location?.state?.name || "", email: location?.state?.email || "" }});
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(undefined);
  const onLoginSubmit = async (user) => {
    try {
      setServerError();
      user = await usersService.login(user);
      navigate('/')
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors) {
        Object.keys(errors)
          .forEach((inputName) => setError(inputName, { message: errors[inputName] }))
      } else {
        setServerError(error.message)
      }
    }
  }

  return (

    <form onSubmit={handleSubmit(onLoginSubmit)} className='flex flex-col justify-center'>

{serverError && <div className="border p-4 text-red-600 m-10">{serverError}</div>}
      
            <div className='w-[70%] mx-auto flex flex-col mb-8'>
              <label htmlFor='name' className='font-bold'>Name</label>
              <input id="name" {...register("name", { 
                required: "Your name is required"
              })} placeholder='John' className={`border-b cursor-pointer outline-none p-2 hover:border-b-2 border-black focus:font-bold focus:text-black focus:border-2 focus:rounded-lg focus:transition-all ${errors.name ? 'border-red-600 border-2 rounded-lg bg-red-300 transition-all' : ''}` }/>
      
            { errors.name && <div className='text-red-600 font-medium transition-all'>{errors.name?.message}</div> }  
            </div>
            
      
            <div className='w-[70%] mx-auto font-bold flex flex-col mb-8'>
              <label htmlFor='email' className='font-bold'>Email</label>
              <input id="email" type='email' {...register("email", { 
                required: "Your email is required",
      
              })} placeholder='user@example.org' className={` placeholder:font-light border-b cursor-pointer outline-none p-2 hover:border-b-2 border-black focus:font-bold focus:text-black focus:border-2 focus:rounded-lg focus:transition-all ${errors.email ? 'border-red-600 border-2 rounded-lg bg-red-300 transition-all' : ''}` }/>
      
      { errors.email && <div className='text-red-600 font-medium'>{errors.email?.message}</div> } 
            </div>
            <div className='w-[70%] mx-auto flex flex-col mb-14'>
              <label htmlFor='password' className='font-bold'>Password</label>
              <input id="password" type="password" {...register("password", { 
                required: "Your password is required"
              })} placeholder='********' className={`border-b cursor-pointer outline-none p-2 hover:border-b-2 border-black focus:font-bold focus:text-black focus:border-2 focus:rounded-lg focus:transition-all ${errors.password ? 'border-red-600 border-2 rounded-lg bg-red-300 transition-all' : ''}` }/>
      
      { errors.password && <div className='text-red-600 font-medium'>{errors.password?.message}</div> }  
            </div>
            <button type='submit' className={`w-[70%] mb-4 px-4 py-3 mx-auto border rounded-lg bg-primary text-white transition-all ${!isValid ? 'opacity-30 pointer-events-none' : ''}`}
            disabled={!isValid}>Login</button>
            <button className='w-[70%] mx-auto underline-offset-2 underline cursor-pointer'><Link to="/users/new">Already have an account? Sign in</Link></button>
    </form>
  )
}

export default UsersLogin