import React from 'react'
import { LuFileSpreadsheet } from "react-icons/lu";

const Card = () => {
  return (
    
         <div className='w-60 h-72 rounded-[20px] bg-sky-800 text-white p-5 m-5'>
             <LuFileSpreadsheet />
             <p className='text-sm font-semibold mt-4  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolore neque nam facere aliquam.</p>
             <div className='footer absolute bottom-0 bg-green-300 w-full h-20 left-0 overflow-hiden '></div>

         </div>
  )
}

export default Card