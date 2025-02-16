import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { fetchSlides } from '../features/Slides/slidesSlice';
import { AppContext } from "./AppContext";
import slideshow1 from "../assets/Slideshow/DJI_20240503162513_0060_D.jpg";
import slideshow2 from "../assets/Slideshow/DJI_20240822165844_0080_D.jpg";
import slideshow3 from "../assets/Slideshow/DJI_20240822170528_0084_D.jpg";
import video from "../assets/Slideshow/DJI_20240922154154_027.mp4";
import bg_1 from "../assets/Slideshow/bg-1.jpg";
import bg_2 from "../assets/Slideshow/bg-2.jpg";
import bg_3 from "../assets/Slideshow/bg-3.jpg";
import bg_4 from "../assets/Slideshow/bg-4.jpg";
import bg_5 from "../assets/Slideshow/bg-5.jpg";
import bg_6 from "../assets/Slideshow/bg-6.jpg";
import bg_7 from "../assets/Slideshow/bg-7.jpg";
import bg_8 from "../assets/Slideshow/bg-8.jpg";
import bg_9 from "../assets/Slideshow/bg-9.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Announcement.css";
import NIT from '../assets/New/NIT_Goa.jpg'
import Dudhsagar from "../assets/New/Dudhsagar_Falls_Triplet.jpg";
import PVPanels from "../assets/New/pv_panels.jpg";
import PVPanels2 from "../assets/New/pv_panels_2.jpg";
const SlideShow = () => {
  const { theme } = useContext(AppContext);
  const slides = useSelector((state) => state.slides.slides);
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);

  useEffect(() => {
    dispatch(fetchSlides());
  }, [dispatch]);

  const handleVideoLoaded = (event) => {
    const duration = event.target.duration * 1000;
    // console.log(duration);
    setVideoDuration(duration - 100);
  };

  return (
    <div className={`bg-${theme}bg h-[211px] lg:h-[459px] pt-4 relative overflow-hidden `}>
      {/* // <div className={`bg-${theme}bg h-[211px] lg:h-[5] pt-[22px] relative overflow-hidden `}> */}
      {slides && (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: slides[index]?.type === "video" ? videoDuration : 20000,
            disableOnInteraction: false,
            waitForTransition: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
        >
          <SwiperSlide>
            <>
              <video
                className="object-cover h-full !w-screen"
                autoPlay
                muted
                loop
                onLoadedMetadata={handleVideoLoaded}
              >
                <source src={video} type="video/mp4" />
              </video>
              {/* <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
                    {slide.description}
                  </div> */}
              <div className="absolute flex w-full h-full p-4 bg-black bg-opacity-40">
                <div className="hidden lg:flex w-1/2 h-full bg-black rounded-xl text-white bg-opacity-40 text-left">
                  <div className="flex flex-col p-4 h-full w-full">
                    <h1 className="text-3xl font-bold text-center">Important Dates</h1>
                      <ul className="list-none text-2xl flex flex-col h-full justify-evenly">
                        <li>Paper Submission Opens: 01 Feb, 2025</li>
                        <li>Deadline for Full Paper Submission: 31 May, 2025</li>
                        <li>Notification of Acceptance: 31 July, 2025</li>
                      </ul>
                  </div>
                </div>
              </div>

            </>
          </SwiperSlide>
          <SwiperSlide>
            <>
              {/* <img 
                    src={NIT} 
                    className=" inset-0 bg-cover bg-center w-full h-screen" 
                    alt=""
                  /> */}
              <div className="relative h-full w-full">
                <img
                  src={PVPanels}
                  alt="NIT Goa"
                  className="object-cover h-full !w-screen"
                />
              <div className="absolute flex w-full h-full bg-black bg-opacity-40"></div>
              </div>
            </>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative h-full">
                <img
                  src={PVPanels2}
                  alt="Dudhsagar_Falls_Triplet"
                  className="object-cover h-full !w-screen"
                />
                <div className="z-100 absolute w-full h-full bg-black bg-opacity-40"></div>

              </div>
          </SwiperSlide>
           {/* <SwiperSlide>
            <>
              <img 
                    src={NIT} 
                    className=" inset-0 bg-cover bg-center w-full h-screen" 
                    alt=""
                  />
              
              <div className="relative h-full">
                <img
                  src={Dudhsagar}
                  alt="Dudhsagar_Falls_Triplet"
                  className="object-cover h-full !w-screen"
                />
              </div>
            </>
          </SwiperSlide>  */}

          {/* ))} */}
        </Swiper>
      )}
    </div>
  );
};

export default SlideShow;
