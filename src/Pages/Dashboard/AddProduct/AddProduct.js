import React from 'react';
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import './AddProduct.css'
const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch('https://fathomless-savannah-81203.herokuapp.com/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully added your product',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset()
            }
        })
    };
    return (
        <div className='add-place '>
            <h2 className='text-uppercase text-white fw-bold'>Add New Place</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img",{ required: true})} placeholder='Product img url' />
                <input {...register("name",{ required: true})} placeholder='Product Name' />
                <input type="number" {...register("price",{ required: true})} placeholder=' Price'/>
                <textarea rows={4} {...register("description",{ required: true})} placeholder='Description'/>
                <input type="submit" value='Add Product' />
            </form>
            </div>
    );
};

export default AddProduct;