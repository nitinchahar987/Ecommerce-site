
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Category from './category';
import { useEffect, useState } from 'react';
import About from './About';

function App() {
  const [categ,setcateg]=useState([])
  const [finalproducts,setfinalproducts]=useState([])
  const [selectedcat,setselectedcat]=useState("Laptops")
const [cart, setCart] = useState([]); 

const addToCart = ((product) => {
  const exists = cart.find((item) => item.id === product.id);
  if (exists) {
    alert("Item already in cart!");
    return;
  }

  setCart([...cart, product]);
});

let getproduct=()=>{
axios.get(`https://dummyjson.com/products/category/${selectedcat}`)
.then((res)=>res.data)
.then((finalres)=>{
  setfinalproducts(finalres.products)
})

}

  let getcatagory=()=>{
    axios.get("https://dummyjson.com/products/categories")
    .then((res)=>res.data)
    .then((finalres)=>{
      setcateg(finalres)
    })
  }
  useEffect(()=>{
getcatagory()
  },[])
  useEffect(()=>{

getproduct()
  },[selectedcat])
  
  let productss=finalproducts.map((v,i)=>{
    return(
      <div key={i}>
        <Productitems v={v} key={i} addToCart={addToCart}  />
      </div>
    )
  })
  
return(

<div className='mydiv'>
   
<Router>
      <nav>
        |
       
        
      </nav>
      
      <Routes>
       
       
        
      </Routes>
    </Router>

   <div className=' w-{1320px} '>
    <h1 className='text-center text-xl font-bold'>Our products</h1>
    <div className='ml-10 bg-yellow-200 w-20 rounded-sm absolute right-3'> <i class="fa-solid fa-cart-shopping"> </i>Cart<span
    className='absolute top-0 right-3' > {cart.length}</span> </div>
<div className='grid grid-cols-[30%_auto] gap-[20px] mt-8'>

   <div className='ml-3 '>
    <Category categ={categ} setselectedcat={setselectedcat}/>
    </div>
  <div className='grid grid-cols-3 gap-4'>
    {
      finalproducts.length>0 ? 
       productss
       :
       "opppsss!! these products are out  of stock"
    }
 
  </div>
</div>

   </div>

   <div className='text-white pl-9 grid grid-cols-3 bg-black '>
    <div className='mb-60 space-y-8'><span className='mt-20 mb-6 font-bold text-[22px] cursor-pointer' >Contactus</span>
      <br/>
      <br/>
     <span className='  cursor-pointer'> Details </span>
      <br/>
      <br/>
     <span className='mt-20 mb-6 cursor-pointer'> Buy products
    </span>
    <br/>
    <br/>
    
    <span className='mt-20 mb-6 cursor-pointer'> global selling</span>
      <br/>
      <br/>
     <span className='mt-20 mb-6 cursor-pointer'> products margin</span>
      <br/>
      <br/>
     <span className='mt-20 mb-6 cursor-pointer'> owners
    </span>
    </div>
    <div>
    <span className='mt-20 mb-6 font-bold text-[22px] cursor-pointer'>Rate us</span>
      <br/>
      <br/>
     <span className='mt-20 mb-6 cursor-pointer'> Know more</span>
      <br/>
      <br/>
     <span className='mt-20 mb-6 cursor-pointer'> Fulfilment by site
    </span>
    <br/>
    <br/>
    <span className='mt-20 mb-6 cursor-pointer'> Protect and build your brand</span>
      <br/>
      <br/>
     <span className='mt-20 mb-6 cursor-pointer'> M.no-9896953961</span>
      <br/>
      <br/>
     <span className='mt-20 mb-6 cursor-pointer'> insta-nitin_jaat_
    </span>
    <br/>
    <br/>
    <br/>
    <br/>
    <i class="fa-brands fa-square-instagram text-[30px] m-[10px]"></i> 
    <i class="fa-brands fa-twitter text-[30px] m-[10px]"></i>
    <i class="fa-brands fa-facebook text-[30px] m-[10px]"></i>
    </div>
    <div>
      <span className='mt-20 mb-6 font-bold text-[22px] cursor-pointer'> Return centre</span>
      <br/>
      <br/>
     <span className='mt-20 mb-6 cursor-pointer'> Download app</span>
      <br/>
      <br/>
     <span className='mt-20 mb-6 cursor-pointer'> 100% purchase protection
    </span>
    <span className='mt-20 mb-6 cursor-pointer'> products</span>
      <br/>
      <br/>
     <span className='mt-20 mb-6'> your account</span>
      <br/>
      <br/>
     <span className='mt-20 mb-6 cursor-pointer'> Help
    </span>
    </div>
   </div>
   
</div>


)
  
}

export default App;

function Productitems({v,addToCart}){
  
  return(
    <div className='shadow-lg  pb-4 rounded-md bg-gray-100 '>
     <img
  src={v.images[0]}
  alt={v.title}
  className="w-full h-48 object-cover rounded loading='lazy'"/>
      <h4 className='ml-5 font-bold'>brand:{v.brand}</h4>
      <h4 className='text-green-600 ml-5 font-bold'>title:{v.title}</h4>
      <h4 className='text-red-900 font-bold ml-5'>price:{v.price*100}</h4>
      <button 
        onClick={() => addToCart(v)} 
        className='bg-blue-500 mt-2 ml-2 px-3 py-1 rounded hover:bg-blue-700 transition-all'
      >
        Add to Cart
      </button>

    </div>
  )
}






