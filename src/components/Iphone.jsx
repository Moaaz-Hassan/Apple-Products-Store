import React from 'react'
import { iphoneModels } from '../data/data'

function Iphone() {
  
  
  return <div className=' w-full h-full flex flex-col items-center justify-around bg-white p-8 overflow-y-scroll'>
    <h3 className=' 2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-5'>
        which iphone is right for you ?
    </h3>
    <div className=' grid-cols-2 md:grid-cols-2 lg:grid-cols-3 grid  w-full '>
        {iphoneModels.map((iphone , index)=>(
            <div key={index} className=' mb-3 flex flex-col items-center justify-between gap-y-2'>
                <img src={iphone.img} alt={iphone.name} className='2xl:w-72 lg:w-64 sm:w-48 object-contain' />
                <a href="#" className="2xl:text-2xl xl:text-xl lg:text-base text-sm font-semobold text-gray-800 mt-3">
                    {iphone.name}
                </a>
                <p className="2xl:text-lg xl:text-base lg:text-sm text-xs text-gray-700 mt-2">
                    {iphone.description}
                </p>
                <span className="2xl:text-base xl:text-sm lg:text-xs text-blue-400 mt-2">
                    {iphone.price}
                </span>
                <button type="button" 
                className='text-sm mt-3 px-4 py-2 bg-blue-400 text-white rounded-full '>
                    Buy
                </button>
            </div>
        ))}
        

    </div>

  </div>
}

export default Iphone