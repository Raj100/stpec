import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useState, useEffect } from "react";
import slideshow1 from "../assets/Slideshow/slideshow1.jpeg";
import slideshow2 from "../assets/Slideshow/slideshow2.jpeg";
import slideshow3 from "../assets/Slideshow/slideshow3.jpg";
import slideshow4 from "../assets/Slideshow/slideshow4.jpg";
import logo from "../assets/NIT_Goa_logo.png";
import { Link } from "react-router-dom";

const Alumni = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [timer, setTimer] = useState(null);
  const [menu2, setMenu2] = useState(false); // Managing dropdown visibility

  const slides = [slideshow1, slideshow2, slideshow3, slideshow4]; // Assuming these variables hold image paths

  // Slide show logic
  useEffect(() => {
    const runShow = () => {
      setTimer(
        setTimeout(() => {
          setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000)
      );
    };

    runShow();
    return () => clearTimeout(timer); // Cleanup on unmount
  }, [slideIndex]);

  const stopShow = () => clearTimeout(timer);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Header */}
      <header className="bg-blue-900 py-4 border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-center">
          <img
            src={logo} // Assuming logo is an imported image
            alt="Logo"
            className="h-28 border-r border-white pr-4"
          />
          <div className="ml-4 text-center">
            <h1 className="text-2xl font-bold text-white">Alumni Association</h1>
            <p className="text-white font-semibold">
              National Institute of Technology Goa
            </p>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <div className="h-[70px] float-left border-r border-white pr-[10px]">
        <nav className="container mx-auto py-4">
          <ul className="flex justify-center space-x-6">
            <li className="hover:underline">
              <a href="index.html">Home</a>
            </li>
            <li className="relative group hover:underline">
              <div
                className="relative cursor-pointer z-10"
                onMouseOver={() => setMenu2(true)}
                onMouseLeave={() => setMenu2(false)}
              >
                <span>
                  About AANITG <i className="fa-solid fa-caret-down"></i>
                </span>
                <ul
                  className={`${
                    menu2 ? "absolute" : "hidden"
                  } z-100 bg-white flex flex-col justify-center rounded-md px-2 pb-2 whitespace-nowrap`}
                >
                  <Link className="border-b hover:text-blue-500 p-2" to="/Mission">
                    Mission
                  </Link>
                  <Link className="border-b hover:text-blue-500 p-2" to="/Constitution">
                    Constitution
                  </Link>
                  <Link className="border-b hover:text-blue-500 p-2" to="/BoardOfDirectors">
                    Board of Directors
                  </Link>
                </ul>
              </div>
            </li>
            <li className="hover:underline">
              <a href="pages/events.html">Events</a>
            </li>
            <li className="hover:underline">
              <a href="pages/gallery.html">Gallery</a>
            </li>
            <li className="hover:underline">
              <a href="pages/contact.html">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Slider */}
      <div className="container mx-auto w-[900px] h-[345px] mb-10">
        <div className="relative">
          <div className="slides rounded-lg border border-white p-2">
            <img
              src={slides[slideIndex]}
              alt="Slide"
              className="w-full h-96 object-cover rounded-lg border border-white p-2"
              onMouseOver={stopShow}
              onMouseOut={() =>
                setTimer(
                  setTimeout(() => setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length), 3000)
                )
              }
            />
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="container mx-auto mt-10 mb-10 flex gap-6 px-6 w-[900px] h-[300px]">
        {/* Left Side - Image */}
        <div className="rounded-lg shadow-lg w-1/2 h-full">
          <img src={logo} alt="Event Image" className="h-full w-full object-cover" />
        </div>

        {/* Right Side - News & Events */}
        <div className="w-1/2 h-full mb-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Latest News & Events</h2>
          <ul className="list-disc pl-4 text-gray-700">
            <li>
              All Alumni are requested to register on the NIT Goa Alumni page under the tag (Join: New registration).
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Alumni;