import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import usersService from '../../../services/users';


function UsersForm() {
  const { register, setError, formState: { errors, isValid }, handleSubmit } = useForm({mode: 'onBlur'});
  const [serverError, setServerError] = useState(undefined);
  const navigate = useNavigate();

  const onUserSubmit = async (user) => {
    try { 
      setServerError();
      console.debug('Registering...')
      const newUser = await usersService.create(user);
      navigate('/login', { state : { name: newUser.name, email: newUser.email } });
    } catch(error) {
        const errors = error.response?.data.errors;
        if (errors) {
          console.error(error.message, errors);
          Object.keys(errors)
            .forEach((inputName) => setError(inputName, { message: errors[inputName]}))
        } else {
          console.log(error);
          setServerError(error.message)
        }
    }
    
  }

  return (
    <form onSubmit={handleSubmit(onUserSubmit)} className='grid justify-items-center'>

      {serverError && <div className="border p-4 text-red-600 m-10">{serverError}</div>}

      <div className='flex flex-col mb-8 w-[70%]'>
        <label htmlFor='name' className='font-bold'>Name</label>
        <input id="name" {...register("name", { 
          required: "Your name is required",
          minLength: {
            value: 3,
            message: 'Your name needs at least 3 chars'
          },
          maxLength: {
            value: 20,
            message: 'Your name needs maximum 20 chars'
          }
        })}placeholder='John' className={`border-b cursor-pointer outline-none p-2 hover:border-b-2 border-black focus:font-bold focus:text-black focus:border-2 focus:rounded-lg focus:transition-all ${errors.name ? 'border-red-600 border-2 rounded-lg bg-red-300 transition-all' : ''}` }/>

      { errors.name && <div className='text-red-600 font-medium transition-all'>{errors.name?.message}</div> }  
      </div>
      
      <div className='font-bold flex flex-col mb-8 w-[70%]'>
        <label htmlFor='email' className='font-bold'>Email</label>
        <input id="email" type='email' {...register("email", { 
          pattern: { 
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ,
            message: 'User email must be valid'  
          },
          required: "Your email is required",

        })} placeholder='user@example.org' className={` placeholder:font-light border-b cursor-pointer outline-none p-2 hover:border-b-2 border-black focus:font-bold focus:text-black focus:border-2 focus:rounded-lg focus:transition-all ${errors.email ? 'border-red-600 border-2 rounded-lg bg-red-300 transition-all' : ''}` }/>

{ errors.email && <div className='text-red-600 font-medium'>{errors.email?.message}</div> } 
      </div>

      <div className='flex flex-col mb-14 w-[70%]'>
        <label htmlFor='password' className='font-bold'>Password</label>
        <input id="password" type="password" {...register("password", { 
          minLength: {
            value: 8,
            message: 'User password needs at least 8 chars'
          },
          required: "A password is required"
        })} placeholder='********' className={`border-b cursor-pointer outline-none p-2 hover:border-b-2 border-black focus:font-bold focus:text-black focus:border-2 focus:rounded-lg focus:transition-all ${errors.password ? 'border-red-600 border-2 rounded-lg bg-red-300 transition-all' : ''}` }/>

{ errors.password && <div className='text-red-600 font-medium'>{errors.password?.message}</div> }  
      </div>

      <button type='submit' className={`w-[70%] mb-4 px-4 py-3 mx-auto border rounded-lg bg-primary text-white transition-all ${!isValid ? 'opacity-30 pointer-events-none' : ''}`}
      disabled={!isValid}>Create an account</button>
      
      <button className='w-[70%] mx-auto underline-offset-2 underline cursor-pointer'><Link to="/login">Already have an account? Sign in</Link></button>
    </form>
  )
}

export default UsersForm