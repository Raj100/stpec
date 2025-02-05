import React, { useContext, useState, useRef, useEffect } from "react";
import { AppContext } from "./AppContext";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Twitter from '../assets/twitter.png';
import LinkedIn from '../assets/linkedin.png';
import Insta from '../assets/insta.png';
import './Footer.css';
import IndiaGov from '../assets/indiagov.png';
import DigitalIndia from '../assets/digitalindia.png';
import MakeInIndia from '../assets/makeinindia.png';
import DataGov from '../assets/datagov.png';
import Location from '../assets/Location.png';
import Web from '../assets/Web.png';
import Phone from '../assets/Phone.png';
import Fax from '../assets/Fax.png';
import feeStructure from '../assets/fee_structure_23-24_25july2023.pdf';
import IEEE from '../assets/New/IEEE_logo.svg'
import IAS from '../assets/New/ias.webp'
import PELS from '../assets/New/powerelectronics1.png'
import IELS from '../assets/New/IEEE-IES-Logo-Color-RGB-72ppi.webp'

const Footer = () => {
  const { t } = useTranslation();
  const { theme } = useContext(AppContext);
  const [activeSection, setActiveSection] = useState(null);
  const footRef = useRef();

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (footRef.current && !footRef.current.contains(event.target)) {
        setActiveSection(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [footRef]);

  const footerSections = [
    { id: "quicklink", title: t("quicklink"), items: [
      { text: "Home", link: "/About" },
      { text: "Organising Commitee", link: "/Academics" },
      { text: "Advisory Committee", link: "https://www.mis.nitgoa.ac.in/misnitgoa/result.aspx" },
      { text: "Submission", link: "https://forms.gle/Rvv3KaZ4VkbKhSLi7" },
      { text: "Registration", link: "/login" },
      { text: "Keynote Speakers", link: "/Dissertation" },
      { text: "Tutorials", link: "/edownloads" },
      { text: "Contact Us", link: "/about" },
      { text: "Sponsorship", link: "/Academics" },
      { text: "In and around Goa", link: "/rti" },
      { text: "Stay", link: "/Academics" },
      { text: "IEEE", link: "https://www.ieee.org/" },
    ]},
    { id: "info", title: t("info"), items: [
      { text: "IEEE", link: "/Faculty" },
      { text: "IAS", link: "/Staff/Technical_Staff" },
      { text: "NIT", link: "/BTech/JOSAA_CSAB" },
      { text: "ICES", link: "/BTech/Facilities" },
      { text: "PELS", link: "/fee_structure_23-24_25july2023.pdf" },
      { text: "NIRF", link: "/nirf" },
    ]},
    { id: "natpor", title: "Sponsors", items: [
      { img: IEEE, alt: "india.gov.in", link: "https://www.ieee.org/" },
      { img: IAS, alt: "Digital India", link: "https://ias.ieee.org/" },
      { img: IELS, alt: "Make In India", link: "https://www.ieee-ies.org/" },
      { img: PELS, alt: "Data Government", link: "https://www.ieee-pels.org/" },
    ]},
    { id: "contact", title: t("contact_us"), items: [
      { img: Location, text: "National Institute of Technology Goa, Kottamoll Plateau, Cuncolim Municipal Area, Salcete Taluka, South Goa District, Goa - 403703" },
      { img: Web, text: "Website: www.nitgoa.ac.in" },
      { img: Phone, text: "Phone: [0832] 2404200 (PA to Director)" },
      { img: Fax, text: "Fax: [0832] 2404202" },
    ]},
  ];

  const socialIcons = [
    { img: Twitter,link:"https://x.com/NITGoa_Official" ,alt: "Twitter" },
    { img: LinkedIn,link: "https://www.linkedin.com/school/nitgoa/posts/?feedView=all", alt: "LinkedIn" },
    { img: Insta,link: "https://www.instagram.com/nitgoa/?hl=en", alt: "Instagram" },
  ];

  const renderSectionContent = (section) => {
    if (section.id === "natpor") {
      return (
        <ul className="space-y-4">
          {section.items.map((item, index) => (
            <li key={index} className="flex">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.img} alt={item.alt} className="h-12" />
              </a>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <ul className={`space-y-2 ${section.id === "quicklink" ? "grid grid-cols-1 md:grid-cols-2 gap-2" : ""}`}>
        {section.items.map((item, index) => (
          <li key={index}>
            {item.link ? (
              <Link to={item.link} className="text-sm hover:underline">{item.text}</Link>
            ) : (
              <div className="flex items-center space-x-2">
                <img src={item.img} alt="" className="w-6 h-6 mt-1 flex-shrink-0" />
                <span className="text-sm">{item.text}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <footer ref={footRef} className={`bg-${theme === 'dark' ? 'gray-800' : '[#DDEDF4]'} text-${theme === 'dark' ? 'white' : 'gray-800'} font-dosis relative z-10`}>
        <div className="container mx-auto px-4 py-8">
          {/* Mobile Footer */}
          <div className="md:hidden">
            {footerSections.map((section) => (
              <div key={section.id} className="mb-4">
                <button
                  className={`w-full py-3 px-4 text-left text-sm font-medium bg-${theme}th text-white rounded-lg transition-colors duration-200 ease-in-out hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                  onClick={() => toggleSection(section.id)}
                >
                  {section.title}
                </button>
                <div 
                  className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeSection === section.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 bg-white rounded-lg shadow-md">
                    {renderSectionContent(section)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Footer */}
          <div className="hidden md:grid md:grid-cols-5 gap-8">
            {footerSections.map((section) => (
              <div key={section.id} className={section.id === "quicklink" ? "col-span-2" : ""}>
                <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                {renderSectionContent(section)}
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mt-8">
            {socialIcons.map((social, index) => (
              <Link target="_blank" to={social.link} key={index}  className="hover:underline">
              <div className={`w-12 h-12 rounded-full bg-${theme}th flex items-center justify-center`}>
                <img src={social.img} alt={social.alt} className="w-6 h-6" />
              </div>
              </Link>
            ))}
          </div>

          {/* Visit Counter */}
          <div className={`flex justify-center items-center mt-8 mb-4`}>
            <span className={`px-4 py-2 bg-${theme}th text-white rounded-full text-sm`}>
              {t("visit")}: <span id="counter">80</span>
            </span>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs mt-8">
            <p>© 2024 NIT GOA - ALL RIGHTS RESERVED</p>
            <p className="mt-2">
              <Link to="/" className="hover:underline">TERMS & CONDITIONS</Link> |{" "}
              <Link to="/" className="hover:underline">PRIVACY POLICY</Link> |{" "}
              <Link to="/" className="hover:underline">HYPERLINKING POLICY</Link> |{" "}
              <Link to="/" className="hover:underline">COPYRIGHT</Link>
            </p>
          </div>
        </div>


      </footer>

      <div className={`hidden border-2 border-white rounded-lg w-24	my-2 flex justify-center m-auto text-redth  text-greenth  text-darkth text-defaultth text-pinkth text-darkbg bg-darkbg text-darktxt text-defaulttxt text-redtxt text-pinktxt text-greentxt bg-defaulttxtbg bg-redtxtbg bg-greentxtbg bg-pinktxtbg bg-darktxtbg text-defaulttxtth text-redtxtth text-greentxtth text-pinktxtth text-darktxtth bg-defaultbg bg-greenbg bg-pinkbg bg-redbg bg-darkbg text-darktxtth text-darkth bg-${theme}txt bg-darktxt bg-greentxt bg-redtxt bg-defaulttxt bg-pinktxt  text-redtxtbg  text-darktxtbg  text-greentxtbg  text-pinktxtbg  text-redtxtbg  text-defaulttxtbg bg-green-200 bg-blue-200 bg-lime-500 bg-red-500 bg-gray-800 bg-[#DDEDF4] border-dark border-${theme}txtbg border-darktxtbg `}/>

    </>
  );
};

export default Footer;
