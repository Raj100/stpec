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
  const [Menu2sub1, setMenu2sub1] = useState(false);
  const [Menu4sub1, setMenu4sub1] = useState(false)
  const [Menu4sub2, setMenu4sub2] = useState(false)
  const [Menu4sub3, setMenu4sub3] = useState(false)
  // const [scrollPosition, setScrollPosition] = useState(0);
  const [menuResearch, setMenuResearch] = useState(false);
  const [menuPeople, setMenuPeople] = useState(false);


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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const position = window.scrollY;
  //     setScrollPosition(position);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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
              </ul>
            </div>
          </div>

          <p className="mb-[13px] border-b border-b-gray-50/25">
            <Link to="/Topics">{t("Topics")}</Link>
          </p>
          <p className="mb-[13px] border-b border-b-gray-50/25">
            <Link to="/Timeline">{t("Timeline")}</Link>
          </p>
          <p className="mb-[13px] border-b border-b-gray-50/25">
            <Link to="/Submission">{t("Submission")}</Link>
          </p>
          {/* <p  className="mb-[13px]"><Link to="/Research" >Students</Link></p> */}
          <p className="mb-[13px] border-b border-b-gray-50/25">
            <Link to="/Registration">{t("Registration")}</Link>
          </p>
          <p className="mb-[13px] border-b border-b-gray-50/25">
            <Link to="/Keynote Speakers">{t("Keynote Speakers")}</Link>
          </p>
          <p className="mb-[13px] border-b border-b-gray-50/25">
            <Link to="/Sponsorship">{t("Sponsorship")}</Link>
          </p>
          <p className="mb-[13px] border-b border-b-gray-50/25">
            <Link to="/In_and_around_Goa">{t("In and around Goa")}</Link>
          </p>
          <p className="mb-[13px] border-b border-b-gray-50/25">
            <Link to="/Stay">{t("Stay")}</Link>
          </p>
          <p className="mb-[13px] border-b border-b-gray-50/25">
            <Link to="/Contact">{t("Contact")}</Link>
          </p>
          <p className="mb-[13px] border-b border-b-gray-50/25">{t("mis")}</p>
        </div>
      </nav>

      <div
        className={` h-[50px] px-4 py-1 flex justify-between items-center bg-${theme}th text-white text-xs`}
      > 
      <div></div>
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
          {/* <a href="" className=" pr-[10px] ">
            {t("gian")}
          </a> */}
          {/* <a className=" pr-[10px] ">Tenders</a> */}

          {/* <Link to="/login" className="pr-[10px]">
            {t("login")}
          </Link> */}
          <a>
            <img
              src={FormatSize}
              alt="format size"
              className="inline-flex pr-[10px]"
            />
          </a>
          <LanguageTranslator />
        </div>
      </div>

      <header className=" sticky top-0 z-20">
        <div
          className={`h-[70px] lg:h-[90px] bg-${theme}bg px-2 flex justify-around shadow-lg z-20 lg:hidden bg-whitebg overflow-hidden`}
        >
          <img
            onClick={toggleMenu}
            src={menu}
            alt="Menu"
            className={`${theme === "dark" ? "invert" : ""} pr-5 w-[50px]`}
          />
          <Link to={"/"} className=" flex flex-col justify-center align-center grow w-full">
            {theme === "dark" ? (
              <img
                src="/logo_color_redesigned.png"
                // src="/logo_color_5.png"
                alt="Nit Goa Logo"
                className="scale-[1.1]"
              ></img>
            ) : (
              <div className=" flex align-center justify-center">
                <img src="/logo_color_5.png" alt="Nit Goa Logo" className="scale-[1.1] max-h-[50px]"></img>
              </div>
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
            <ul className="list-none">
            
            <div className={`flex gap-[23px] items-center justify-center p-[10px] font-dosis text-md bg-blue-950 text-white`}>
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
                  {t("Committee")} <i className="fa-solid fa-caret-down"></i>
                </li>
                <ul className={` ${Menu1 ? "absolute" : "hidden"} z-100 bg-${theme}txtbg text-${theme}txtth flex flex-col justify-center rounded-md px-2 pb-2 whitespace-nowrap border border-${theme}txtbg shadow-lg`}>

                  <Link className="border-b hover:text-blue-500 p-2" to="/Organising_Commitee">
                    Organising Committee
                  </Link>
                  <li className={`border-b hover:text-blue-500 p-2`}>
                    <Link to="/Advisory_Committee">{t("Advisory Committee")}</Link>
                  </li>
                </ul>
              </div>
              <Link to="/">
                <li>{t("Topics")}</li>
              </Link>
              <Link to="/">
                <li>{t("Timeline")}</li>
              </Link>
              <Link to="/">
                <li>{t("Submission")}</li>
              </Link>
              <Link to="/">
                <li>{t("Registration")}</li>
              </Link>
              <Link to="/">
                <li>{t("Keynote Speakers")}</li>
              </Link>
              <Link to="https://www.nitgoa.ac.in/placementcell">
                <p>{t("Sponsorship")}</p>
              </Link>
              {/* <Link to="https://www.nitgoa.ac.in/placementcell">
                <p>{t("Reach Goa")}</p>
              </Link> */}
              <Link to="/In_and_around_Goa">
                <p>{t("In and around Goa")}</p>
              </Link>
              <Link to="/Stay">
                <p>{t("Stay")}</p>
              </Link>
              <Link to="/Contact">
                <li>{t("Contact")}</li>
              </Link>
            </div>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
