import { useState, useContext, useEffect } from "react";
import dropdownIcon from "../../assets/icon/baseline-arrow_drop_down-24px.svg";
import backIcon from "../../assets/icon/navigation/arrow_back_24px_outlined.svg";
import locationIcon from "../../assets/icon/outline-location_on-24px.svg";
import editIcon from "../../assets/icon/baseline-edit-24px.svg";
import errorIcon from "../../assets/icon/baseline-error_outline-24px.svg";
import closeIcon from "../../assets/icon/baseline-cancel-24px.svg";
import "./departments.css";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import facpic from "../../assets/facepic.png";
import { AppContext } from "../../Components/AppContext";
import Footer from "../../Components/Footer";
import Civil from "../../assets/Departments/Civil_engineering2.jpg"
import { useSelector, useDispatch } from "react-redux";
import { fetchAllFacultyProfile } from "../../features/Department/departmentSlice.js";



const MyComponent = () => {
  const { theme } = useContext(AppContext);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openSignup = () => setSignupModalOpen(true);
  const closeSignup = () => setSignupModalOpen(false);

  const openLogin = () => setLoginModalOpen(true);
  const closeLogin = () => setLoginModalOpen(false);
  const [currentSelection, setCurrentSelection] = useState("All");
  const [edit, setEdit] = useState(false);

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      type: "Article",
      content: "I’ve worked in UX for the better part of a decade...",


    },
    {
      id: 2,
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      type: "Article",
      content: "I’ve worked in UX for the better part of a decade...",
    },
  ]);
  const dispatch = useDispatch();
  const faculties = useSelector((state) => state.department.department);
  useEffect(() => {
    // window.scrollTo(0, 0);
    dispatch(fetchAllFacultyProfile());
  }, []);
  useEffect(() => {
    console.log("hello");
    // console.log(faculties[0].profile);
  }, [faculties]);








  // const faculties=[
  //   {
  //       id: 1,
  //       name: "Prof. O. R. Jaiswal",
  //       designation: "Professor, Department of Civil Engineering",
  //       email: "orjaiswal@nitgoa.ac.in",
  //       contact: "",
  //       image: "",
  //     },
  //   {
  //     "id": 2,
  //     "name": "Dr. Harikumar M.",
  //     "designation": "Assistant Professor, Department of Civil Engineering",
  //     "email": "hod.cve@nitgoa.ac.in",
  //     "contact": "",
  //     "image": ""
  //   }
  // ];


  return (
    <div className="min-h-screen">
      {/* Header */}
      <Navbar></Navbar>
      {/* <div className="header"></div>
      <div className="header-lg shadow-lg flex items-center justify-between p-4">
        <img className="h-8" src={logo} alt="logo" />
        <div className="search-top flex items-center bg-gray-200 p-2 rounded">
          <img src={searchIcon} alt="search" />
          <input
            className="bg-transparent border-none ml-2 outline-none"
            type="text"
            placeholder="Search for your favorite groups in ATG"
          />
        </div>
        <div className="profile-top flex items-center">
          <img className="h-8 w-8 rounded-full" src={profileImg} alt="profile img" />
          <p className="mb-0 ml-2">Siddharth Goyal</p>
          <img className="ml-2" src={dropdownIcon} alt="dropdown" />
        </div>
      </div> */}

      {/* Main Section */}
      <div className="main-section-cve main-section relative bg-cover bg-center h-48">
        <Link to="/"><img className="absolute top-3 left-3" src={backIcon} alt="back" /></Link>
        {/* <button
          className="border border-white text-white bg-transparent p-2 rounded border-2 absolute right-3 top-3"
          id="join-group-btn"
        >
          Join Group
        </button> */}
        <h1 className="topic-heading absolute left-3 bottom-6 text-white text-4xl">Civil Engineering</h1>
        <p className="topic-subtitle absolute left-3 bottom-3 text-white text-sm">CVE Department NIT Goa</p>
      </div>

      {/* Navbar */}
      <div className="navbar-sm p-4">
        <h6 className="mb-4">Posts(368)</h6>
        <div className="filter flex items-center p-2 bg-gray-200 rounded">
          <h6 className="mb-0">Filter: All</h6>
          <img className="ml-2" src={dropdownIcon} alt="bottom-arrow" />
        </div>
      </div>

      <main className="main-container">
        {/* Navbar */}
        <div className="navbar flex justify-between p-4">
          <div className="flex">
            <h6 className="navbar-item">All(32)</h6>
            <p className="navbar-item ml-4">Faculty</p>
            <p className="navbar-item ml-4">Article</p>
            <p className="navbar-item ml-4">Event</p>
            <p className="navbar-item ml-4">Education</p>
            <p className="navbar-item ml-4">Job</p>
          </div>
          <div className="flex">
            {/* <div className="post-btn flex items-center bg-blue-500 text-white px-4 py-2 rounded">
              Write a Post
              <img className="ml-2" src={dropdownIcon} alt="dropdown" />
            </div>
            <button className="btn-primary btn bg-blue-500 text-white px-4 py-2 rounded ml-4">
              Join Group
            </button> */}
          </div>
        </div>

        {/*  Section */}
        <section className="posts-section flex ">
          <div className="posts-section-left w-3/4">
            {/* {posts.map((post)=>(
              <div className="w-full rounded-t mt-1 bg-white border p-4">
              <img className="w-full rounded-t" src={mountainsImg} alt="post" /> 
              <h6 className="mt-3">{post.type}</h6>
              <div className="flex items-center justify-between">
                <h5 className="text-lg">{post.title}</h5>
                <div className="relative">
                  <img className="cursor-pointer" src={moreOptionsIcon} alt="more options" />
                  <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg p-2 rounded">
                    <p className="hover:bg-gray-200 p-2">Edit</p>
                    <p className="hover:bg-gray-200 p-2">Report</p>
                    <p className="hover:bg-gray-200 p-2">Option 3</p>
                  </div>
                </div>
              </div>
              <p className="font-light text-sm mt-2">{post.content}</p>
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center">
                  <img className="h-8 w-8 rounded-full" src={profileImg} alt="profile" />
                  <div className="ml-2">
                    <p className="mb-0 text-sm font-semibold">Sarthak Kamra</p>
                    <p className="text-xs text-gray-500">1.4k views</p>
                  </div>
                </div>
                <div className="flex items-center cursor-pointer">
                  <img className="h-5 w-5" src={shareIcon} alt="share" />
                  <p className="ml-2">Share</p>
                </div>
              </div>
            </div>
            )} */}



            {/* Example raj's post  */}
            {/* <div className="w-full rounded-t mt-1 bg-white border p-4">
              <img className="w-full rounded-t" src={mountainsImg} alt="post" />
              <h6 className="mt-3">✍️ Article</h6>
              <div className="flex items-center justify-between">
                <h5 className="text-lg">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                <div className="relative">
                  <img className="cursor-pointer" src={moreOptionsIcon} alt="more options" />
                  <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg p-2 rounded">
                    <p className="hover:bg-gray-200 p-2">Edit</p>
                    <p className="hover:bg-gray-200 p-2">Report</p>
                    <p className="hover:bg-gray-200 p-2">Option 3</p>
                  </div>
                </div>
              </div>

              <p className="font-light text-sm mt-2">I’ve worked in UX for the better part of a decade...</p>
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center">
                  <img className="h-8 w-8 rounded-full" src={profileImg} alt="profile" />
                  <div className="ml-2">
                    <p className="mb-0 text-sm font-semibold">Sarthak Kamra</p>
                    <p className="text-xs text-gray-500">1.4k views</p>
                  </div>
                </div>
                <div className="flex items-center cursor-pointer">
                  <img className="h-5 w-5" src={shareIcon} alt="share" />
                  <p className="ml-2">Share</p>
                </div>
              </div>
            </div> */}
            <div className="grid lg:grid-cols-2 gap-4 my-4  lg:m-4">
              {/* Faculty Card */}
              {faculties && faculties.map((faculty, index) => {
    if (faculty?.profile?.department === "Civil Engineering") {
        return (
            <Link key={index} to={`/faculty/${faculty?.profile?.facultyPageRoute}`}>
                <div className="shadow-md shadow-gray-500/50 rounded-xl">
                    {console.log(faculty)}
                    <div className="bgc pt-[90px] mb-[42px] lg:mb-[60px] lg:pt-[120px] rounded-xl relative">
                        <img src={facpic} alt={faculty?.profile?.name} className="absolute bottom-0 translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 w-[74px] h-[74px] mx-auto lg:w-[125px] lg:h-[125px]" />
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
    return null;
})}





            </div>



          </div>


          {/* Right Sidebar */}
          <div className="right w-1/4 p-4 border-l">
            <div className="flex justify-between items-center border-b pb-2">
              <img className="h-5 w-5" src={locationIcon} alt="location" />
              <input type="text" disabled={edit ? "" : "disabled"} onBlur={() => setEdit(false)} placeholder="Goa, India" className="text-sm flex items-center focus:outline-none">

              </input>
              <img className="cursor-pointer h-5 w-5" src={editIcon} alt="edit" onClick={(e) => { setEdit(true); }} />
            </div>
            <div className="text-xs text-gray-500 mt-2 flex items-center">
              <img className="h-5 w-5" src={errorIcon} alt="info" />
              Your location will help us serve better and extend a personalized experience.
            </div>
          </div>
        </section>
      </main>

      {/* Signup Modal */}
      {isSignupModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded p-6 w-full max-w-md">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg">Create Account</h2>
              <img
                className="cursor-pointer"
                src={closeIcon}
                alt="close"
                onClick={closeSignup}
              />
            </div>
            <form>
              <div className="flex mb-4">
                <input
                  type="text"
                  aria-label="First name"
                  className="form-control rounded-none border p-2 flex-1"
                  placeholder="First name"
                />
                <input
                  type="text"
                  aria-label="Last name"
                  className="form-control rounded-none border p-2 flex-1 ml-2"
                  placeholder="Last name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  aria-label="Email"
                  className="form-control rounded-none border p-2 w-full"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  aria-label="Password"
                  className="form-control rounded-none border p-2 w-full"
                  placeholder="Password"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  aria-label="Confirm Password"
                  className="form-control rounded-none border p-2 w-full"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="flex justify-between items-center">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Create Account
                </button>
                <span className="text-xs text-gray-500 cursor-pointer" onClick={openLogin}>
                  or, Sign In
                </span>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default MyComponent;
