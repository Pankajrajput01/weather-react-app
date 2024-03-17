import React from 'react'

export default function TopButtons({setQuery}) {
    const cities = [
        {
            id:1,
            title:"London"
        },
        {
            id:2,
            title:"Paris"
        },
        {
            id:3,
            title:"Japan"
        },
        {
            id:4,
            title:"Tokyo"
        },

        {
            id:5,
            title:"Spain"
        }
    ]
  return  <div className='flex items-center justify-around my-6 mx-20 '>
        {cities.map((city) =>(
           <button key={city.id} className='text-white  font-bold drop-shadow-2xl shadow-black text-lg py-2 px-9 transition ease-out hover:text-sky-300 ' onClick={()=>setQuery({q: city.title})}>{city.title}</button>
        ))}
    </div> 
  
}
