import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({setCategory}) => {
  let categories = ["Business","Sports", 'Entertainment', 'General', 'Health', 'Science', 'Technology'];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='lg:flex items-center justify-between bg-[#292929] py-4 lg:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white'> 
        News
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden text-white'>
     {!open ? <FaBars/> : <FaTimes/> }
      </div>

      <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-[#292929] lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-10 ':'top-[-490px]'}`}>
        {
          categories.map((category,index)=>(
            <li key={index} className='lg:ml-8 text-xl lg:my-0 my-7' onClick={() => {setCategory(category); setOpen(!open) }} >
              <a href="#" className='text-white hover:text-gray-400 duration-500'>{category}</a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default Navbar