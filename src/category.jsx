import React from 'react'

export default function Category({categ,setselectedcat,selectedcat}) {
  
  
  
  return (
    <div className='bg-white shadow rounded p-4' data-aos="fade-right">
  <h2 className='text-xl font-bold mb-4 text-gray-800'>Categories</h2>
  <ul className='space-y-2'>
    {categ.map((res, i) => (
      <li
        onClick={() => setselectedcat(res.name)}
        key={i}
        className={`py-2 px-3 rounded cursor-pointer transition ${
          selectedcat === res.name
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 hover:bg-blue-100'
        }`}
      >
        {res.name}
      </li>
    ))}
  </ul>
</div>
  )
}
