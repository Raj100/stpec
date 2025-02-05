import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const DasaAdmissions = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-3xl font-dosis mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">DASA: Admissions Under DASA Scheme-2024</h1>
      
      <section className="mb-6">
        <p className='text-red-600 font-bold'>
          The UG admissions for the academic year 2024-25 under the DASA scheme shall be based on the ranks obtained by the students in JEE (Main).
        </p>
        <p>
          Admissions are open for Foreign Nationals, Persons of Indian Origin (PIOs), and Non-Resident Indians (NRIs) under the Direct Admission of Students Abroad (DASA) Scheme to National Institutes of Technology (NITs), IIITs, and other premier Technical Institutions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">List of B. Tech. Courses</h2>
        <ul className="list-disc list-inside">
          <li>Computer Science & Engineering</li>
          <li>Electronics & Communication Engineering</li>
          <li>Electrical & Electronics Engineering</li>
          <li>Mechanical Engineering</li>
          <li>Civil Engineering</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Important Links</h2>
        <ul className="list-disc list-inside">
          <li><a href="https://www.nitgoa.ac.in/uploads/PhysicalReportingInstructionsDASA31july2024.pdf" className="text-blue-500 hover:underline">DASA-2024 Physical Reporting Instructions</a></li>
          <li><a href="https://www.nitgoa.ac.in/uploads/DASA%20Schedule%202024.pdf" className="text-blue-500 hover:underline">Schedule of DASA 2024 UG Counselling</a></li>
          <li><a href="https://www.nitgoa.ac.in/uploads/DASA%20Brochure%202024.pdf" className="text-blue-500 hover:underline">DASA UG Brochure 2024</a></li>
          <li><a href="https://dasanit.org" className="text-blue-500 hover:underline">DASA Official Website</a></li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact Information (Headquarter)</h2>
        <p>
          Email: <a href="mailto:dasa2024help@nitrr.ac.in" className="text-blue-500 hover:underline">dasa2024help@nitrr.ac.in</a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact Information (NIT GOA)</h2>
        <p>
          <strong>Dr. L. Shangerganesh</strong><br />
          Centre In-Charge, Admissions (DASA)<br />
          <a href="mailto:shangerganesh@nitgoa.ac.in" className="text-blue-500 hover:underline">shangerganesh@nitgoa.ac.in</a> | <a href="mailto:dasa@nitgoa.ac.in" className="text-blue-500 hover:underline">dasa@nitgoa.ac.in</a><br />
          Phone no.: <span className="font-semibold">+91 9843517272</span><br />
          National Institute of Technology Goa<br />
          Kottamoll Plateau, Cuncolim Municipal Area,<br />
          Salcete Taluka, South Goa District, Goa - 403703
        </p>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default DasaAdmissions;
