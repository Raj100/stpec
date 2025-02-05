import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "./bod.css";
import { AppContext } from "../Components/AppContext";
import { useContext } from "react";

const BOG = () => {
  const { theme } = useContext(AppContext);
  return (
    <>
    <Navbar/>
    <div className="font-dosis">
      <div className="cont mt-8">
        <h2 className="font-bold text-xl">Board of Governors(BoG)</h2>
        <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
        <div className="w-full p-5 lg:px-20 flex items-center justify-center">
        <table className="mt-5 min-w-full border border-gray-200 divide-y divide-gray-300 bg-white shadow-md">
  <thead className="bg-gray-100">
    <tr>
      <th className="px-4 py-2 text-gray-600 font-semibold">Sr.No.</th>
      <th className="px-4 py-2 text-gray-600 font-semibold">NIT Act Sec.</th>
      <th className="px-4 py-2 text-gray-600 font-semibold">Position</th>
      <th className="px-4 py-2 text-gray-600 font-semibold">Name</th>
      <th className="px-4 py-2 text-gray-600 font-semibold">Designation</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    <tr>
      <td className="px-4 py-2 text-gray-800">1</td>
      <td className="px-4 py-2 text-gray-800">11(a)</td>
      <td className="px-4 py-2 text-gray-800">Chairperson</td>
      <td className="px-4 py-2 text-gray-800">Prof. O. R. Jaiswal</td>
      <td className="px-4 py-2 text-gray-800">In charge Chairman (Statute Sec.17 (15)) Director, National Institute of Technology Goa</td>
    </tr>
    <tr>
      <td className="px-4 py-2 text-gray-800">2</td>
      <td className="px-4 py-2 text-gray-800">11(b)</td>
      <td className="px-4 py-2 text-gray-800">Director, Ex-Officio Member</td>
      <td className="px-4 py-2 text-gray-800">Prof. O. R. Jaiswal</td>
      <td className="px-4 py-2 text-gray-800">Director, National Institute of Technology Goa</td>
    </tr>
    <tr>
      <td className="px-4 py-2 text-gray-800">3</td>
      <td className="px-4 py-2 text-gray-800" rowSpan={2}>11(c)</td>
      <td className="px-4 py-2 text-gray-800" rowSpan={2}>Two persons not below the rank of JS to the Govt. of India to be nominated by the Central Govt. from amongst persons dealing with tech. edu. And finance</td>
      <td className="px-4 py-2 text-gray-800">Mrs. Saumya Gupta</td>
      <td className="px-4 py-2 text-gray-800">Addnl Secretary/Jt. Secretary (Technical Education), MHRD, Govt. of India</td>
    </tr>
    <tr>
      <td className="px-4 py-2 text-gray-800">4</td>
      <td className="px-4 py-2 text-gray-800">Sh. Sanjog Kapoor</td>
      <td className="px-4 py-2 text-gray-800">Financial Advisor, Dept of Higher Education, MHRD, Govt. of India</td>
    </tr>
    <tr>
      <td className="px-4 py-2 text-gray-800">5</td>
      <td className="px-4 py-2 text-gray-800" rowSpan={2}>11(d)</td>
      <td className="px-4 py-2 text-gray-800" rowSpan={2}>Two persons nominated by the Govt. of the States in which the Institute is situated.</td>
      <td className="px-4 py-2 text-gray-800">Dr. Venkatesh Ganesh Prabhu Desai</td>
      <td className="px-4 py-2 text-gray-800">Chairman, Chandranath Education Society, Assolda, Quepem, Goa</td>
    </tr>
    <tr>
      <td className="px-4 py-2 text-gray-800">6</td>
      <td className="px-4 py-2 text-gray-800">Dr. Mahesh Dhavalikar</td>
      <td className="px-4 py-2 text-gray-800">Professor, Department of Mechanical Engineering, Goa Engineering College, Farmagudi, Ponda, Goa</td>
    </tr>
    <tr>
      <td className="px-4 py-2 text-gray-800">7</td>
      <td className="px-4 py-2 text-gray-800" rowSpan={2}>11(e)</td>
      <td className="px-4 py-2 text-gray-800" rowSpan={2}>Two persons at least one whom shall be a woman having special knowledge or practical experience in respect of education, engineering or science to be nominated by the council</td>
      <td className="px-4 py-2 text-gray-800">Vacant</td>
      <td className="px-4 py-2 text-gray-800">--</td>
    </tr>
    <tr>
      <td className="px-4 py-2 text-gray-800">8</td>
      <td className="px-4 py-2 text-gray-800">Vacant</td>
      <td className="px-4 py-2 text-gray-800">--</td>
    </tr>
    <tr>
      <td className="px-4 py-2 text-gray-800">9</td>
      <td className="px-4 py-2 text-gray-800" rowSpan={2}>11(f)</td>
      <td className="px-4 py-2 text-gray-800" rowSpan={2}>One Professor and one Assistant Professor or a Lecturer nominated by Senate</td>
      <td className="px-4 py-2 text-gray-800">Dr. Sreeraj E. S</td>
      <td className="px-4 py-2 text-gray-800">Associate Professor, Department of Electrical and Electronics Engineering</td>
    </tr>
    <tr>
      <td className="px-4 py-2 text-gray-800">10</td>
      <td className="px-4 py-2 text-gray-800">Dr. Mallikarjun Erramashetty</td>
      <td className="px-4 py-2 text-gray-800">Assistant Professor, Department of Electronics and Communication Engineering</td>
    </tr>
    <tr>
      <td className="px-4 py-2 text-gray-800">11</td>
      <td className="px-4 py-2 text-gray-800">11(g)</td>
      <td className="px-4 py-2 text-gray-800">Director of IIT in whose zone the Institute is located, or his nominee not below the rank of Professor</td>
      <td className="px-4 py-2 text-gray-800">Prof. B. G. Fernandes</td>
      <td className="px-4 py-2 text-gray-800">Professor & Head of Department of Electrical Engineering, IIT Bombay</td>
    </tr>
    <tr>
      <td className="px-4 py-2 text-gray-800">12</td>
      <td className="px-4 py-2 text-gray-800">18(2)</td>
      <td className="px-4 py-2 text-gray-800">Member Secretary</td>
      <td className="px-4 py-2 text-gray-800">Dr. Shashidhar K. Kudari</td>
      <td className="px-4 py-2 text-gray-800">Registrar, NIT Goa</td>
    </tr>
  </tbody>
        </table>

        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BOG;