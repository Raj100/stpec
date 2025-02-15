import React, { Ref, useRef, useState, useEffect, useContext } from "react";
import logo from "../assets/nitg_logo.png";
import menu from "../assets/menu.svg";
import searchicon from "../assets/icon.svg";
import translation from "../assets/Translation.png";
import colorpicker from "../assets/color picker.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";
import NitGoalogo from "../assets/NIT_Goa_logo.png";
import divider from "../assets/Divder.svg";
import { useTranslation } from "react-i18next";
import LanguageTranslator from "./LanguageToggle";
import FormatSize from "../assets/format_size.svg";

// import Hamburger from './Hamburger'

const Navbar = () => {
  const { t } = useTranslation();
  // const [theme,settheme]=useState("");
  const { theme, settheme } = useContext(AppContext);
  const [colorpickermenu, setcolorpickermenu] = useState(false);
  const [Menu1, setMenu1] = useState(false);
  const [Menu2, setMenu2] = useState(false);
  const [Menu3, setMenu3] = useState(false);
  const [Menu4, setMenu4] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuResearch, setMenuResearch] = useState(false);


  const [Menu, setMenu] = useState(false);
  const [AdminMenu, setAdminMenu] = useState(false);
  const [AcademicsMenu, setAcademicsMenu] = useState(false);
  const NavRef = useRef();

  const toggleMenu = () => {
    NavRef.current.classList.toggle("raju1");
    setMenu(!Menu);
  };

  const toggleAdminSubMenu = () => {
    NavRef.current.classList.toggle("adminsubc1");
    setAdminMenu(!AdminMenu);
  };

  const toggleAcademicSubMenu = () => {
    NavRef.current.classList.toggle("academicsubc1");
    setAcademicsMenu(!AcademicsMenu);
  };

  useEffect(() => {
    const value = window.localStorage.getItem("Theme");
    const valueParse = value ? value : "default";
    settheme(valueParse);
  }, []);

  const update = (newtheme) => {
    localStorage.setItem("Theme", newtheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        ref={NavRef}
        // className="fixed h-full raj bg-[#5065d3] w-full z-10 py-7 px-4"
        className={`fixed h-full raj w-full z-30 py-7 px-4 bg-${theme}th lg:max-w-[500px]`}
      >
        <div className="flex">
          <div className="w-56 bg-white py-[10px] pl-[22px] [pr-18px] rounded-[50px] mr-4 relative flex justify-center items-center overflow-hidden">
            <input
              type="text"
              placeholder={`🔍 ${t("search")}`}
              className=" w-full flex mr-2 border-0 active:border-0 focus:border-0"
            />
          </div>
          <div
            className="rounded-full w-11 bg-white mr-4 flex justify-center items-center"
            onClick={() => {
              setcolorpickermenu(!colorpickermenu);
            }}
          >
            {" "}
            <img src={colorpicker} alt="colorpicker" className="w-[30px]" />
            {colorpickermenu && (
              <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gray-100 h-48 w-56 rounded-lg border flex flex-col content-center lg:hidden z-10">
                <p className="text-center p-2 border rounded-lg">
                  Choose Theme
                </p>
                <div className="flex p-2 flex-wrap justify-center items-center h-full">
                  <div
                    className="w-10 h-10 rounded-full bg-defaultth m-2"
                    onClick={() => {
                      settheme("default");
                      setcolorpickermenu(!colorpickermenu);
                      update("default");
                    }}
                  ></div>
                  <div
                    className="w-10 h-10 rounded-full bg-redth m-2"
                    onClick={() => {
                      settheme("red");
                      setcolorpickermenu(!colorpickermenu);
                      update("red");
                    }}
                  ></div>
                  <div
                    className="w-10 h-10 rounded-full bg-greenth m-2"
                    onClick={() => {
                      settheme("green");
                      setcolorpickermenu(!colorpickermenu);
                      update("green");
                    }}
                  ></div>
                  <div
                    className="w-10 h-10 rounded-full bg-pinkth m-2"
                    onClick={() => {
                      settheme("pink");
                      setcolorpickermenu(!colorpickermenu);
                      update("pink");
                    }}
                  ></div>
                  <div
                    className="w-10 h-10 rounded-full bg-darkth m-2"
                    onClick={() => {
                      settheme("dark");
                      setcolorpickermenu(!colorpickermenu);
                      update("dark");
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>
          <div
            className="rounded-full w-11 bg-white flex justify-center items-center text-xl"
            onClick={toggleMenu}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="p-[15px] mt-6 text-white font-dosis text-2xl overflow-scroll h-full">
          <p
            onClick={toggleMenu}
            className="mb-[13px] border-b border-b-gray-50/25"
          >
            <Link to="/">{t("home")}</Link>
          </p>
          <p
            onClick={toggleMenu}
            className="mb-[13px] border-b border-b-gray-50/25"
          >
            {" "}
            <Link to="/About">{t("about_us")}</Link>
          </p>
          <div onClick={toggleAdminSubMenu} className={`mb-[13px] adminsubc`}>
            <div
              className={`${AdminMenu ? "arrow" : "arrow-down"
                } border-b border-b-gray-50/25`}
            >
              {t("administration")}
            </div>
            <div className="ml-8" id="admin">
              <ul className="pt-3">
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to="/BOG">{t("bog")}</Link>
                </li>
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to="/Director">{t("director")}</Link>
                </li>
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to="/Registrar">{t("registrar")}</Link>
                </li>
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to="/Senate">{t("senate")}</Link>
                </li>
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to="/Dean">{t("dean")}</Link>
                </li>
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to="/Building">{t("bwc")}</Link>
                </li>
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to="/Finance">{t("finance")}</Link>
                </li>
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to="/Reports">{t("reports")}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            onClick={toggleAcademicSubMenu}
            className={`mb-[13px] academicsubc`}
          >
            <div
              className={`${AcademicsMenu ? "arrow" : "arrow-down"
                } border-b border-b-gray-50/25`}
            >
              {t("academics")}
            </div>
            <div className="ml-8" id="academic">
              <ul className="pt-3">
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to="/Academics">{t("academic_calender")}</Link>
                </li>
                <li className={`mb-[13px] border-b border-b-gray-50/25`}>
                  <Link to="/Dissertation">{t("dissertation")}</Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="mb-[13px] border-b border-b-gray-50/25">
            <Link to="/Departments">{t("dept")}</Link>
          </p>
          <p className="mb-[13px] border-b border-b-gray-50/25">
            <Link to="/Research">{t("research")}</Link>
          </p>
          <p className="mb-[13px] border-b border-b-gray-50/25">
            <Link to="/Traning&Placement">{t("t_p")}</Link>
          </p>
          {/* <p  className="mb-[13px]"><Link to="/Research" >Students</Link></p> */}
          <p className="mb-[13px] border-b border-b-gray-50/25">
            <Link to="/Alumni">{t("alumni")}</Link>
          </p>
          <p className="mb-[13px] border-b border-b-gray-50/25">
            <Link to="/Noneofourbussiness">{t("feepay")}</Link>
          </p>
          <p className="mb-[13px] border-b border-b-gray-50/25">{t("mis")}</p>
        </div>
      </nav>

      <div
        className={` h-[50px] px-4 py-3 flex justify-between items-center bg-${theme}th text-white text-xs`}
      >
        <LanguageTranslator />
        <div className=" flex items-center font-bold">
          <Link href="">
            <div className="relative">
              <div
                className="rounded-full hidden lg:flex justify-center items-center px-2"
                onClick={() => {
                  setcolorpickermenu(!colorpickermenu);
                }}
              >
                {" "}
                <img src={colorpicker} alt="colorpicker" className="w-[30px]" />
              </div>

              {
                <div
                  className={`${colorpickermenu ? "translate-y-0" : "-translate-y-96"
                    } transform duration-300 hidden lg:flex lg:absolute left-1/2 -translate-x-1/2 z-30 bg-gray-100 h-48 w-56 rounded-lg border flex-col content-center`}
                >
                  <p className="text-center p-2 border rounded-lg text-black">
                    Choose Theme
                  </p>
                  <div className="flex p-2 flex-wrap justify-center items-center h-full">
                    <div
                      className="w-10 h-10 rounded-full bg-defaultth m-2"
                      onClick={() => {
                        settheme("default");
                        setcolorpickermenu(!colorpickermenu);
                        update("default");
                      }}
                    ></div>
                    <div
                      className="w-10 h-10 rounded-full bg-redth m-2"
                      onClick={() => {
                        settheme("red");
                        setcolorpickermenu(!colorpickermenu);
                        update("red");
                      }}
                    ></div>
                    <div
                      className="w-10 h-10 rounded-full bg-greenth m-2"
                      onClick={() => {
                        settheme("green");
                        setcolorpickermenu(!colorpickermenu);
                        update("green");
                      }}
                    ></div>
                    <div
                      className="w-10 h-10 rounded-full bg-pinkth m-2"
                      onClick={() => {
                        settheme("pink");
                        setcolorpickermenu(!colorpickermenu);
                        update("pink");
                      }}
                    ></div>
                    <div
                      className="w-10 h-10 rounded-full bg-darkth m-2"
                      onClick={() => {
                        settheme("dark");
                        setcolorpickermenu(!colorpickermenu);
                        update("dark");
                      }}
                    ></div>
                  </div>
                </div>
              }
            </div>
          </Link>
          <a href="" className=" pr-[10px] ">
            {t("gian")}
          </a>
          <a className=" pr-[10px] ">Tenders</a>

          <Link to="/login" className="pr-[10px]">
            {t("login")}
          </Link>
          <a>
            <img
              src={FormatSize}
              alt="format size"
              className="inline-flex pr-[10px]"
            />
          </a>
        </div>
      </div>

      <header className=" sticky top-0 z-20">
        <div
          className={`h-[70px] lg:h-[90px] bg-${theme}bg px-2 flex justify-around shadow-lg z-20 lg:hidden bg-whitebg`}
        >
          <img
            onClick={toggleMenu}
            src={menu}
            alt="Menu"
            className={`${theme === "dark" ? "invert" : ""} pr-5`}
          />
          <Link to={"/"} className="flex flex-col justify-center align-center">
            {theme === "dark" ? (
              <img
                src="/logo_color_redesigned.png"
                // src="/logo_color_5.png"
                alt="Nit Goa Logo"
                className="scale-[1.1]"
              ></img>
            ) : (
              <img src="/logo_color_5.png" alt="Nit Goa Logo" className="scale-[1.1] max-h-[50px]"></img>
            )}
          </Link>
          <img
            src={searchicon}
            alt="Search"
            className={`${theme === "dark" ? "invert" : ""} w-[18px] ml-5`}
            onClick={toggleMenu}
          ></img>
        </div>

        {/* Desktop  */}
        <div
          className={`hidden lg:flex lg:flex-col bg-${theme}bg shadow-lg pt-5 items-center w-full justify-center `}
        >
          {theme === "dark" ? (
            <img
              src="/logo_color_redesigned.png"
              alt="NIT Goa Logo"
              className={` transition-transform	ease-in-out duration-150 w-[30rem] `}
            />
          ) : (
            <img
              src="/logo_color_5.png"
              alt="NIT Goa Logo"
              className={` transition-transform	ease-in-out duration-150 w-[30rem]`}
            />
          )}
          {/* <img src={divider} alt="divider" className="mx-2" /> */}
          {/* <div className="flex flex-col justify-center text-2xl whitespace-nowrap mr-3">
            <p>राष्ट्रीय प्रौद्योगिकी संस्थान</p>
            <p>National Institute of Technology</p>
          </div> */}

          <div className="w-full">
            <ul className={`flex gap-[23px] items-center justify-center p-[10px] font-dosis text-md  bg-blue-950 text-white `}>
              <Link to="/">
                <li>{t("home")}</li>
              </Link>
              {/* <Link to="/About">
                <li>{t("about_us")}</li>
              </Link> */}
              <div
                className="relative cursor-pointer"
                onMouseOver={() => {
                  setMenu1(true);
                }}
                onMouseLeave={() => {
                  setMenu1(false);
                }}
              >
                <li>
                  {t("Collection")} <i className="fa-solid fa-caret-down 	"></i>
                </li>
                <ul
                  className={` ${Menu1 ? "absolute" : "hidden"
                    } z-100 bg-${theme}txtbg text-${theme}txtth flex flex-col justify-center rounded-md px-2 pb-2 whitespace-nowrap	shadow-lg`}
                >
                  <Link
                    className={`border-b hover:text-blue-500 p-2`}
                    to="/Bog"
                  >
                    Board of Governors
                  </Link>
                  <Link
                    className="border-b  hover:text-blue-500 p-2"
                    to="/Director"
                  >
                    Director
                  </Link>
                  <Link
                    className="border-b hover:text-blue-500 p-2"
                    to="/Registrar"
                  >
                    Registrar
                  </Link>
                  <Link
                    className="border-b hover:text-blue-500 p-2"
                    to="/Senate"
                  >
                    Senate
                  </Link>
                  <Link className="border-b hover:text-blue-500 p-2" to="/Dean">
                    Deans
                  </Link>
                  <Link className="border-b hover:text-blue-500 p-2" to="/Committee">
                    Committees
                  </Link>
                  <Link
                    className="border-b hover:text-blue-500 p-2"
                    to="/Building"
                  >
                    Building and Works Committee
                  </Link>
                  <Link
                    className="border-b hover:text-blue-500 p-2"
                    to="/Finance"
                  >
                    Finance
                  </Link>
                  <Link className="hover:text-blue-500 p-2" to="/Reports">
                    Reports
                  </Link>
                </ul>
              </div>
              <div
                className="relative cursor-pointer"
                onMouseOver={() => {
                  setMenu2(true);
                }}
                onMouseLeave={() => {
                  setMenu2(false);
                }}
              >
                <li>
                  {t("E-Collection")} <i className="fa-solid fa-caret-down"></i>
                </li>
                <ul
                  className={` ${Menu2 ? "absolute" : "hidden"
                    } z-100  bg-${theme}txtbg text-${theme}txtth flex flex-col justify-center rounded-md  px-2 pb-2 whitespace-nowrap	border shadow`}
                >
                  <Link
                    className="border-b hover:text-blue-500 p-2"
                    to="/Academics"
                  >
                    {t("Academic Calendar")}
                  </Link>
                  <Link className="hover:text-blue-500 p-2" to="/Dissertation">
                    {" "}
                    {t("Dissertation")}
                  </Link>
                  <Link className="hover:text-blue-500 p-2" to="/Library">
                    {" "}
                    {t("Library")}
                  </Link>
                </ul>
              </div>

              <div
                className="relative cursor-pointer"
                onMouseOver={() => {
                  setMenu4(true);
                }}
                onMouseLeave={() => {
                  setMenu4(false);
                }}
              >
                <li>
                  {t("MHRD Digital Initiatives")} <i className="fa-solid fa-caret-down"></i>
                </li>
                <ul
                  className={` ${Menu4 ? "absolute" : "hidden"
                    } z-100  bg-${theme}txtbg text-${theme}txtth flex flex-col justify-center rounded-md  px-2 pb-2 whitespace-nowrap	border shadow`}
                >
                  <Link
                    className="border-b hover:text-blue-500 p-2"
                    to="/BTech"
                  >
                    {t("BTech")}
                  </Link>
                  <Link className="hover:text-blue-500 p-2 border-b" to="/MTech">
                    {" "}
                    {t("MTech")}
                  </Link>
                  <Link className="hover:text-blue-500 p-2 border-b" to="/PhD">
                    {" "}
                    {t("PhD")}
                  </Link>
                  <Link className="hover:text-blue-500 p-2 border-b" to="/Fee_Structure">
                    {" "}
                    {t("Fee Structure")}
                  </Link>
                  <div className="hover:text-blue-500 p-2" to="/Hostels">
                    {" "}
                    {t("Hostels")}
                  </div>
                </ul>
              </div>

              <Link to="/Traning&Placement">
                <p>{t("About")}</p>
              </Link>





              <div
                className="relative cursor-pointer"
                onMouseOver={() => setMenuResearch(true)}
                onMouseLeave={() => setMenuResearch(false)}
              >
                <li>
                  {t("Learning and Research Support")} <i className="fa-solid fa-caret-down"></i>
                </li>
                <ul
                  className={`${menuResearch ? "absolute" : "hidden"
                    } z-100 bg-${theme}txtbg text-${theme}txtth flex flex-col justify-center rounded-md px-2 pb-2 whitespace-nowrap border shadow`}
                >
                  <Link className="border-b hover:text-blue-500 p-2" to="/Research">
                    {t("Plagiarism Check")}
                  </Link>
                  <Link className="hover:text-blue-500 p-2" to="/MoUs">
                    {t("Learning and Research Tools")}
                  </Link>
                </ul>
              </div>









              <Link to="/services">
                <li>{t("Services")}</li>
              </Link>
              <Link to="/library_catalog">
                <li>{t("Library Catalogue")}</li>
              </Link>
              <Link to="/contact_us">
                <li>{t("Contact Us")}</li>
              </Link>
              <Link to="/nitgoa_irins">
                <li>{t("NIT Goa IRINS")}</li>
              </Link>
              {/* <Link to="/MISPortal">
                <li>{t("MIS Portal")}</li>
              </Link> */}

              {/* <div
                onMouseOver={() => {
                  setMenu3(true);
                }}
                onMouseLeave={() => {
                  setMenu3(false);
                }}>
                <li>{t("Departments")} <i className="fa-solid fa-caret-down"></i></li>
                <ul
                  className={` ${Menu3 ? "absolute" : "hidden"
                    } z-100  bg-${theme}txtbg text-${theme}txtth flex flex-col justify-center rounded-md  px-2 pb-2 whitespace-nowrap	border shadow`}
                >
                  <Link
                    className="border-b hover:text-blue-500 p-2"
                    to="/Computer_Science_Engineering"
                  >
                    {t("Computer Science Engineering")}
                  </Link>
                  <Link
                    className="border-b hover:text-blue-500 p-2"
                    to="/Electronics_and_Communication_Engineering"
                  >
                    {t("Electronics and Communication Engineering")}
                  </Link>
                  <Link
                    className="border-b hover:text-blue-500 p-2"
                    to="/Electrical_and_Electronics_Engineering" >
                    {t("Electrical and Electronics Engineering")}
                  </Link>
                  <Link
                    className="border-b hover:text-blue-500 p-2"
                    to="/Mechanical_Engineering"
                  >
                    {t("Mechanical Engineering")}
                  </Link>
                  <Link
                    className="border-b hover:text-blue-700 p-2"
                    to="/Civil_Engineering"
                  >
                    {t("Civil Engineering")}
                  </Link>
                </ul>
              </div> */}


            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
