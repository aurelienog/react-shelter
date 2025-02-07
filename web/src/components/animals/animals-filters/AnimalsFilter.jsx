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
          <label htmlFor="all" className='cursor-pointer'>All
            <input type="radio" id='all' value="all" name='species' {...register("species")}/>
          </label>
          <label htmlFor="dog" className='cursor-pointer'>Dog
            <input type="radio" id='dog' value="dog" name='species' {...register("species")}/>
          </label>
          <label htmlFor="cat" className='cursor-pointer'>Cat
            <input type="radio" id='cat' value="cat" name='species' {...register("species")}/>
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
          <label htmlFor="both" className='cursor-pointer'>Both
            <input type="radio" id='both' value="both" name='sex' {...register("sex")}/>
          </label>       
          <label htmlFor="female" className='cursor-pointer'>Female
            <input type="radio" id='female' value="female" name='sex' {...register("sex")}/>
          </label>
          <label htmlFor="male" className='cursor-pointer'>Male
            <input type="radio" id='male' value="male" name='sex' {...register("sex")}/>
          </label>
        </div>
      </fieldset>

      {/*SIZE*/}
      <fieldset className='border m-8'>
        <legend>Size</legend>
        <div className='grid'>
          <label htmlFor="all-size" className='cursor-pointer'>All
            <input type="radio" id='all-size' value="" name='size' {...register("size")}/>
          </label>
          
          <label htmlFor="small" className='cursor-pointer'>Small (-4kg)
            <input type="radio" id='small' value="small" name='size' {...register("size")}/>
          </label>
          
          <label htmlFor="medium" className='cursor-pointer'>Medium (5 - 10kg)
            <input type="radio" id='medium' value="medium" name='size' {...register("size")}/>
          </label>
          
          <label htmlFor="large" className='cursor-pointer'>Large (11 - 25kg)
            <input type="radio" id='large' value="large" name='size' {...register("size")}/>
          </label>
          
          <label htmlFor="giant" className='cursor-pointer'>Giant (+26kg)
            <input type="radio" id='giant' value="giant" name='size' {...register("size")}/>
          </label>
        </div>
      </fieldset>

      {/*HOME*/}
        <fieldset className='border m-8'>
        <legend>Home desired</legend>
        <div className='grid'>
          <label htmlFor="any-location" className='cursor-pointer'>Any location
            <input type="radio" id='any-location' value="any location" name='idealHome' {...register("idealHome")}/>
          </label>
          
          <label htmlFor="away-from-inner-city" className='cursor-pointer'>Away from inner cities
            <input type="radio" id='away-from-inner-city' value="away from inner city" name='idealHome' {...register("idealHome")}/>
          </label>
        </div>
      </fieldset>
      
      {/*CHILDREN*/}
      <fieldset className='border m-8'>
        <legend>Living with children</legend>
        <div className='flex gap-2'>
          <label htmlFor="yes-children" className='cursor-pointer'>Yes
            <input type="radio" id='yes-children' value="yes" name='livingWithChildren' {...register("livingWithChildren")}/>
          </label>

          <label htmlFor="no-children" className='cursor-pointer'>No
            <input type="radio" id='no-children' value="no" name='livingWithChildren' {...register("livingWithChildren")}/>
          </label>
        </div>
      </fieldset>

      {/*DOGS*/}
      <fieldset className='border m-8'>
        <legend>Living with dogs</legend>
        <div className='flex gap-2'>
          <label htmlFor="yes-dogs" className='cursor-pointer'>Yes
            <input type="radio" id='yes-dogs' value="yes" name='livingWithDogs' {...register("livingWithDogs")}/>
          </label>

          <label htmlFor="no-dogs" className='cursor-pointer'>No
            <input type="radio" id='no-dogs' value="no" name='livingWithDogs' {...register("livingWithDogs")}/>
          </label>
        </div>
      </fieldset>

      {/*CATS*/}
      <fieldset className='border m-8'>
        <legend>Living with cats</legend>
        <div>
          <label htmlFor="yes-cats" className='cursor-pointer'>Yes
            <input type="radio" id='yes-cats' value="yes" name='livingWithCats' {...register("livingWithCats")}/>
          </label>
          
          <label htmlFor="no-cats" className='cursor-pointer'>No
            <input type="radio" id='no-cats' value="no" name='livingWithCats' {...register("livingWithCats")}/>
          </label>     
        </div>
      </fieldset>


      <button type='submit'>submit</button>

    </form>
  )
}

export default AnimalsFilter