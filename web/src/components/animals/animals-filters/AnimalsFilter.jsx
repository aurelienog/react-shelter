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
        <div>
          <label htmlFor="all">All</label>
          <input type="radio" id='all' value="all" name='species' {...register("species")}/>
        </div>
        <div>
          <label htmlFor="dog">Dog</label>
          <input type="radio" id='dog' value="dog" name='species' {...register("species")}/>
        </div>
      
        <div>
          <label htmlFor="cat">Cat</label>
          <input type="radio" id='cat' value="cat" name='species' {...register("species")}/>
        </div>

        <div>
          <label htmlFor="otherAnimal">Others</label>
          <input type="radio" id='otherAnimal' value="otherAnimal" name='species' {...register("species")}/>
        </div>
      </fieldset>

      {/*SEX*/}
      <fieldset className='border m-8'>
        <legend>Sex</legend>
        <div>
          <label htmlFor="both">Both</label>
          <input type="radio" id='both' value="both" name='sex' {...register("sex")}/>
        </div>
        <div>
          <label htmlFor="female">Female</label>
          <input type="radio" id='female' value="female" name='sex' {...register("sex")}/>
        </div>
        <div>
          <label htmlFor="male">Male</label>
          <input type="radio" id='male' value="male" name='sex' {...register("sex")}/>
        </div>
      </fieldset>

      {/*SIZE*/}
      <fieldset className='border m-8'>
        <legend>Size</legend>
        <div>
          <label htmlFor="all-size">All</label>
          <input type="radio" id='all-size' value="" name='size' {...register("size")}/>
        </div>
        <div></div>
        <div>
          <label htmlFor="small">Small (-4kg)</label>
          <input type="radio" id='small' value="small" name='size' {...register("size")}/>
        </div>
        <div>
          <label htmlFor="medium">Medium (5 - 10kg)</label>
          <input type="radio" id='medium' value="medium" name='size' {...register("size")}/>
        </div>
      
        <div>
          <label htmlFor="large">Large (11 - 25kg)</label>
          <input type="radio" id='large' value="large" name='size' {...register("size")}/>
        </div>

        <div>
          <label htmlFor="giant">Giant (+26kg)</label>
          <input type="radio" id='giant' value="giant" name='size' {...register("size")}/>
        </div>
      </fieldset>

      {/*HOME*/}
        <fieldset className='border m-8'>
        <legend>Home desired</legend>
        <div>
          <label htmlFor="any-location">Any location</label>
          <input type="radio" id='any-location' value="any location" name='idealHome' {...register("idealHome")}/>
        </div>
        <div>
          <label htmlFor="away-from-inner-city">Away from inner cities</label>
          <input type="radio" id='away-from-inner-city' value="away from inner city" name='idealHome' {...register("idealHome")}/>
        </div>
      </fieldset>
      
      {/*CHILDREN*/}
      <fieldset className='border m-8'>
        <legend>Living with children</legend>
        <div>
          <label htmlFor="yes-children">Yes</label>
          <input type="radio" id='yes-children' value="yes" name='livingWithChildren' {...register("livingWithChildren")}/>
        </div>
        <div>
          <label htmlFor="no-children">No</label>
          <input type="radio" id='no-children' value="no" name='livingWithChildren' {...register("livingWithChildren")}/>
        </div>
      </fieldset>

      {/*DOGS*/}
      <fieldset className='border m-8'>
        <legend>Living with dogs</legend>
        <div>
          <label htmlFor="yes-dogs">Yes</label>
          <input type="radio" id='yes-dogs' value="yes" name='livingWithDogs' {...register("livingWithDogs")}/>
        </div>
        <div>
          <label htmlFor="no-dogs">No</label>
          <input type="radio" id='no-dogs' value="no" name='livingWithDogs' {...register("livingWithDogs")}/>
        </div>
      </fieldset>

      {/*CATS*/}
      <fieldset className='border m-8'>
        <legend>Living with cats</legend>
        <div>
          <label htmlFor="yes-cats">Yes</label>
          <input type="radio" id='yes-cats' value="yes" name='livingWithCats' {...register("livingWithCats")}/>
        </div>
        <div>
          <label htmlFor="no-cats">No</label>
          <input type="radio" id='no-cats' value="no" name='livingWithCats' {...register("livingWithCats")}/>
        </div>
      </fieldset>


      <button type='submit'>submit</button>

    </form>
  )
}

export default AnimalsFilter