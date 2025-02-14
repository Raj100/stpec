import { useContext, useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import { useTranslation } from "react-i18next";
// import { TwitterTweetEmbed } from "react-twitter-embed";
// import { TwitterTweetEmbed } from 'react-twitter-embed';
// import HomePageCaorusel from './HomePageCarousel/HomePageCarousel'
import Marquee from 'react-fast-marquee';
import "./Announcement.css";
import { useSelector, useDispatch } from 'react-redux';
import SlideShow from "./SlideShow";

import "./style.css";
import { fetchAnnouncements } from "../features/Announcement/announcement";
import { fetchNews } from "../features/News/newsSlice";
import { fetchNotices } from "../features/NoticeBoard/NoticeBoardSlice";
import { fetchTender } from "../features/Tenders/tendersSlide";
import Statistics from "./Statistics";
import NIT from '../assets/New/NIT_Goa.jpg'

const Announcement = () => {
  const { t } = useTranslation();
  const { theme } = useContext(AppContext);
  const [moto, setmoto] = useState(0);
  const [data, setdata] = useState(0);
  const dispatch = useDispatch();
  const announcement = useSelector((state) => state.announcements.announcements);
  const announcementsLoading = useSelector((state) => state.announcements.loading);
  const news = useSelector((state) => state.news.news);
  const { tender } = useSelector((state) => state.tender);
  const notices = useSelector((state) => state.notices.notices);
  const newsLoading = useSelector((state) => state.news.loading);
  const handlemoto = () => {
    console.log(moto);

    if (data === 0) {
      setmoto(340);
      setdata(40);
    } else if (data === 40) {
      setmoto(690);
      setdata(80);
    } else if (data === 80) {
      setmoto(0);
      setdata(0);
    }
  };

  // const slides = [
  //   { type: "image", image: slideshow1, description: "Description 1", accentColorLink: bg_1 },
  //   { type: "video", image: video, description: "Description 5", accentColorLink: bg_4 },
  //   { type: "image", image: slideshow2, description: "Description 2", accentColorLink: bg_2 },
  //   { type: "image", image: slideshow3, description: "Description 3", accentColorLink: bg_3 },
  //   { type: "image", image: slideshow4, description: "Description 4", accentColorLink: bg_4 },
  // ];


  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchAnnouncements());
      await dispatch(fetchNews());
      await dispatch(fetchNotices());
      await dispatch(fetchTender());
    };
    fetchData();
  }, [dispatch]);




  return (
    <div>
      <SlideShow></SlideShow>


      {/* <HomePageCaorusel className='h-40'/>     */}

      <div className={`bg-${theme}bg  pb-5 text-${theme}txt lg:px-10`}>
        <div className=" flex flex-col text-center justify-center">
          {/* <h1 className="font-dosis font-semibold	 text-lg 	">
            {t("announcement")}
          </h1>
          <div
            className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}
          ></div> */}
        </div>

        <div className="pt-[26px] lg:px-10">

          <div className="border-[#9F9F9F] border-[0.2px] my-2 mx-4"></div>

          <div className="flex items-center px-4 gap-3">
            <p className="hidden lg:block text-lg font-bold z-10 p-1 rounded-md">{t("announcement")}</p>
            <div className="hidden lg:block" >|</div>
            <Marquee pauseOnHover className=" lg:text-md p-1 flex-grow text-green-700">
              Program Schedule published. Poster & PPT Template are available... Extended versions of all presented papers will be eligible for further review and possible publication in IEEE Transactions on Industry Applications."......Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements
              {/* {t("announcement_content")} */}
              {/* {announcementsLoading &&
                (<p>Loading...</p>)
              } */}
              {/* <a href={announcement?.content}>{announcement[0]?.title}</a> */}
            </Marquee>
          </div>
          <div className="border-[#9F9F9F] border-[0.2px] my-2 mx-4"></div>
        </div>

        <div className="px-2">
          <div className="flex flex-col lg:px-10">
            <h1 className="text-center text-green-800 text-2xl font-bold p-2 ">IEEE International Conference on Smart Technologies for Power, Energy, and Control (STPEC)</h1>
            <div className="flex flex-col gap-4 text-lg">
              <div className="text-">The IEEE International Conference on Smart Technologies for Power, Energy, and Control (STPEC) is the flagship conference of the IEEE Bombay Section Joint Chapter of PELS/IES. Over the years, the conference has served as a premier platform for researchers and professionals worldwide.</div>
              <div>
                <p>The previous editions were successfully hosted in:</p>
                <ul>
                  <li>2020 - VNIT, Nagpur, India</li>
                  <li>2021 - CEC, Bilaspur, India</li>
                  <li>2023 - KIIT, Bhubaneswar, India</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:px-10">
            <div className="flex flex-col lg:flex-row gap-4 pt-8">
              <img src={NIT} className="lg:w-1/2 rounded-xl" alt="Nit goa" />
              <div>
                <p className="text-lg">The <strong> 4th STPEC</strong> is scheduled to be held at <strong>National Institute of Technology, Goa, India</strong> from <a className="text-green-700">December 10 - 13, 2025.</a> This conference is proudly <strong>financially sponsored</strong> by the IEEE Industry Applications Society (IAS) and the IEEE Power Electronics Society (PELS), and it is <strong>technically sponsored</strong> by the IEEE Industrial Electronics Society.</p>
              </div>
            </div>
          </div>
        </div>
        {/* <Statistics /> */}
      </div>
      <div className="hidden -translate-y-[0px] -translate-y-[40px] -translate-y-[80px] translate-x-[10px]  -translate-x-[340px] -translate-x-[341px] -translate-x-[690px]"></div>
    </div>
  );
};

export default Announcement;
