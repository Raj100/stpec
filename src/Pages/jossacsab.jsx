import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function JOSAA_CSAB() {
  return (
    <>
    <Navbar/>
    <div>
      <main className="bg-white flex flex-col top-0 items-center justify-center shadow-2xl sticky" id="main-header">
        <div className="m-10">
          <h1 className="text-2xl font-serif font-semibold text-gray-800">JoSAA/CSAB:</h1>
          <h1 className="text-2xl font-serif font-semibold text-gray-800">ADMISSION PROCEDURE</h1>
          <p>
            <strong>1. Joint Entrance Examination (Main)-2024</strong><br />
            Admission to Undergraduate Engineering Programs for the candidates from India at NITs, IIITs, Other centrally funded Technical Institutions shall include the performance in the class 12/other Qualifying Examination and in the Joint Entrance Examination, JEE (Main).
          </p>
          <p>
            <strong>For further details, please visit the following websites regularly for the latest updates in changes in the rules and regulations:</strong>
          </p>
          <p>
            <a href="http://josaa.nic.in/" target="_blank" className="text-blue-700"><strong>http://josaa.nic.in</strong></a>
          </p>
          <p>
            <a href="http://csab.nic.in/" target="_blank" className="text-blue-700"><strong>http://csab.nic.in</strong></a>
          </p>
          <p className="mt-4">
            <strong><u>List of B. Tech. Programmes:</u></strong>
          </p>
          <ul>
            <li><strong>Computer Science &amp; Engineering</strong></li>
            <li><strong>Electrical &amp; Electronics Engineering</strong></li>
            <li><strong>Electronics &amp; Communication Engineering</strong></li>
            <li><a href="Deptindex.aspx?page=a&amp;ItemID=20113&amp;nDeptID=31" target="_blank" className="link"><strong>Civil Engineering</strong></a></li>
            <li><a href="Deptindex.aspx?page=a&amp;ItemID=20114&amp;nDeptID=19" target="_blank" className="link"><strong>Mechanical Engineering</strong></a></li>
          </ul>
          <p className="mt-4">
            <strong>Important Links:</strong>
          </p>
          <p>
            <a href="../static/Revised Physical Reporting Schedule & Instructions for newly admitted B.Tech 6august2024.pdf" target="_blank" className="text-blue-700"><strong>Revised Physical Reporting Schedule & Instructions for newly admitted B.Tech. candidates through JoSAA & CSAB-2024 for the A.Y. 2024-25</strong></a>
          </p>
          <p>
            <a href="../static/JoSAA_2023_Online_Reporting_Schedule_25june2023.pdf" target="_blank" className="text-blue-700"><strong>JoSAA 2023 Online Reporting Schedule</strong></a>
          </p>
          <p>
            <a href="../static/JoSAA_2023_Business_Rules_25june2023.pdf" target="_blank" className="text-blue-700"><strong>JoSAA 2023 Business Rules</strong></a>
          </p>
          <p>
            <a href="https://admissions.nic.in/csabspl/Applicant/seatallotmentresult/CurrentORCR.aspx" target="_blank" className="text-blue-700"><strong>Opening and Closing Ranks of NIT Goa B.Tech Programme for A.Y. 2023-2024 after CSAB Special Round-II</strong></a>
          </p>
          <p>
            <a href="https://josaa.admissions.nic.in/applicant/SeatAllotmentResult/CurrentORCR.aspx" target="_blank" className="text-blue-700"><strong>Opening and Closing Ranks of NIT Goa B.Tech Programme for A.Y. 2023-2024 after JoSAA Round-6</strong></a>
          </p>
          <p className="mt-4">
            <strong>Contact Information:</strong><br />
            <strong>Dr. Ravi Ragoju</strong><br />
            <strong>Centre In-Charge, UG Admissions (JoSAA/CSAB)</strong><br />
            National Institute of Technology Goa<br />
            Kottamoll Plateau, Cuncolim Municipal Area, Salcete Taluka, South Goa District, Goa - 403703<br />
            <strong>Email:</strong> ravi@nitgoa.ac.in | ugadmissions@nitgoa.ac.in<br />
            <strong>Phone:</strong> 9404715466
          </p>
        </div>
      </main>
    </div>
      <Footer/>
    </>
  );
}

export default JOSAA_CSAB;
