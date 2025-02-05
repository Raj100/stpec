import React, { useContext } from "react";
import Line from "../assets/Line.svg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AppContext } from "../Components/AppContext";
import { Link } from "react-router-dom";
const Departments = () => {
    const {theme}=useContext(AppContext);
  return (
    <>
      <Navbar></Navbar>
      <div className={`font-dosis bg-${theme}bg p-5 text-${theme}txt `}>
        {/* <div className="bg-white text-xl font-semibold mt-[31px] mb-12 flex mx-4">
            <p>Select Your Departments</p>
            <img src="" alt="" />
        </div> */}

        <h1 className="text-center text-2xl font-bold mt-2">
        Departments
        </h1>
        <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 gap-[31px]">
        <Link to='/Department/Applied_Sciences'>
          <div className="rounded-2xl border-2 h-52 border-[#555] relative">
            <div className="border-[0.5px] border-[#4C4C4C] w-full mt-[65px]"></div>
            <div className={`bg-${theme}th w-[75px] h-[75px] rounded-full text-2xl text-white flex justify-center items-center left-[42px] absolute top-[27px]`}><p>AS</p></div>
            <div className="mt-[58px] ml-[42px] text-2xl font-bold">Applied Sciences</div>
          </div>
          </Link >
          <Link to='/Department/Civil_Engineering'>
          <div className="rounded-2xl border-2 h-52 border-[#555] relative">
            <div className="border-[0.5px] border-[#4C4C4C] w-full mt-[65px]"></div>
            <div className={`bg-${theme}th w-[75px] h-[75px] rounded-full text-2xl text-white flex justify-center items-center left-[42px] absolute top-[27px]`}><p>CVE</p></div>
            <div className="mt-[58px] ml-[42px] text-2xl font-bold">Civil Engineering</div>
          </div>
          </Link >
          <Link to='/Department/Computer_Science_and_Engineering'>
          <div className="rounded-2xl border-2 h-52 border-[#555] relative ">
            <div className="border-[0.5px] border-[#4C4C4C] w-full mt-[65px]"></div>
            <div className={`bg-${theme}th w-[75px] h-[75px] rounded-full text-2xl text-white flex justify-center items-center left-[42px] absolute top-[27px]`}><p>CSE</p></div>
            <div className="mt-[58px] ml-[42px] text-2xl font-bold">Computer Science & Engineering</div>
          </div>
          </Link>
          <Link to='/Department/Electrical_and_Electronics_Engineering'>
          <div className="rounded-2xl border-2 lg:h-52 border-[#555] relative">
            <div className="border-[0.5px] border-[#4C4C4C] w-full mt-[65px]"></div>
            <div className={`bg-${theme}th w-[75px] h-[75px] rounded-full text-2xl text-white flex justify-center items-center left-[42px] absolute top-[27px]`}><p>EEE</p></div>
            <div className="mt-[58px] ml-[42px] text-2xl font-bold">Electrical and Electronics Engineering</div>
          </div>
          </Link >
          <Link to='/Department/Electronics_and_Communication_Engineering'>
          <div className="rounded-2xl border-2 h-64 lg:h-52 border-[#555] relative">
            <div className="border-[0.5px] border-[#4C4C4C] w-full mt-[65px]"></div>
            <div className={`bg-${theme}th w-[75px] h-[75px] rounded-full text-2xl text-white flex justify-center items-center left-[42px] absolute top-[27px]`}><p>ECE</p></div>
            <div className="mt-[58px] ml-[42px] text-2xl font-bold">Electronics and Communication Engineering</div>
          </div>
          </Link >

          <Link to='/Department/Humanities_and_Social_Sciences'>
          <div className="rounded-2xl border-2 h-52 border-[#555] relative">
            <div className="border-[0.5px] border-[#4C4C4C] w-full mt-[65px]"></div>
            <div className={`bg-${theme}th w-[75px] h-[75px] rounded-full text-2xl text-white flex justify-center items-center left-[42px] absolute top-[27px]`}><p>HS</p></div>
            <div className="mt-[58px] ml-[42px] text-2xl font-bold">Humanities and Social Sciences</div>
          </div>
          </Link >

          <Link to='/Department/Mechanical_Engineering'>
          <div className="rounded-2xl border-2 h-52 border-[#555] relative">
            <div className="border-[0.5px] border-[#4C4C4C] w-full mt-[65px]"></div>
            <div className={`bg-${theme}th w-[75px] h-[75px] rounded-full text-2xl text-white flex justify-center items-center left-[42px] absolute top-[27px]`}><p>MCE</p></div>
            <div className="mt-[58px] ml-[42px] text-2xl font-bold">Mechanical Engineering</div>
          </div>
          </Link >
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Departments;
