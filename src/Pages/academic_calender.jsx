import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Line from "../assets/Line.svg"
import Rectangle41 from "../assets/Rectangle41.png"
import { AppContext } from '../Components/AppContext'
const Academics = () => {
    const {theme}=useContext(AppContext);
  return (
    <div>
        <Navbar></Navbar>
        <div className={`font-dosis bg-${theme}bg pt-12 text-${theme}txt`}>
        <h1 className='text-center font-bold text-2xl'>Academic Calendar</h1>
        <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center mx-auto mt-4'>
            <div className='m-5'>
                <img src={Rectangle41} alt="Earphone" />
                <div className={`h-20 bg-${theme}th text-white p-3 rounded-b-xl flex flex-col justify-between`}>
                    <div className='flex justify-between items-center'>
                    <p className='text-bold text-lg'>Even Semester</p>
                    <p className='text-xs text-normal'>2023 - 24</p>
                    </div>
                    <p className='text-[10px]'>B.Tech | M.Tech | Ph.D</p>
                </div>
            </div>

            <div className='m-5'>
                <img src={Rectangle41} alt="Earphone" />
                <div className={`h-20 bg-${theme}th text-white p-3 rounded-b-xl flex flex-col justify-between`}>
                    <div className='flex justify-between items-center'>
                    <p className='text-bold text-lg'>Even Semester</p>
                    <p className='text-xs text-normal'>2023 - 24</p>
                    </div>
                    <p className='text-[10px]'>B.Tech | M.Tech | Ph.D</p>
                </div>
            </div>

            <div className='m-5'>
                {/* <img src={Rectangle41} alt="Earphone" /> */}
                <div className={`h-20 bg-${theme}th text-white p-3 rounded-b-xl flex flex-col justify-between`}>
                    <div className='flex justify-between items-center'>
                    <p className='text-bold text-lg'>Even Semester</p>
                    <p className='text-xs text-normal'>2023 - 24</p>
                    </div>
                    <p className='text-[10px]'>B.Tech | M.Tech | Ph.D</p>
                </div>
            </div>

        </div>
        </div>
      <Footer></Footer>
    </div>
  )
}

export default Academics;
