import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { BoxData } from '../data/boxData';

const AddUser = () => {
  const navigate = useNavigate();

  const nameRef = useRef(undefined);
  const colorRef = useRef(undefined);
  const categoryRef = useRef(undefined);
  const priceRef = useRef(undefined);
  
  const handlSubmit = (event) => {
    event.preventDefault();
    
    const name1 = nameRef.current.value;
    const color = colorRef.current.value;
    const category = categoryRef.current.value;
    const price = priceRef.current.value;

    const newobj = {
      name1: name1,
      color: color,
      category: category,
      price: price
    }

    // BoxData.push(newobj)
    console.log(newobj)

    event.target.reset();
    
   
  }
   
  return (
    <form className='m-10 shadow'   onSubmit={handlSubmit} >
      
      <div className='grid grid-cols-2 gap-4 p-10 ' >
        <div className='flex flex-col'>
          <label for="default-search" className="flex justify-start mb-2 text-sm font-medium text-gray-900 not-sr-only dark:text-red">Product name</label>
          <div className="relative">

            <input ref={nameRef} name='product_name'  type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:ark:focus:ring-blue-500 dark:focus:border-blue-500"  required /> </div> </div>
        <div className='flex flex-col'>
          <label for="default-search" className="flex justify-start mb-2 text-sm font-medium text-gray-900 not-sr-only dark:text-red">Color</label>
          <div className="relative">

            <input ref={colorRef}  name='color'  type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:ark:focus:ring-blue-500 dark:focus:border-blue-500"  required />

          </div>
        </div>
        <div className='flex flex-col'>
          <label for="default-search" className="flex justify-start mb-2 text-sm font-medium text-gray-900 not-sr-only dark:text-red">Category</label>
          <div className="relative">

            <input ref={categoryRef} name='category'  type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:ark:focus:ring-blue-500 dark:focus:border-blue-500"  required />

          </div>
        </div>
        <div className='flex flex-col'>
          <label for="default-search" className="flex justify-start mb-2 text-sm font-medium text-gray-900 not-sr-only dark:text-red">Price</label>
          <div className="relative">

            <input ref={priceRef} name='price  '  type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:ark:focus:ring-blue-500 dark:focus:border-blue-500"  required />

          </div>
        </div>



      </div>

      <div className='flex justify-end w-full pt-6 pb-6 bg-slate-100 '>

        <button type="button" onClick={() => navigate(-1)} class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Back</button>
        <button type="submit  " className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>

      </div>




    </form>

  )
}

export default AddUser
