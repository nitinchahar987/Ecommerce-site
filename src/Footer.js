import React from 'react'

function Footer() {
  return (
    <footer className='bg-gray-900 text-white px-6 py-10 mt-10' data-aos="fade-up">
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
    <div>
      <h3 className='text-xl font-bold mb-4'>Contact Us</h3>
      <ul className='space-y-2'>
        <li>Details</li>
        <li>Buy Products</li>
        <li>Global Selling</li>
        <li>Product Margin</li>
        <li>Owners</li>
      </ul>
    </div>
    <div>
      <h3 className='text-xl font-bold mb-4'>Rate Us</h3>
      <ul className='space-y-2'>
        <li>Know More</li>
        <li>Fulfilment by Site</li>
        <li>Brand Protection</li>
        <li>Phone: 9896953961</li>
        <li>Insta: nitin_jaat_</li>
      </ul>
      <div className='mt-4 flex space-x-4'>
        <i className="fa-brands fa-square-instagram text-2xl"></i>
        <i className="fa-brands fa-twitter text-2xl"></i>
        <i className="fa-brands fa-facebook text-2xl"></i>
      </div>
    </div>
    <div>
      <h3 className='text-xl font-bold mb-4'>Support</h3>
      <ul className='space-y-2'>
        <li>Return Centre</li>
        <li>Download App</li>
        <li>100% Purchase Protection</li>
        <li>Your Account</li>
        <li>Help</li>
      </ul>
    </div>
  </div>
</footer>
  )
}

export default Footer