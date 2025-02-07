import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import animalsService from '../../../services/animals';
import { useNavigate, createSearchParams } from 'react-router-dom';

function AnimalForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({mode:onblur});

  const onAnimalSubmit = () => {

  };

  return (
    <form onSubmit={handleSubmit(onAnimalSubmit)} className='my-10 grid gap-8 justify-center'>

      {/*NAME*/}
      <div>
        <label htmlFor="name" className='cursor-pointer'>Name<span className='text-red-500'>*</span>
            <figure>
              <img src='' alt=''/>
            </figure>
            <input type="text" id="name" name="name" className='border cursor-pointer' {...register("name")}/>
        </label>
      </div>

      {/*SEX*/}
      <fieldset>
        <legend>Sex<span className='text-red-500'>*</span></legend>
          <div>
            <label htmlFor="female" className='cursor-pointer'>Female
              <input type="radio" name="sex" id="female" value="female" {...register("sex")} className='cursor-pointer'/>
            </label>
            
            <label htmlFor="male" className='cursor-pointer'>Male
              <input type="radio" name="sex" id="male" value="male" {...register("sex")} className='cursor-pointer'/>
            </label>  
          </div>
      </fieldset>

      {/*AGE*/}
      <div>
        <label htmlFor="age" className='cursor-pointer'>Age<span className='text-red-500'>*</span>
          <figure>
            <img src='' alt='birthday cake icon'/>
          </figure>
          <input type="number" id="age" name="age" className='border cursor-pointer' {...register("age")}/>
        </label>
      </div>

      {/*BREED*/}
      <div>
        <label htmlFor="breed" className='cursor-pointer'>Breed<span className='text-red-500'>*</span>
          <figure>
            <img src='' alt='dog icon'/>
          </figure>
          <input type="text" id="breed" name="breed" {...register("breed")} className='border cursor-pointer'/>
        </label>    
      </div>

      {/*License*/}
      <fieldset>
        <legend>Need a license?<span className='text-red-500'>*</span></legend>
          <div>
            <label htmlFor="yes-license" className='cursor-pointer'>Yes
              <input type="radio" name="license" id="yes-license" value="yes" {...register("license")} className='cursor-pointer'/>
            </label>

            <label htmlFor="no-license" className='cursor-pointer'>No
              <input type="radio" name="license" id="no-license" value="no" {...register("license")} className='cursor-pointer'/>
            </label>
          </div>
      </fieldset>

      {/*SIZE*/}
      <fieldset>
        <legend>Size<span className='text-red-500'>*</span></legend>
          <div className='flex items-center gap-2'>
            <label htmlFor="size" className='cursor-pointer'>Small
              <input type="radio" name="size" id="small" value="small" {...register("size")} className='cursor-pointer'/>
            </label>
            
            <label htmlFor="size" className='cursor-pointer'>Medium
              <input type="radio" name="size" id="medium" value="medium" {...register("size")} className='cursor-pointer'/>
            </label>  

            <label htmlFor="size" className='cursor-pointer'>Large
              <input type="radio" name="size" id="large" value="large" {...register("size")} className='cursor-pointer'/>
            </label>  

            <label htmlFor="size" className='cursor-pointer'>Giant
              <input type="radio" name="size" id="giant" value="giant" {...register("size")} className='cursor-pointer'/>
            </label>  
          </div>
      </fieldset>

      {/*WEIGHT*/}
      <div>
        <label htmlFor="weight" className='cursor-pointer'>Weight<span className='text-red-500'>*</span>
          <figure>
            <img src='' alt='dog icon'/>
          </figure>
          <input type="number" id="weight" name="weight" {...register("weight")} className='border cursor-pointer'/>
        </label>    
      </div>

      {/*HOME*/}
      <fieldset>
        <legend>Ideal Home<span className='text-red-500'>*</span></legend>
          <div>
            <label htmlFor="any-location" className='cursor-pointer'>Any Location
              <input type="radio" name="idealHome" id="any-location" value="any location" {...register("idealHome")} className='cursor-pointer'/>
            </label>
            
            <label htmlFor="away-from-inner-city" className='cursor-pointer'>Away From Inner City
              <input type="radio" name="idealHome" id="away-from-inner-city" value="away from inner city" {...register("idealHome")} className='cursor-pointer'/>
            </label>  
          </div>
      </fieldset>

      {/*LIVING WITH CHILDREN*/}
      <fieldset>
        <legend>Living with children<span className='text-red-500'>*</span></legend>
          <div>
            <label htmlFor="yes-children" className='cursor-pointer'>Yes
              <input type="radio" name="livingWithChildren" id="yes-children" value="yes" {...register("livingWithChildren")} className='cursor-pointer'/>
            </label>
            
            <label htmlFor="no-children" className='cursor-pointer'>No
              <input type="radio" name="livingWithChildren" id="no-children" value="no" {...register("livingWithChildren")} className='cursor-pointer'/>
            </label>  
          </div>
      </fieldset>

      {/*LIVING WITH DOGS*/}
      <fieldset>
        <legend>Living with dogs<span className='text-red-500'>*</span></legend>
          <div>
            <label htmlFor="yes-dogs" className='cursor-pointer'>Yes
              <input type="radio" name="livingWithDogs" id="yes-dogs" value="yes" {...register("livingWithDogs")} className='cursor-pointer'/>
            </label>
            
            <label htmlFor="no-dogs" className='cursor-pointer'>No
              <input type="radio" name="livingWithDogs" id="no-dogs" value="no" {...register("livingWithDogs")} className='cursor-pointer'/>
            </label>  
          </div>
      </fieldset>

      {/*LIVING WITH CATS*/}
      <fieldset>
        <legend>Living with cats<span className='text-red-500'>*</span></legend>
          <div>
            <label htmlFor="yes-cats" className='cursor-pointer'>Yes
              <input type="radio" name="livingWithCats" id="yes-cats" value="yes" {...register("livingWithCats")} className='cursor-pointer'/>
            </label>
            
            <label htmlFor="no-cats" className='cursor-pointer'>No
              <input type="radio" name="livingWithCats" id="no-cats" value="no" {...register("livingWithCats")} className='cursor-pointer'/>
            </label>  
          </div>
      </fieldset>

      {/*MORE ABOUT*/}
      <div>
        <label htmlFor="about" className='cursor-pointer'>More about
          <textarea name='about' id='about' {...register("about")} className='cursor-pointer border'></textarea>
        </label>
      </div>

    </form>
  )
}

export default AnimalForm