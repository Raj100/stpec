import { useContext } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AppContext } from "../Components/AppContext";
import { Link } from "react-router-dom";
import Rectangle41 from "../assets/Rectangle41.png";

const Academics = () => {
  const { theme } = useContext(AppContext);

  const cards = [
    {
      semester: "ODD Semester",
      year: "2024-25",
      programs: "For B.Tech, M.Tech & Ph.D (First Year)",
      href: "https://www.nitgoa.ac.in/static/Academic%20Calander_I%20Yr%20ODD%20Sem%2023july2024.pdf",
    },
    {
      semester: "EVEN Semester",
      year: "2023-24",
      programs: "For B.Tech, M.Tech & Ph.D (All Semesters)",
      href: "https://www.nitgoa.ac.in/static/ACADEMIC_CALENDAR_EVEN_Semester_of_AY_2023-24_20dec2023.pdf",
    },
    {
      semester: "ODD Semester",
      year: "2024-25",
      programs: "For B.Tech, M.Tech & Ph.D (Higher Semesters)",
      href: "https://www.nitgoa.ac.in/static/ACADEMIC_CALENDAR_ODD_Semester_of_AY_2024-25_20dec2023.pdf",
    },
    {
      semester: "Closed Holidays",
      year: "2024",
      programs: "All",
      href: "https://www.nitgoa.ac.in/static/List_of_Holidays_2024_20dec2023.pdf",
    },
  ];
  

  return (
    <div>
      <Navbar />
      <div className={`font-dosis bg-${theme}bg pt-12 text-${theme}txt`}>
      <h1 className="text-center font-bold text-2xl">Academic Calendar</h1>
      <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center mx-auto mt-4 gap-4 px-4 lg:gap-10 pt-10 lg:px-20">
        {cards.map((card, index) => (
          <a href={card.href} target="_blank" rel="noopener noreferrer" key={index} className="m-5 w-full h-full">
            {/* <img src={Rectangle41} className="w-full" alt="Academic Calendar" /> */}
            <div className={`h-24 bg-${theme}th text-white p-3 rounded-b-xl flex flex-col justify-between`}>
              <div className="flex justify-between items-center">
                <p className="font-bold text-lg">{card.semester}</p>
                <p className=" text-normal">{card.year}</p>
              </div>
              {card.programs && <p className="">{card.programs}</p>}
            </div>
          </a>
        ))}
      </div>
    </div>

      <Footer />
    </div>
  );
};

export default Academics;
