import React from 'react'
import { LuFileSpreadsheet } from "react-icons/lu"
import { motion, scale } from "motion/react"

const Card = ({data, reference }) => {
  return (
    
         <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className='w-60 h-72 rounded-[20px] bg-zinc-600 text-white p-5 m-5 overflow-hidden'>
             <LuFileSpreadsheet />
             <img className=' flex w-20 h-20 rounded items-center' src="https://i.pinimg.com/originals/3d/a7/a1/3da7a11be8bc9b0d08e2098fdd3a5f29.jpg" alt="" />
             <p className='text-sm font-semibold mt-4  '>{data.desc}</p>
             <div className=' absolute w-full h-10 bottom-0 bg-red-500 left-0 '></div>
              <button className='w-full h-10 bg-zinc-800 rounded-lg mt-5 font-semibold hover:bg-blue-700'>Get Started</button>

        </motion.div>
  )
}

export default Card