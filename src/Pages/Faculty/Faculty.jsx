import "./faculty.css";
import facpic from "../../assets/facepic.png";
import React, { useRef, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { AppContext } from "../../Components/AppContext";
import { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllFacultyProfile } from "../../features/Department/departmentSlice.js";
// import { use } from "i18next";
import { CircularProgress } from "@mui/material";
import { useInView } from "react-intersection-observer";



const Faculty = () => {
  const { theme } = useContext(AppContext);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { type } = useParams();
  const [isStaff, setIsStaff] = useState(false);
  const [isAdminstrativeStaff, setIsAdminstrativeStaff] = useState(false);
  const [currentDepartment, setCurrentDepartment] = useState("Computer Science and Engineering");

  useEffect(() => {
    console.log(type);
    if (type === "Technical_Staff") {
      console.log("Technical_Staff --------------------------");
      setIsAdminstrativeStaff(false);
      setIsStaff(true);
    }
    if (type === "Administrative_Staff") {
      // console.log("Administrative_Staff --------------------------");
      setIsStaff(true);
      setIsAdminstrativeStaff(true);
    }
    else {
      setIsAdminstrativeStaff(false);
      setIsStaff(false);
    }
  }, [type]);

  const sectionRefs = {
    CSE: useRef(null),
    ECE: useRef(null),
    EEE: useRef(null),
    MCE: useRef(null),
    CVE: useRef(null),
    AS: useRef(null),
    HSS: useRef(null),
  };

  const dispatch = useDispatch();
  const faculties = useSelector((state) => state.department.department);
  const { profile, loading, error } = useSelector((state) => state.department);
  useEffect(() => {
    // window.scrollTo(0, 0);
    dispatch(fetchAllFacultyProfile());

  }, []);
  useEffect(() => {
    console.log("profile", profile);
  }, [profile, faculties]);

  const topRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0, // Trigger when the element is fully out of view
  });

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  // useEffect(() => {

  //   const scroll = () => {

  //     switch (currentDepartment) {
  //       case "Computer Science and Engineering":
  //         cseRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  //         break;
  //       case "Electronics and Communication Engineering":
  //         eceRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  //         break;
  //       case "eee":
  //         eeeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  //         break;
  //       case "mce":
  //         mceRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  //         break;
  //       case "cve":
  //         cveRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  //         break;
  //       case "ap":
  //         apRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  //         break;
  //       case "hu":
  //         huRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  //         break;

  //       default:
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
  const setDepartment = (value) => {
    const targetRef = sectionRefs[value];
    const navbarHeight = 140; 
    if (targetRef && targetRef.current) {
      const elementPosition = targetRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      
      <Navbar />
      <div className="mx-auto w-full mt-5 font-dosis">

        {!isAdminstrativeStaff &&
          <div className=" flex justify-evenly items-center flex-wrap space-x-4 sticky top-0 mx-5">
            {/* <label className="drop" for="department">
          Select a department:
        </label> */}


            <select onChange={(e) => setDepartment(e.target.value)} id="department" name="department" className=" mx-auto w-80 p-2 bg-gray-50  shadow-lg outline-none text-center lg:w-96  font-semibold text-xl">
              <option value="Computer Science and Engineering">Select Department</option>
              <option value="CSE" >Computer Science and Engineering</option>
              <option value="ECE">Electronics and Communication Engineering</option>
              <option value="EEE">Electrical and Electronics Engineering</option>
              <option value="MCE">Mechanical Engineering</option>
              <option value="CVE">Civil Engineering</option>
              <option value="AS">Applied Science</option>
              <option value="HSS">Humanities and Social Sciences</option>
            </select>


            {/* <div onClick={() => setCurrentDepartment("Computer Science and Engineering")} className="hidden md:block m-2 relative rounded px-5 py-2.5 overflow-hidden group bg-teal-500 relative hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-teal-400 transition-all ease-out duration-300 cursor-pointer">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">CSE</span>
            </div>
            
            <div onClick={() => setCurrentDepartment("Electronics and Communication Engineering")} className="hidden md:block relative rounded px-5 py-2.5 overflow-hidden group bg-teal-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 cursor-pointer">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">ECE</span>
            </div>
            <div onClick={() => setCurrentDepartment("Electrical and Electronics Engineering")} className="hidden md:block relative rounded px-5 py-2.5 overflow-hidden group bg-teal-500 relative hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-teal-400 transition-all ease-out duration-300 cursor-pointer">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">EEE</span>
            </div>
            <div onClick={() => setCurrentDepartment("Mechanical Engineering")} className="hidden md:block relative rounded px-5 py-2.5 overflow-hidden group bg-teal-500 relative hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-teal-400 transition-all ease-out duration-300 cursor-pointer">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">MCE</span>
            </div>
            <div onClick={() => setCurrentDepartment("Civil Engineering")} className="hidden md:block m-2 relative rounded px-5 py-2.5 overflow-hidden group bg-teal-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 cursor-pointer">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">CVE</span>
            </div>
            <div onClick={() => setCurrentDepartment("Humanities and Social Sciences")} className="hidden md:block relative rounded px-5 py-2.5 overflow-hidden group bg-teal-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 cursor-pointer">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">HU</span>
            </div>
            <div onClick={() => setCurrentDepartment("Applied Science")} className="hidden md:block m-2 relative rounded px-5 py-2.5 overflow-hidden group bg-teal-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 cursor-pointer">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">AS</span>
            </div> */}
          </div>
        }

<div ref={topRef}></div>
<div ref={ref} style={{ height: "0px" }}></div>

        <div className="">


        </div>
        {!isAdminstrativeStaff &&
          <div className="dept my-2">
            <h3 ref={sectionRefs.CSE} className="text-xl lg:text-3xl font-bold">Department of Computer Science and Engineering </h3>
            <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5 my-4`}></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-3 lg:px-20">

              {loading ? <div className='flex justify-center items-center h-96 w-full'><CircularProgress /></div> : <>
                {type !== "Technical_Staff" && faculties && faculties?.map((faculty, index) => {
                  if (faculty?.profile?.staff === false && faculty?.profile?.department === "Computer Science and Engineering") {
                    return (
                      <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                        <div className="shadow-md shadow-gray-500/50 rounded-xl">
                          <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                            <img src={faculty?.profile?.imageLink ? faculty?.profile?.imageLink : facpic} alt={faculty?.profile?.name} className="absolute rounded-full rounded-full bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
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
              </>
              }

              {/* -------------------------------Technical Staff CSE -----------------------------*/}

              {type === "Technical_Staff" && faculties && faculties?.map((faculty, index) => {
                if (faculty?.profile?.staff === true && faculty?.profile?.department === "Computer Science and Engineering") {
                  return (
                    <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                      <div className="shadow-md shadow-gray-500/50 rounded-xl">
                        <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                          <img src={faculty?.profile?.imageLink ? faculty?.profile?.imageLink : facpic} alt={faculty?.profile?.name} className="absolute rounded-full bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
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



            {/* ----------------------------------ECE---------------------------------- */}
            <h3 ref={sectionRefs.ECE} className="text-xl lg:text-3xl font-bold mt-4">Department of Electronics and Communication Engineering</h3>
            <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5 my-4`}></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-3 lg:px-20">

              {loading ? <div className='flex justify-center items-center h-96 w-full'><CircularProgress /></div> : <>
                {type !== "Technical_Staff" && faculties && faculties?.map((faculty, index) => {
                  if (faculty?.profile?.staff === false && faculty?.profile?.department === "Electronics and Communication Engineering") {
                    return (
                      <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                        <div className="shadow-md shadow-gray-500/50 rounded-xl">
                          {console.log(faculty)}
                          <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                            <img src={faculty?.profile?.imageLink ? faculty?.profile?.imageLink : facpic} alt={faculty?.profile?.name} className="absolute rounded-full rounded-full bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
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
              </>
              }

              {/* -------------------------------Technical Staff -----------------------------*/}

              {type === "Technical_Staff" && faculties && faculties?.map((faculty, index) => {
                if (faculty?.profile?.staff === true && faculty?.profile?.department === "Electronics and Communication Engineering") {
                  return (
                    <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                      <div className="shadow-md shadow-gray-500/50 rounded-xl">
                        {console.log(faculty)}
                        <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                          <img src={faculty?.profile?.imageLink ? faculty?.profile?.imageLink : facpic} alt={faculty?.profile?.name} className="absolute rounded-full bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
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





            {/* ----------------------------------EEE---------------------------------- */}
            <h3 ref={sectionRefs.EEE} className="text-xl lg:text-3xl font-bold mt-4">Department of Electrical and Engineering</h3>
            <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5 my-4`}></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-3 lg:px-20">

              {loading ? <div className='flex justify-center items-center h-96 w-full'><CircularProgress /></div> : <>
                {type !== "Technical_Staff" && faculties && faculties?.map((faculty, index) => {
                  if (faculty?.profile?.staff === false && faculty?.profile?.department === "Electrical and Electronics Engineering") {
                    return (
                      <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                        <div className="shadow-md shadow-gray-500/50 rounded-xl">
                          {console.log(faculty)}
                          <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                            <img src={faculty?.profile?.imageLink ? faculty?.profile?.imageLink : facpic} alt={faculty?.profile?.name} className="absolute rounded-full rounded-full bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
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
              </>
              }

              {/* -------------------------------Technical Staff -----------------------------*/}

              {type === "Technical_Staff" && faculties && faculties?.map((faculty, index) => {
                if (faculty?.profile?.staff === true && faculty?.profile?.department === "Electrical and Electronics Engineering") {
                  return (
                    <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                      <div className="shadow-md shadow-gray-500/50 rounded-xl">
                        {console.log(faculty)}
                        <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                          <img src={faculty?.profile?.imageLink ? faculty?.profile?.imageLink : facpic} alt={faculty?.profile?.name} className="absolute rounded-full bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
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





            {/* ----------------------------------MCE---------------------------------- */}
            <h3 ref={sectionRefs.MCE} className="text-xl lg:text-3xl font-bold mt-4">Department of Mechanical Engineering</h3>
            <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5 my-4`}></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-3 lg:px-20">

              {loading ? <div className='flex justify-center items-center h-96 w-full'><CircularProgress /></div> : <>
                {type !== "Technical_Staff" && faculties && faculties?.map((faculty, index) => {
                  if (faculty?.profile?.staff === false && faculty?.profile?.department === "Mechanical Engineering") {
                    return (
                      <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                        <div className="shadow-md shadow-gray-500/50 rounded-xl">
                          {console.log(faculty)}
                          <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                            <img src={faculty?.profile?.imageLink ? faculty?.profile?.imageLink : facpic} alt={faculty?.profile?.name} className="absolute rounded-full rounded-full bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
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
              </>
              }

              {/* -------------------------------Technical Staff -----------------------------*/}

              {type === "Technical_Staff" && faculties && faculties?.map((faculty, index) => {
                if (faculty?.profile?.staff === true && faculty?.profile?.department === "Mechanical Engineering") {
                  return (
                    <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                      <div className="shadow-md shadow-gray-500/50 rounded-xl">
                        {console.log(faculty)}
                        <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                          <img src={faculty?.profile?.imageLink ? faculty?.profile?.imageLink : facpic} alt={faculty?.profile?.name} className="absolute rounded-full bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
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



            {/* ----------------------------------CVE---------------------------------- */}
            <h3 ref={sectionRefs.CVE} className="text-xl lg:text-3xl font-bold mt-4">Department of Civil Engineering</h3>
            <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5 my-4`}></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-3 lg:px-20">

              {loading ? <div className='flex justify-center items-center h-96 w-full'><CircularProgress /></div> : <>
                {type !== "Technical_Staff" && faculties && faculties?.map((faculty, index) => {
                  if (faculty?.profile?.staff === false && faculty?.profile?.department === "Civil Engineering") {
                    return (
                      <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                        <div className="shadow-md shadow-gray-500/50 rounded-xl">
                          {console.log(faculty)}
                          <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                            <img src={faculty?.profile?.imageLink ? faculty?.profile?.imageLink : facpic} alt={faculty?.profile?.name} className="absolute rounded-full rounded-full bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
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
              </>
              }

              {/* -------------------------------Technical Staff -----------------------------*/}

              {type === "Technical_Staff" && faculties && faculties?.map((faculty, index) => {
                if (faculty?.profile?.staff === true && faculty?.profile?.department === "Civil Engineering") {
                  return (
                    <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                      <div className="shadow-md shadow-gray-500/50 rounded-xl">
                        {console.log(faculty)}
                        <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                          <img src={faculty?.profile?.imageLink ? faculty?.profile?.imageLink : facpic} alt={faculty?.profile?.name} className="absolute rounded-full bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
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


            {/* ----------------------------------Applied Science---------------------------------- */}
            <h3 ref={sectionRefs.AS} className="text-xl lg:text-3xl font-bold mt-4">Department of Applied Science</h3>
            <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5 my-4`}></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-3 lg:px-20">

              {loading ? <div className='flex justify-center items-center h-96 w-full'><CircularProgress /></div> : <>
                {type !== "Technical_Staff" && faculties && faculties?.map((faculty, index) => {
                  if (faculty?.profile?.staff === false && faculty?.profile?.department === "Applied Science") {
                    return (
                      <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                        <div className="shadow-md shadow-gray-500/50 rounded-xl">
                          {console.log(faculty)}
                          <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                            <img src={faculty?.profile?.imageLink ? faculty?.profile?.imageLink : facpic} alt={faculty?.profile?.name} className="absolute rounded-full rounded-full bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
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
              </>
              }

              {/* -------------------------------Technical Staff -----------------------------*/}

              {type === "Technical_Staff" && faculties && faculties?.map((faculty, index) => {
                if (faculty?.profile?.staff === true && faculty?.profile?.department === "Applied Science") {
                  return (
                    <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                      <div className="shadow-md shadow-gray-500/50 rounded-xl">
                        {console.log(faculty)}
                        <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                          <img src={faculty?.profile?.imageLink ? faculty?.profile?.imageLink : facpic} alt={faculty?.profile?.name} className="absolute rounded-full bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
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



            {/* ----------------------------------Humanities and Social Sciences---------------------------------- */}
            <h3 ref={sectionRefs.HSS} className="text-xl lg:text-3xl font-bold mt-4">Department of Humanities and Social Sciences</h3>
            <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5 my-4`}></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-3 lg:px-20">

              {loading ? <div className='flex justify-center items-center h-96 w-full'><CircularProgress /></div> : <>
                {type !== "Technical_Staff" && faculties && faculties?.map((faculty, index) => {
                  if (faculty?.profile?.staff === false && faculty?.profile?.department === "Humanities and Social Sciences") {
                    return (
                      <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                        <div className="shadow-md shadow-gray-500/50 rounded-xl">
                          {console.log(faculty)}
                          <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                            <img src={faculty?.profile?.imageLink ? faculty?.profile?.imageLink : facpic} alt={faculty?.profile?.name} className="absolute rounded-full rounded-full bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
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
              </>
              }

              {/* -------------------------------Technical Staff -----------------------------*/}

              {type === "Technical_Staff" && faculties && faculties?.map((faculty, index) => {
                if (faculty?.profile?.staff === true && faculty?.profile?.department === "Humanities and Social Sciences") {
                  return (
                    <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                      <div className="shadow-md shadow-gray-500/50 rounded-xl">
                        {console.log(faculty)}
                        <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                          <img src={faculty?.profile?.imageLink ? faculty?.profile?.imageLink : facpic} alt={faculty?.profile?.name} className="absolute rounded-full bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
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
        }













        {isAdminstrativeStaff && <div className="dept my-2">
          <h3 className="text-xl lg:text-3xl font-bold">Administrative Staff</h3>
          <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5 my-4`}></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-3 lg:px-20">

            {faculties && faculties?.map((faculty, index) => {
              if (faculty?.profile?.department === "Administrative Staff") {
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
        </div>}



      </div>

      

      <Footer />
      {!inView && (
        <button className=" fixed bottom-10 right-10 rounded-full bg-white shadow-lg shadow-gray-500/50 p-3 animation2 border z-20" onClick={scrollToTop}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
        </button>
      )}
    </>
  );
};

export default Faculty;
