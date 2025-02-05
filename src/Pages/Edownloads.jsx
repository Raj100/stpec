import { useContext, useState } from 'react';
import { AppContext } from '../Components/AppContext';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Edownloads = () => {
  const { theme } = useContext(AppContext);
  const [isFacultyOpen, setFacultyOpen] = useState(false);
  const [isStudentOpen, setStudentOpen] = useState(false);

  const facultyLinks = [
    { text: "Application/Issue of NOC for outside Job", href: "https://www.nitgoa.ac.in/uploads/noc%20for%20outside%20job%20form.pdf" },
    { text: "Joining Report After Availing Leave", href: "https://www.nitgoa.ac.in/uploads/JOINING%20REPORT%20AFTER%20AVAILING%20LEAVE.pdf" },
    { text: "Residential Accommodation Related Documents", href: "https://www.nitgoa.ac.in/Accommodation_forms.html" },
    { text: "Seminar Hall Requisition Form", href: "https://www.nitgoa.ac.in/uploads/SeminarHallRequisitionForm2024.pdf" },
    { text: "Asset Declaration/Annual Property Returns Form", href: "https://www.nitgoa.ac.in/uploads/Assets%20Declaration%20Form%2021march2024.pdf" },
    { text: "APAR for Faculty Members", href: "https://www.nitgoa.ac.in/uploads/APAR%20for%20faculty%20members%2021march2024.docx" },
    { text: "APAR for Group A Non-Teaching Members", href: "https://www.nitgoa.ac.in/uploads/APAR%20Group%20A%20Non-Teaching%2021march2024.pdf" },
    { text: "APAR for Group B & C Non-Teaching Members", href: "https://www.nitgoa.ac.in/uploads/APAR%20Group%20B%20&%20C%20Non-%20Teaching%2021march2024.pdf" },
    { text: "Air Ticket Booking Instructions", href: "https://www.nitgoa.ac.in/static/Air_ticket_booking_instructions_11dec2022.pdf" },
    { text: "Instructions on Booking of LTC", href: "https://www.nitgoa.ac.in/static/Instructions_on_booking_of_LTC_11dec2022.PDF" },
    { text: "LTC Application Form", href: "https://www.nitgoa.ac.in/static/LTC_Application_Form_11dec2022.pdf" },
    { text: "LTC Claim Form", href: "https://www.nitgoa.ac.in/static/LTC_Claim_Form_11dec2022.pdf" },
    { text: "Self Declaration Certificate for Completion of Journey", href: "/self-declaration" },
    { text: "Casual Leave RH Form", href: "https://www.nitgoa.ac.in/static/Casual_leave_RH__Form.pdf" },
    { text: "Earned Leave Form", href: "https://www.nitgoa.ac.in/static/Earned_Leave_Form.pdf" },
    { text: "Medical Leave Form", href: "https://www.nitgoa.ac.in/static/Medical__Leave_Form.pdf" },
    { text: "Maternity Leave Form", href: "https://www.nitgoa.ac.in/static/Maternity_Leave.pdf" },
    { text: "Paternity Leave Form", href: "https://www.nitgoa.ac.in/static/Paternity_Leave.pdf" },
    { text: "Child Care Leave Form", href: "https://www.nitgoa.ac.in/static/Child_Care_Leave.pdf" },
    { text: "Guidelines for Seed Money", href: "https://www.nitgoa.ac.in/static/Seed_Money_instructions.pdf" },
    { text: "Application Form for Seed Money", href: "https://www.nitgoa.ac.in/static/Application_Form_for_Seed_Money.pdf" },
    { text: "Seed Money Proposal Format", href: "https://www.nitgoa.ac.in/static/Seed_Money_Proposal_Format_15sept2016.pdf" },
    { text: "Instructions for Medical Reimbursement", href: "https://www.nitgoa.ac.in/static/Instructions_for_medical_reimbursement.pdf" },
    { text: "Medical Claim Form", href: "https://www.nitgoa.ac.in/static/Medical_Claim_Form_-_NITG.pdf" },
    { text: "Instructions for Children Education Allowance", href: "/children-education-allowance" },
    { text: "Children Education Allowance Claim Form", href: "/children-education-claim" },
    { text: "Working Hours", href: "https://www.nitgoa.ac.in/static/working_hours.pdf" },
    { text: "CPDA FORM A", href: "https://www.nitgoa.ac.in/static/CPDA_FORMA_2023.pdf" },
    { text: "CPDA FORM B", href: "https://www.nitgoa.ac.in/static/CPDA_FORMB_2023.pdf" },
    { text: "CPDA FORM C", href: "https://www.nitgoa.ac.in/static/CPDA_FORMC_2023.pdf" },
    { text: "TA-DA FORM", href: "https://www.nitgoa.ac.in/static/TA-DA_Form_2023.pdf" },
    { text: "Travel Allowance Form", href: "https://www.nitgoa.ac.in/static/Travel_Allowance_Form.pdf" },
    { text: "Cash Advance Form", href: "https://www.nitgoa.ac.in/static/Cash_Advance_Form.pdf" },
    { text: "Advance Adjustment Form", href: "https://www.nitgoa.ac.in/static/Adv_Adjustment_form.pdf" },
    { text: "Payment Process Form", href: "https://www.nitgoa.ac.in/static/Payment_Processing_Form_2022.pdf" },
    { text: "Medical Claim Form B (For Admitted Patient)", href: "https://www.nitgoa.ac.in/static/Medical_Claim_Form_B_(For_Admitted_Patient).pdf" },
    { text: "PFMS Mandate Form", href: "https://www.nitgoa.ac.in/static/PFMS_Mandate_Form_NITGoa.docx" },
    { text: "Purchase Related Forms", href: "https://www.nitgoa.ac.in/e_download_faculty.html#" },
    { text: "Family Dependency Form", href: "https://www.nitgoa.ac.in/static/Family_Declaration_Form_20jan2020.pdf" },
    { text: "Joint Declaration Form", href: "https://www.nitgoa.ac.in/static/Joint_Declaration_Form.PDF" },
    { text: "Format for Administration cum Financial Approval ON NOTE by Indentor", href: "https://www.nitgoa.ac.in/uploads/Format%20for%20on%20notesheet%20approval%20may2024.pdf" },
    { text: "Telephone Reimbursement Form", href: "https://www.nitgoa.ac.in/static/Mobile_Bill_Rembursement_Form_2022.pdf" }
  ];

  const studentLinks = [
    { text: "Form for documents from Academic Section", href: "https://www.nitgoa.ac.in/static/Form%20for%20documents%20from%20Academic%20Section.pdf" },
    { text: "Forms for B.Tech Students", href: "https://www.nitgoa.ac.in/btechforms.html" },
    { text: "Forms for M.Tech Students", href: "https://www.nitgoa.ac.in/mtechforms.html" },
    { text: "Forms for Ph.D Students", href: "https://www.nitgoa.ac.in/phdforms.html" },
    { text: "No Dues Proforma for students", href: "https://www.nitgoa.ac.in/static/No%20Dues%20Form%20Student%205%20June2024.pdf" },
    { text: "Leave Rules for Ph.D. (Full-time) and M.Tech. (Full-time) Students", href: "https://www.nitgoa.ac.in/static/Leave_Rules_30march2023.pdf" },
    { text: "Rules for withdrawal of Admission (B.Tech./M.Tech./Ph.D.)", href: "https://www.nitgoa.ac.in/static/Rules_for_withdrawal_of_Admission_30march2023.pdf" },
    { text: "Travel Allowance Form", href: "https://www.nitgoa.ac.in/static/Travel_Allowance_Form.pdf" },
    { text: "Ph.D Contingency Reimbursement Form", href: "https://www.nitgoa.ac.in/static/Ph.D_Contignecy_Claim_Form_24June2017.pdf" },
    { text: "Hospitalization and Domiciliary Benefit Policy Claim Form", href: "https://www.nitgoa.ac.in/static/Hospitalization_and_Domiciliary_Benefit_Policy_Claim_Form_23feb2018.PDF" },
    { text: "TA/DA Form", href: "https://www.nitgoa.ac.in/static/TADA_form.pdf" },
    // Add more student links as needed
  ];

  return (
    <>
      <Navbar />
      <div className={`bg-${theme}bg text-${theme}txt page mt-5 font-dosis pb-4`}>
        <div className="max-w-6xl mx-auto">
          {/* Faculty and Staff Dropdown */}
          <div className="mb-4">
            <button 
              onClick={() => setFacultyOpen(!isFacultyOpen)} 
              className={`flex justify-between items-center w-full p-3 text-left rounded-md bg-${theme}bg text-${theme}txt hover:bg-opacity-75 transition`}
            >
              <span>For Faculty And Staff</span>
              <svg 
                className={`w-5 h-5 transform transition-transform ${isFacultyOpen ? 'rotate-180' : 'rotate-0'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isFacultyOpen ? 'max-h-[340rem]' : 'max-h-0'}`}>
              <ul className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3 bg-${theme}bg text-${theme}txt rounded-md`}>
                {facultyLinks.map((link, index) => (
                  <li key={index} className="flex items-center justify-center h-24">
                    <a href={link.href} className="flex items-center justify-center p-4 text-center w-full h-full border border-gray-300 rounded hover:bg-gray-100">{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Students Dropdown */}
          <div>
            <button 
              onClick={() => setStudentOpen(!isStudentOpen)} 
              className={`flex justify-between items-center w-full p-3 text-left rounded-md bg-${theme}bg text-${theme}txt hover:bg-opacity-75 transition`}
            >
              <span>For Students</span>
              <svg 
                className={`w-5 h-5 transform transition-transform ${isStudentOpen ? 'rotate-180' : 'rotate-0'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isStudentOpen ? 'max-h-[340rem]' : 'max-h-0'}`}>
              <ul className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-3 bg-${theme}bg text-${theme}txt text-center rounded-md`}>
                {studentLinks.map((link, index) => (
                  <li key={index} className="flex items-center justify-center h-24">
                    <a href={link.href} className="flex items-center justify-center w-full h-full border border-gray-300 rounded hover:bg-gray-100">{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Edownloads;
