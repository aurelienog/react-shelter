import React from 'react';
import { useForm } from 'react-hook-form';
import animalsService from '../../../services/animals';
import { useNavigate, createSearchParams } from 'react-router-dom';

function AnimalForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({mode:"onBlur"});



  const onAnimalSubmit = async (animal) => {
    console.log(animal);
  
    const formData = new FormData();
  
    // Añadir imágenes correctamente
    if (animal.images && animal.images.length > 0) {
      for (let i = 0; i < animal.images.length; i++) {
        formData.append("images", animal.images[i]); // Cambiado "files" por "images"
      }
    } else {
      console.error("No image selected");
      return;
    }
  
    // Añadir los otros inputs campo por campo
    Object.keys(animal).forEach((key) => {
      if (key !== "images") {
        formData.append(key, animal[key]); 
      }
    });
  
    try {
      await animalsService.create(formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      navigate("/animals");
    } catch (error) {
      console.error("Error uploading:", error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onAnimalSubmit)} encType='multipart/form-data' className='my-10 grid gap-8 justify-center'>

    {/*SPECIES*/}
      <fieldset>
        <legend>Species<span className='text-red-500'>*</span></legend>
          <div>
            <label className='cursor-pointer'>Dog
              <input type="radio" name="species" value="cat" {...register("species")} className='cursor-pointer'/>
            </label>
            
            <label className='cursor-pointer'>Cat
              <input type="radio" name="species" value="cat" {...register("species")} className='cursor-pointer'/>
            </label>  

            <label className='cursor-pointer'>Other
              <input type="radio" name="species" value="otherAnimal" {...register("species")} className='cursor-pointer'/>
            </label>  
          </div>
      </fieldset>

      {/*NAME*/}
      <div>
        <label className='cursor-pointer'>Name<span className='text-red-500'>*</span>
            <svg aria-hidden="true"></svg>
            <input type="text" name="name" className='border cursor-pointer' {...register("name")}/>
        </label>
      </div>

      {/*SEX*/}
      <fieldset>
        <legend>Sex<span className='text-red-500'>*</span></legend>
          <div>
            <label className='cursor-pointer'>Female
              <input type="radio" name="sex" value="female" {...register("sex")} className='cursor-pointer'/>
            </label>
            
            <label className='cursor-pointer'>Male
              <input type="radio" name="sex" value="male" {...register("sex")} className='cursor-pointer'/>
            </label>  
          </div>
      </fieldset>

      {/*AGE*/}
      <div>
        <label className='cursor-pointer'>Age<span className='text-red-500'>*</span>
          <svg aria-hidden="true"></svg>
          <input type="number" name="age" className='border cursor-pointer' {...register("age")}/>
        </label>
      </div>

      {/*BREED*/}
      <div>
        <label className='cursor-pointer'>Breed<span className='text-red-500'>*</span>
          <svg aria-hidden="true"></svg>
          <input type="text" name="breed" {...register("breed")} className='border cursor-pointer'/>
        </label>    
      </div>

      {/*License*/}
      <fieldset>
        <legend>Need a license?<span className='text-red-500'>*</span></legend>
          <div>
            <label className='cursor-pointer'>Yes
              <input type="radio" name="license" value="yes" {...register("license")} className='cursor-pointer'/>
            </label>

            <label className='cursor-pointer'>No
              <input type="radio" name="license" value="no" {...register("license")} className='cursor-pointer'/>
            </label>
          </div>
      </fieldset>

      {/*SIZE*/}
      <fieldset>
        <legend>Size<span className='text-red-500'>*</span></legend>
          <div className='flex items-center gap-2'>
            <label className='cursor-pointer'>Small
              <input type="radio" name="size" value="small" {...register("size")} className='cursor-pointer'/>
            </label>
            
            <label className='cursor-pointer'>Medium
              <input type="radio" name="size" value="medium" {...register("size")} className='cursor-pointer'/>
            </label>  

            <label className='cursor-pointer'>Large
              <input type="radio" name="size" value="large" {...register("size")} className='cursor-pointer'/>
            </label>  

            <label className='cursor-pointer'>Giant
              <input type="radio" name="size" value="giant" {...register("size")} className='cursor-pointer'/>
            </label>  
          </div>
      </fieldset>

      {/*WEIGHT*/}
      <div>
        <label className='cursor-pointer'>Weight<span className='text-red-500'>*</span>
        <div className='flex border rounded-lg bg-white text-black'>
          <svg aria-hidden="true" className='w-10 h-10'></svg>
          <input type="number" name="weight" {...register("weight")} className='cursor-pointer'/>
        </div>

        </label>    
      </div>

      {/*HOME*/}
      <fieldset>
        <legend>Ideal Home<span className='text-red-500'>*</span></legend>
          <div>
            <label className='cursor-pointer'>Any Location
              <input type="radio" name="idealHome" value="any location" {...register("idealHome")} className='cursor-pointer'/>
            </label>
            
            <label className='cursor-pointer'>Away From Inner City
              <input type="radio" name="idealHome" value="away from inner city" {...register("idealHome")} className='cursor-pointer'/>
            </label>  
          </div>
      </fieldset>

      {/*LIVING WITH CHILDREN*/}
      <fieldset>
        <legend>Living with children<span className='text-red-500'>*</span></legend>
          <div>
            <label className='cursor-pointer'>Yes
              <input type="radio" name="livingWithChildren" value="yes" {...register("livingWithChildren")} className='cursor-pointer'/>
            </label>
            
            <label className='cursor-pointer'>No
              <input type="radio" name="livingWithChildren" value="no" {...register("livingWithChildren")} className='cursor-pointer'/>
            </label>  
          </div>
      </fieldset>

      {/*LIVING WITH DOGS*/}
      <fieldset>
        <legend>Living with dogs<span className='text-red-500'>*</span></legend>
          <div>
            <label className='cursor-pointer'>Yes
              <input type="radio" name="livingWithDogs" value="yes" {...register("livingWithDogs")} className='cursor-pointer'/>
            </label>
            
            <label className='cursor-pointer'>No
              <input type="radio" name="livingWithDogs" value="no" {...register("livingWithDogs")} className='cursor-pointer'/>
            </label>  
          </div>
      </fieldset>

      {/*LIVING WITH CATS*/}
      <fieldset>
        <legend>Living with cats<span className='text-red-500'>*</span></legend>
          <div>
            <label className='cursor-pointer'>Yes
              <input type="radio" name="livingWithCats" value="yes" {...register("livingWithCats")} className='cursor-pointer'/>
            </label>
            
            <label className='cursor-pointer'>No
              <input type="radio" name="livingWithCats" value="no" {...register("livingWithCats")} className='cursor-pointer'/>
            </label>  
          </div>
      </fieldset>

      {/*MORE ABOUT*/}
      <div>
        <label className='cursor-pointer'>More about
          <textarea name='about' {...register("about")} className='cursor-pointer border field-sizing-content min-w-80'></textarea>
        </label>
      </div>

        {/*IMAGES*/}
        <input type="file" {...register("images", { required: "Images are required" })} accept="image/*" multiple />

  
      <button type='submit' className='cursor-pointer border'>Create</button>

    </form>
  )
}

export default AnimalForm