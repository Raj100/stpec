import React from 'react'
import ComingSoonImg from "../../assets/Comingsoon.svg";
import { Link } from 'react-router-dom';
const ComingSoon = () => {
  return (
    <div className='flex justify-center items-center'>
      <img className='max-h-screen' src={ComingSoonImg} alt="Coming Soon" />
      <Link to="/admin/dashboard"><button className='absolute bottom-8 right-1/2 translate-x-1/2 text-white bg-yellow-500 px-8 py-4 rounded-xl shadow-xl'>Go Back Home</button></Link>
    </div>
  )
}

export default ComingSoon;
