import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import './senate.css';
import { AppContext } from '../Components/AppContext';
import { useContext } from 'react';

const Senate = () => {
  const {theme} = useContext(AppContext);
  return (
    <>
      <Navbar/>
      <div className={`page font-dosis bg-${theme}bg text-${theme}txt h-auto`}>
        <div className={`mt-5 pb-3 bg-${theme}bg`}>
          <h2 className='text-xl font-bold text-center'>Senate</h2>
          <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
          <div className="tab">
  <table className="min-w-full bg-white border border-gray-300">
    <thead className="bg-gray-300">
      <tr>
        <th className="px-4 py-2 border-b text-left text-gray-600">S.No</th>
        <th className="px-4 py-2 border-b text-left text-gray-600">NIT Act</th>
        <th className="px-4 py-2 border-b text-left text-gray-600">Name</th>
        <th className="px-4 py-2 border-b text-left text-gray-600">Designation</th>
        <th className="px-4 py-2 border-b text-left text-gray-600">Position</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-4 py-2 border-b">1</td>
        <td className="px-4 py-2 border-b">Sec.14(a)</td>
        <td className="px-4 py-2 border-b">Prof. Omprakash Jaiswal</td>
        <td className="px-4 py-2 border-b">Director, NITGoa</td>
        <td className="px-4 py-2 border-b">Chairman Senate</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b">2</td>
        <td className="px-4 py-2 border-b">Sec.14(b)</td>
        <td className="px-4 py-2 border-b">--</td>
        <td className="px-4 py-2 border-b">Deputy Director</td>
        <td className="px-4 py-2 border-b">Member</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b">3</td>
        <td className="px-4 py-2 border-b">Sec.14(c)</td>
        <td className="px-4 py-2 border-b">--</td>
        <td className="px-4 py-2 border-b">The Professors appointed or recognized as such by the institute for the purpose of imparting instructions in the institute.</td>
        <td className="px-4 py-2 border-b">Member</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b">4</td>
        <td className="px-4 py-2 border-b" rowSpan={3}>Sec.14(d)</td>
        <td className="px-4 py-2 border-b">Prof. N. C. Shivaprakash</td>
        <td className="px-4 py-2 border-b">Professor, Department of Instrumentation, Indian Institute of Sciences, Bengaluru</td>
        <td className="px-4 py-2 border-b">External Member</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b">5</td>
        <td className="px-4 py-2 border-b">Prof. Vasant Matsagar</td>
        <td className="px-4 py-2 border-b">Dogra Chair Professor,<br/>Multi-Hazard Protective Structures (MHPS) Laboratory,<br/>Department of Civil Engineering,<br/>Indian Institute of Technology, Delhi</td>
        <td className="px-4 py-2 border-b">External Member</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b">6</td>
        <td className="px-4 py-2 border-b">Prof. Smita Jha</td>
        <td className="px-4 py-2 border-b">Professor,<br/>Department of Humanities & Social Science,<br/>Indian Institute of Technology, Roorkee.</td>
        <td className="px-4 py-2 border-b">External Member</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b">7</td>
        <td className="px-4 py-2 border-b">Sec.18(2)</td>
        <td className="px-4 py-2 border-b">Dr. Shashidhar K. Kudari</td>
        <td className="px-4 py-2 border-b">Registrar</td>
        <td className="px-4 py-2 border-b">Member Secretary</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b">8</td>
        <td className="px-4 py-2 border-b" rowSpan={2}>As per 20<sup>th</sup> BoG resolution of Item number A.3</td>
        <td className="px-4 py-2 border-b">--</td>
        <td className="px-4 py-2 border-b">All Deans</td>
        <td className="px-4 py-2 border-b">Member</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b">9</td>
        <td className="px-4 py-2 border-b">--</td>
        <td className="px-4 py-2 border-b">All HoDs</td>
        <td className="px-4 py-2 border-b">Member</td>
      </tr>
    </tbody>
  </table>
</div>



          <div className="max-w-md mx-auto p-4 my-4 rounded-lg shadow-lg">
            <h4 className="text-lg font-semibold text-center">Minutes of Senate Meeting</h4>
            <hr className="low-hr" />
            <div className="">
              <ul className="overflow-y-auto max-h-[400px] mx-auto text-center font-bold flex flex-col gap-4">
                {Array.from({ length: 26 }, (_, i) => i + 1).map((num) => (
                  <li key={num} className="border-2 border-gray-300 rounded-xl p-4 transition duration-200 hover:bg-gray-100">
                    <a 
                      href={`https://www.nitgoa.ac.in/static/Senate-${num}${num === 26 ? "" : "_MOM"}.pdf`} 
                      className="block w-full text-gray-700 hover:text-blue-500"
                    >
                      Senate-{num}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Senate;