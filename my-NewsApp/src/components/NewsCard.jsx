import { data } from 'autoprefixer'
import React from 'react'

function NewsCard({title,img,description,url}) {
  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-300">
  <img className="w-full" src={img} alt=""/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title ? title : 'The Coldest Sunset'}</div>
    <p className="text-gray-700 text-base">
        {description ? description : 
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.'}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href={url} target='blank' >Read more</a></button>
  </div>
</div>
    </>
  )
}

export default NewsCard