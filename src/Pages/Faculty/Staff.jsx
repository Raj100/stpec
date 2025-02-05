import "./faculty.css";
import facpic from "../../assets/facepic.png";
import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { AppContext } from "../../Components/AppContext";
import { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllFacultyProfile } from "../../features/Department/departmentSlice.js";



const Faculty = () => {
  const { theme } = useContext(AppContext);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const cseRef = useRef(null);
  const eceRef = useRef(null);
  const eeeRef = useRef(null);
  const mceRef = useRef(null);
  const cveRef = useRef(null);
  const apRef = useRef(null);
  const huRef = useRef(null);

  const dispatch = useDispatch();
  const faculties = useSelector((state) => state.department.department);
  useEffect(() => {
    // window.scrollTo(0, 0);
    dispatch(fetchAllFacultyProfile());
  }, []);


  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 200) {
  //       setShowScrollButton(true);
  //     } else {
  //       setShowScrollButton(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  const topRef = useRef(null);
  const { scrollY } = useScroll();

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // useEffect(() => {
  //   const select = document.getElementById("department");

  //   const scroll = () => {
  //     const value = select.value;

  //     switch (value) {
  //       case "cse":
  //         cseRef.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest' });
  //         break;
  //       case "ece":
  //         eceRef.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest' });
  //         break;
  //       case "eee":
  //         eeeRef.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest' });
  //         break;
  //       case "mce":
  //         mceRef.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest' });
  //         break;
  //       case "cve":
  //         cveRef.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest' });
  //         break;
  //       case "ap":
  //         apRef.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest' });
  //         break;
  //       case "hu":
  //         huRef.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest' });
  //         break;

  //         default:
  //         break;
  //     }
  //   };

  //   select.addEventListener("change", scroll);

  //   return () => {
  //     select.removeEventListener("change", scroll);
  //   };
  // },);
  // const changedepartment = (e) => {
  // }
  const [currentDepartment, setCurrentDepartment] = useState("AU");
  return (
    <>
      <Navbar />
      <div className="mx-auto w-full mt-5 font-dosis">

        <div className=" flex justify-evenly items-center flex-wrap space-x- sticky top-0 mx-5">
          <label className="drop" for="department">
            Select a department:
          </label>

          <select id="department" name="department" className="mx-auto w-80 p-2 bg-gray-50  shadow-lg outline-none text-center lg:w-96  font-semibold text-xl">
            <option value="">Select Department</option>
            <option value="cse">CSE</option>
            <option value="ece">ECE</option>
            <option value="cve">CVE</option>
            <option value="mce">MCE</option>
            <option value="ap">AP</option>
            <option value="hu">HU</option>
            <option value="eee">EEE</option>
          </select>


          {/* <div onClick={() => setCurrentDepartment("Applied Science")} className="relative rounded px-5 py-2.5 overflow-hidden group bg-teal-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 cursor-pointer">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">AS</span>
          </div>
          <div onClick={() => setCurrentDepartment("Civil Engineering")} className="relative rounded px-5 py-2.5 overflow-hidden group bg-teal-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 cursor-pointer">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">CVE</span>
          </div>
          <div onClick={() => setCurrentDepartment("Computer Science and Engineering")} className="relative rounded px-5 py-2.5 overflow-hidden group bg-teal-500 relative hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-teal-400 transition-all ease-out duration-300 cursor-pointer">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">CSE</span>
          </div>
          <div onClick={() => setCurrentDepartment("Humanities and Social Sciences")} className="relative rounded px-5 py-2.5 overflow-hidden group bg-teal-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 cursor-pointer">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">HU</span>
          </div>
          <div onClick={() => setCurrentDepartment("Electrical and Electronics Engineering")} className="relative rounded px-5 py-2.5 overflow-hidden group bg-teal-500 relative hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-teal-400 transition-all ease-out duration-300 cursor-pointer">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">EEE</span>
          </div>
          <div onClick={() => setCurrentDepartment("Electronics and Communication Engineering")} className="relative rounded px-5 py-2.5 overflow-hidden group bg-teal-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 cursor-pointer">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">ECE</span>
          </div>
          <div onClick={() => setCurrentDepartment("Mechanical Engineering")} className="relative rounded px-5 py-2.5 overflow-hidden group bg-teal-500 relative hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-teal-400 transition-all ease-out duration-300 cursor-pointer">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">MCE</span>
          </div>
        </div> */}

          <div className="">


          </div>

          <div className="dept my-2" id="CSE" ref={cseRef}>
            <h3 className="text-xl lg:text-3xl font-bold">Department of Computer Science and Engineering</h3>
            <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5 my-4`}></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-3 lg:px-20">

              {faculties && faculties?.map((faculty, index) => {
                if (faculty?.profile?.staff === true && faculty?.profile?.department === "Computer Science and Engineering") {
                  return (
                    <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                      <div className="shadow-md shadow-gray-500/50 rounded-xl">
                        {console.log(faculty)}
                        <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                          <img src={faculty?.profile?.imageLink ? faculty?.profile?.imageLink : facpic} alt={faculty?.profile?.name} className="absolute bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
                        </div>
                        <div className="px-2">
                          <h3 className="text-sm lg:text-xl mb-[13px] font-semibold text-center">{faculty?.profile?.name}</h3>
                          <p className="text-xs lg:text-lg text-center mb-[13px]">
                            {faculty?.profile?.designation}
                          </p>
                          <div className="text-[10px] lg:text-lg flex items-center justify-center mb-[13px]">
                            <h4>
                              {faculty?.profile?.email} | {faculty?.profile?.contact}
                            </h4>
                          </div>
                        </div>

                        <div className={`text-sm py-[5px] text-white bg-${theme}th rounded-br-xl rounded-bl-xl py-4 text-center`}>
                          <a href="#">Read More</a>
                        </div>
                      </div>
                    </Link>
                  );
                }

              }
              )}
            </div>
          </div>

          <div className="dept my-2" id="ECE" ref={eceRef}>
            <h3 className="text-xl lg:text-3xl font-bold">Department of Electronics and Communication Engineering</h3>
            <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5 my-4`}></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-3 lg:px-20">

              {faculties && faculties?.map((faculty, index) => {
                if (faculty?.profile?.staff === true && faculty?.profile?.department === "Electronics and Communication Engineering") {
                  return (
                    <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                      <div className="shadow-md shadow-gray-500/50 rounded-xl">
                        {console.log(faculty)}
                        <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                          <img src={faculty?.profile?.imageLink ? faculty?.profile?.imageLink : facpic} alt={faculty?.profile?.name} className="absolute bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
                        </div>
                        <div className="px-2">
                          <h3 className="text-sm lg:text-xl mb-[13px] font-semibold text-center">{faculty?.profile?.name}</h3>
                          <p className="text-xs lg:text-lg text-center mb-[13px]">
                            {faculty?.profile?.designation}
                          </p>
                          <div className="text-[10px] lg:text-lg flex items-center justify-center mb-[13px]">
                            <h4>
                              {faculty?.profile?.email} | {faculty?.profile?.contact}
                            </h4>
                          </div>
                        </div>

                        <div className={`text-sm py-[5px] text-white bg-${theme}th rounded-br-xl rounded-bl-xl py-4 text-center`}>
                          <a href="#">Read More</a>
                        </div>
                      </div>
                    </Link>
                  );
                }

              }
              )}
            </div>
          </div>

          <div className="dept my-2" id="EEE" ref={eeeRef}>
            <h3 className="text-xl lg:text-3xl font-bold">Department of Electrical and Electronics Engineering</h3>
            <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5 my-4`}></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-3 lg:px-20">

              {faculties && faculties?.map((faculty, index) => {
                if (faculty?.profile?.staff === true && faculty?.profile?.department === "Electrical and Electronics Engineering") {
                  return (
                    <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                      <div className="shadow-md shadow-gray-500/50 rounded-xl">
                        {console.log(faculty)}
                        <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                          <img src={faculty?.profile?.imageLink ? faculty?.profile?.imageLink : facpic} alt={faculty?.profile?.name} className="absolute bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
                        </div>
                        <div className="px-2">
                          <h3 className="text-sm lg:text-xl mb-[13px] font-semibold text-center">{faculty?.profile?.name}</h3>
                          <p className="text-xs lg:text-lg text-center mb-[13px]">
                            {faculty?.profile?.designation}
                          </p>
                          <div className="text-[10px] lg:text-lg flex items-center justify-center mb-[13px]">
                            <h4>
                              {faculty?.profile?.email} | {faculty?.profile?.contact}
                            </h4>
                          </div>
                        </div>

                        <div className={`text-sm py-[5px] text-white bg-${theme}th rounded-br-xl rounded-bl-xl py-4 text-center`}>
                          <a href="#">Read More</a>
                        </div>
                      </div>
                    </Link>
                  );
                }

              }
              )}
            </div>
          </div>






        </div>

        {showScrollButton && (
          <button className="fixed bottom-10 right-10 rounded-full bg-white shadow-lg shadow-gray-500/50 p-3 animation2 border" onClick={scrollToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
          </button>
        )}

        <Footer />
      </>
);
};

export default Faculty;
