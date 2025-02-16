import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
const Topics = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="p-4 bg-gray-50 lg:px-20 lg:pb-12">
       
       <h1 className='text-center text-3xl font-bold'>Topics</h1>
       <div className="border border-2 border-gray-200 p-8 mt-2 rounded">
           <ol className="relative border-s border-green-200 ">
               <li className="mb-10 ms-6">
                   <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-white  ">
                   <i className="fa-solid fa-1"></i>
                   </span>
                   <h3 className="flex items-center mb-1 text-lg font-semibold text-green-900">
                   T1 - Power Systems and Smart Grids
                  </h3>
                   {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400">February 20th, 2025</time> */}
                   <p className="mb-4 text-base font-normal text-gray-500 ">This topic covers the modern advancements in power systems, focusing on smart grids, their integration, and technologies enabling efficient power distribution and management.
                   </p>
               </li>

               <li className="mb-10 ms-6">
                   <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-white  ">
                   <i className="fa-solid fa-2"></i>
                   </span>
                   <h3 className="flex items-center mb-1 text-lg font-semibold text-green-900">
                   T2 - Electrical Machines and Industrial Drives 
                  </h3>
                   <p className="mb-4 text-base font-normal text-gray-500 ">Explore the latest innovations in electrical machines and industrial drives, including automation, energy efficiency, and advancements in motor control technologies.
                   </p>
               </li>
               <li className="mb-10 ms-6">
                   <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-white  ">
                   <i className="fa-solid fa-3"></i>
                   </span>
                   <h3 className="flex items-center mb-1 text-lg font-semibold text-green-900">
                   T3 - Power Electronic Converters 
                  </h3>
                   <p className="mb-4 text-base font-normal text-gray-500 ">Delve into the development and applications of power electronic converters for renewable energy integration, power conditioning, and energy efficiency in modern systems.
                   </p>
               </li>
               <li className="mb-10 ms-6">
                   <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-white  ">
                   <i className="fa-solid fa-4"></i>
                   </span>
                   <h3 className="flex items-center mb-1 text-lg font-semibold text-green-900">
                   T4 - Renewable Energy & Energy Storage Systems
                  </h3>
                   <p className="mb-4 text-base font-normal text-gray-500 ">
                   This topic highlights advancements in renewable energy sources and energy storage technologies, focusing on solutions for sustainable energy production and storage.
                   </p>
               </li>
               <li className="mb-10 ms-6">
                   <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-white  ">
                   <i className="fa-solid fa-5"></i>
                   </span>
                   <h3 className="flex items-center mb-1 text-lg font-semibold text-green-900">
                   T5 - Transportation Electrification & Automotive Technologies
                   </h3>
                   <p className="mb-4 text-base font-normal text-gray-500 ">
                   Explore the transformative trends in electric vehicles, transportation electrification, and innovations in automotive technologies for a sustainable future.
                   </p>
               </li>
               <li className="mb-10 ms-6">
                   <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-white  ">
                   <i className="fa-solid fa-6"></i>
                   </span>
                   <h3 className="flex items-center mb-1 text-lg font-semibold text-green-900">
                   T6 - Control and Automation
                   </h3>
                   <p className="mb-4 text-base font-normal text-gray-500 ">
                   Examine cutting-edge advancements in control systems and automation, focusing on smart technologies for industrial automation, robotics, and intelligent control systems.
                   </p>
               </li>
           </ol>
           </div>
           </div>
      <Footer></Footer>
    </>
  )
}

export default Topics;
