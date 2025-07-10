import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData} from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import SectionTitle from '../../../Shared/Component/SectionTitle';

const UpdateItem = () => {
    
    const {name,category,recipe,price,image,id}=useLoaderData()

    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();



    // photo
     const imageUploadToCloudinary = async (imageFile) => {
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await response.json();
    return data.secure_url;
  }






//   update


// 🔽 Submit handler
  const onSubmit = async (data) => {
    const imageFile = data.image[0];

    try {
      const imageUrl = await imageUploadToCloudinary(imageFile);

      const itemData = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: imageUrl,
      };

      console.log('Final Item Data:', itemData);

      // 🔁 Send item to backend
      const menuRes = await axiosSecure.patch(`/api/menu/${id}/`, itemData);
      console.log(menuRes.data);

    if (menuRes.status === 200 || menuRes.status === 204)  {
        reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${data.name} is Updated the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error('Image upload or item submission failed:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to add item!',
      });
    }
  };


    return (
        <div>
      <SectionTitle heading="Add an Item" subheading="What's new?" />

      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name */}
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              {...register('name', )}
              placeholder="Recipe Name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category + Price */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Category */}
            <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                {...register('category', )}
                defaultValue={category}
                className="select select-bordered"
              >
                <option disabled value="">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* Price */}
            <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                defaultValue={price}
                {...register('price', )}
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* Recipe Description */}
          <div className="form-control my-4">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              {...register('recipe')}
              defaultValue={recipe}
              placeholder="Write recipe details here"
              className="textarea textarea-bordered h-24"
            ></textarea>
          </div>


<img src={image} alt="photo"  className='w-32 h-32' />
          {/* Image Upload */}
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Upload Image*</span>
            </label>
            <input
              type="file"
              {...register('image', )}
              accept="image/*"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>

          <button type="submit" className="btn btn-primary mt-4">
            Update
          </button>
        </form>
      </div>
    </div>
    );
};

export default UpdateItem;
