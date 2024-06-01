import React from 'react'

function Card({name,image,folower,profile,url}) {
  return (
    <>
    <div className='grid grid-cols-4 gap-10 w-[50vw] rounded-xl border-2 border-slate-800 bg-slate-700 text-slate-200'>
        <div className='col-span-2'>
          <a href={url} target='_blank' >
          <img 
        src={image} 
        width={300}
        className='border-2 border-slate-800 rounded-[50%] m-10'
        />
          </a>
        </div>
        <div className='col-span-2  grid'>
          <div className='place-content-center'>
        <h1 className='text-xl text-left m-4'>Profile: {profile}</h1>
        <h1 className='text-xl text-left m-4'>Name: {name}</h1>
        <h2 className='text-xl text-left m-4'>Followers: {folower}</h2>
         </div>       
        </div>
    </div>
    </>
  )
}

export default Card