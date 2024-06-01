import React from 'react'

function Navbar({setCategory}) {
    const categories = ["Business","Sports", 'Entertainment', 'General', 'Health', 'Science', 'Technology'];
  return (
    <>
    <div className='grid p-5 grid-flow-col bg-slate-700' >
        <h1 className='text-3xl lg:text-2xl font-bold' >News <span className=' bg-yellow-400 rounded-lg p-1' >App</span></h1>
        <div className='flex gap-10'>
            {categories.map((category,key) => (
              <div key={key} className='text-white text-md xl:text-2xl lg:text-xl cursor-pointer' onClick={() => setCategory(category)}>
                {category}
              </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Navbar