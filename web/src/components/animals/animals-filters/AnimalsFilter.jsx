import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, createSearchParams, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form'

function cleanFilters(filters) {
  return Object.fromEntries(
    Object.entries(filters).filter(([_, value]) => value !== null && value !== undefined && value !== "" && value !=="all" && value !=="both")
  );
}

function AnimalsFilter() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams()
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode:'onChange', defaultValues: { species: "all" } });
  const selectedSpecies = watch("species");

  useEffect(() => {
    const currentParams = Object.fromEntries(searchParams.entries());
    const updatedParams = { ...currentParams };
    if (selectedSpecies === "all") {
      delete updatedParams.species;
    } else {
      updatedParams.species = selectedSpecies;
    }

      navigate({
      pathname: "/animals",
      search: createSearchParams(updatedParams).toString()
    });
      
  }, [selectedSpecies, navigate])

  const onAnimalSubmit = (animal) => {

    const animalsFilters = cleanFilters({
      ...animal})
      navigate({
        pathname: "/animals",
        search: createSearchParams(animalsFilters).toString()
      });
    }


  return (
    <form onSubmit={handleSubmit(onAnimalSubmit)}>

      {/*SPECIES*/}
      <fieldset className='border m-8'>
        <legend>Species</legend>
        <div className='grid'>
          <label className='cursor-pointer'>All
            <input type="radio" value="all" name='species' {...register("species")}/>
          </label>
          <label  className='cursor-pointer'>Dog
            <input type="radio" value="dog" name='species' {...register("species")}/>
          </label>
          <label  className='cursor-pointer'>Cat
            <input type="radio" value="cat" name='species' {...register("species")}/>
          </label>

          <label htmlFor="otherAnimal" className='cursor-pointer'>Others
            <input type="radio" id='otherAnimal' value="otherAnimal" name='species' {...register("species")}/>  
          </label>
        </div>
      </fieldset>

      {/*SEX*/}
      <fieldset className='border m-8'>
        <legend>Sex</legend>
        <div className='grid'>
          <label className='cursor-pointer'>Both
            <input type="radio" value="both" name='sex' {...register("sex")}/>
          </label>       
          <label className='cursor-pointer'>Female
            <input type="radio" value="female" name='sex' {...register("sex")}/>
          </label>
          <label className='cursor-pointer'>Male
            <input type="radio" value="male" name='sex' {...register("sex")}/>
          </label>
        </div>
      </fieldset>

      {/*SIZE*/}
      <fieldset className='border m-8'>
        <legend>Size</legend>
        <div className='grid'>
          <label className='cursor-pointer'>All
            <input type="radio" value="" name='size' {...register("size")}/>
          </label>
          
          <label className='cursor-pointer'>Small (-4kg)
            <input type="radio" value="small" name='size' {...register("size")}/>
          </label>
          
          <label className='cursor-pointer'>Medium (5 - 10kg)
            <input type="radio" value="medium" name='size' {...register("size")}/>
          </label>
          
          <label className='cursor-pointer'>Large (11 - 25kg)
            <input type="radio" value="large" name='size' {...register("size")}/>
          </label>
          
          <label className='cursor-pointer'>Giant (+26kg)
            <input type="radio" value="giant" name='size' {...register("size")}/>
          </label>
        </div>
      </fieldset>

      {/*HOME*/}
        <fieldset className='border m-8'>
        <legend>Home desired</legend>
        <div className='grid'>
          <label className='cursor-pointer'>Any location
            <input type="radio" value="any location" name='idealHome' {...register("idealHome")}/>
          </label>
          
          <label className='cursor-pointer'>Away from inner cities
            <input type="radio" value="away from inner city" name='idealHome' {...register("idealHome")}/>
          </label>
        </div>
      </fieldset>
      
      {/*CHILDREN*/}
      <fieldset className='border m-8'>
        <legend>Living with children</legend>
        <div className='flex gap-2'>
          <label className='cursor-pointer'>Yes
            <input type="radio" value="yes" name='livingWithChildren' {...register("livingWithChildren")}/>
          </label>

          <label className='cursor-pointer'>No
            <input type="radio" value="no" name='livingWithChildren' {...register("livingWithChildren")}/>
          </label>
        </div>
      </fieldset>

      {/*DOGS*/}
      <fieldset className='border m-8'>
        <legend>Living with dogs</legend>
        <div className='flex gap-2'>
          <label className='cursor-pointer'>Yes
            <input type="radio" value="yes" name='livingWithDogs' {...register("livingWithDogs")}/>
          </label>

          <label className='cursor-pointer'>No
            <input type="radio" value="no" name='livingWithDogs' {...register("livingWithDogs")}/>
          </label>
        </div>
      </fieldset>

      {/*CATS*/}
      <fieldset className='border m-8'>
        <legend>Living with cats</legend>
        <div>
          <label className='cursor-pointer'>Yes
            <input type="radio" value="yes" name='livingWithCats' {...register("livingWithCats")}/>
          </label>
          
          <label className='cursor-pointer'>No
            <input type="radio" value="no" name='livingWithCats' {...register("livingWithCats")}/>
          </label>     
        </div>
      </fieldset>


      <button type='submit'>submit</button>

    </form>
  )
}

export default AnimalsFilter