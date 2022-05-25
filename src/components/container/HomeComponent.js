import React from 'react'
import { Link } from 'react-router-dom'

export const HomeComponent = () => {
  return (
    <div className='container mt-5 justify-content-center flex'>
        <Link to="/seller" className='btn btn-primary mr-3 px-5' > Seller</Link>
        <Link to="/buyer" className='btn btn-primary  px-5'>Buyer</Link>
    </div>
  )
}
