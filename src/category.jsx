import React from 'react'

export default function Category({categ,setselectedcat}) {
  let Cat=categ.map((res,i)=>{
    return(
<li onClick={()=>setselectedcat(res.name)} key={i} className='bg-gray-100 my-3 text-lg py-1 cursor-pointer'>
          {res.name}
        </li>
    )
 
  })
  
  return (
    <div>
      <h1 className='text-2xl font-bold'>Category</h1>
      <ul>
        {Cat}

      </ul>
    </div>
  )
}
