import React from 'react'
import Card from './Card'
import { u } from 'motion/react-client';



const Foregraund = () => {
  
  const ref = React.useRef(null);

  const data = 
  [{
    desc :"I am vaibhaw singh, from varanasi,india.",
     filesize: ".9mb"
  },

{
    desc :"I am vaibhaw singh, from varanasi,india.",
     filesize: ".9mb"
  },
  {
    desc :"I am vaibhaw singh, from varanasi,india i will creat a react app.",
     filesize: ".9mb"
  },
  {
    desc :"I am vaibhaw singh, from varanasi,india.",
     filesize: ".9mb"
  },

{
    desc :"I am vaibhaw singh, from varanasi,india.",
     filesize: ".9mb"
  }];
  


  return (
    <div>
        <div ref={ref} className='z-[3] top-0 left-0  w-full h-full fixed p-5 row-span-2 row-start-2 flex gap-5 justify-center flex-wrap overflow-auto '>
        {data.map((items ,index)=>(
          <Card data ={items} reference ={ref}/>
        ))}

        </div>
    </div>
  )
}

export default Foregraund