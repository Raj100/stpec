import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function DasaAdmissions() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-black py-4 px-10 ml-8 mr-8">

        <div className="flex flex-col mt-8 space-y-4">
          <h1 className="text-3xl font-serif font-bold text-black">
            DASA 
          </h1>
          <hr />
        </div>
        <div className="flex flex-col mt-8 space-y-4">
          <h1 className="text-2xl font-serif font-semibold text-black">
            Admissions under DASA Scheme-2024
          </h1>
          <p className="text-red-600 font-semibold">
          The UG admissions for academic year 2024-25 under DASA scheme shall be on the basis of the ranks obtained by the students in JEE(Main).
          </p>
          <p>
          Admissions are open for Foreign Nationals / Persons of Indian Origin (PIOs) / Non-Resident Indians (NRIs) under Direct Admission of Students Abroad (DASA) Scheme to National Institutes of Technology (NITs), IIITs and other premier Technical Institutions.
          </p>
        <br />
        </div>
        <hr />
        <div className="flex flex-col mt-8 space-y-4">
          <h1 className="text-2xl font-serif font-semibold text-black">
          List of B. Tech. Courses          </h1>
         
          <ul className="list-none space-y-2">
            <li className="text-blue-700 font-bold hover:text-orange-600">
              <a href="../academics/ComputerScience.html">
                Computer Science & Engineering
              </a>
            </li>
            <li className="text-blue-700 font-bold hover:text-orange-600">
              <a href="../academics/Electronics.html">
                Electronics & Communication Engineering
              </a>
            </li>
            <li className="text-blue-700 font-bold hover:text-orange-600">
              <a href="../academics/Electrical.html">
                Electrical & Electronics Engineering
              </a>
            </li>
            <li className="text-blue-700 font-bold hover:text-orange-600">
              <a href="../academics/Mechanical.html">Mechanical Engineering</a>
            </li>
            <li className="text-blue-700 font-bold hover:text-orange-600">
              <a href="../academics/Civil.html">Civil Engineering</a>
            </li>
          </ul>
        </div>

        <p className="mt-4 font-bold text-black">Important Links:</p><br />
        <ul className="list-none space-y-2">
          <li>
            <a
              href="../uploads/PhysicalReportingInstructionsDASA31july2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-bold hover:text-orange-600"
            >
              DASA-2024 Physical Reporting Instructions
            </a>
          </li>
          <li>
            <a
              href="../uploads/DASA Schedule 2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-bold hover:text-orange-600"
            >
              Schedule of DASA 2024 UG Counselling
            </a>
          </li>
          <li>
            <a
              href="../uploads/DASA Brochure 2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-bold hover:text-orange-600"
            >
              DASA UG Brochure 2024
            </a>
          </li>
        </ul>

        <div className="mt-8">
          <h2 className="text-2xl font-serif font-semibold text-black">
            Contact Information (Headquarter):
          </h2><br />
          <p className="text-black"><b>Email:</b> dasa2024help@nitrr.ac.in</p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-serif font-semibold text-black">
            Contact Information(NIT GOA):
          </h2>
          <p className="text-black"><b>Email:</b> dasa2024help@nitrr.ac.in</p>
          <p className="text-black"><b>Phone:</b> +91 9843517272</p>
          <p className="text-black">
            National Institute of Technology Goa, Kottamoll Plateau, Cuncolim
            Municipal Area, Salcete Taluka, South Goa District, Goa - 403703
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DasaAdmissions;
