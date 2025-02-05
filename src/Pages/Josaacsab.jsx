import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

const Josaacsab = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-3xl font-dosis mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">JoSAA/CSAB: Admission Procedure</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Joint Entrance Examination (Main)-2024</h2>
        <p>
          Admission to Undergraduate Engineering Programs for candidates from India at NITs, IIITs, and other centrally funded Technical Institutions shall include the performance in the class 12/other Qualifying Examination and in the Joint Entrance Examination, JEE (Main).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Important Links</h2>
        <ul className="list-disc list-inside">
          <li><a href="http://josaa.nic.in" className="text-blue-500 hover:underline">JoSAA Official Website</a></li>
          <li><a href="http://csab.nic.in" className="text-blue-500 hover:underline">CSAB Official Website</a></li>
          <li><a href="https://www.nitgoa.ac.in/static/Revised%20Physical%20Reporting%20Schedule%20&%20Instructions%20for%20newly%20admitted%20B.Tech%206august2024.pdf" className="text-blue-500 hover:underline">Revised Physical Reporting Schedule & Instructions</a></li>
          <li><a href="https://www.nitgoa.ac.in/static/JoSAA_2023_Online_Reporting_Schedule_25june2023.pdf" className="text-blue-500 hover:underline">JoSAA 2023 Online Reporting Schedule</a></li>
          <li><a href="https://www.nitgoa.ac.in/static/JoSAA_2023_Business_Rules_25june2023.pdf" className="text-blue-500 hover:underline">JoSAA 2023 Business Rules</a></li>
          <li><a href="https://admissions.nic.in/csabspl/Applicant/seatallotmentresult/CurrentORCR.aspx" className="text-blue-500 hover:underline">Opening and Closing Ranks of NIT Goa B.Tech Programme for A.Y. 2023-2024 after CSAB Special Rounds-II</a></li>
          <li><a href="https://josaa.admissions.nic.in/applicant/SeatAllotmentResult/CurrentORCR.aspx" className="text-blue-500 hover:underline">Opening and Closing Ranks of NIT Goa B.Tech Programme for A.Y. 2023-2024 after 2023-2024 JoSAA Round-6</a></li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">List of B. Tech. Programs</h2>
        <ul className="list-disc list-inside">
          <li>Computer Science & Engineering</li>
          <li>Electrical & Electronics Engineering</li>
          <li>Electronics & Communication Engineering</li>
          <li>Civil Engineering</li>
          <li>Mechanical Engineering</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p>
          <strong>Dr. Ravi Ragoju</strong><br />
          Centre In-Charge, UG Admissions (JoSAA/CSAB)<br />
          National Institute of Technology Goa<br />
          Kottamoll Plateau, Cuncolim Municipal Area,<br />
          Salcete Taluka, South Goa District, Goa - 403703<br />
          <a href="mailto:ravi@nitgoa.ac.in" className="text-blue-500 hover:underline">ravi@nitgoa.ac.in</a> | <a href="mailto:ugadmissions@nitgoa.ac.in" className="text-blue-500 hover:underline">ugadmissions@nitgoa.ac.in</a><br />
          Phone no.: <span className="font-semibold">9404715466</span>
        </p>
      </section>
    </div>
    <Footer/>
    </>
  )
}

export default Josaacsab