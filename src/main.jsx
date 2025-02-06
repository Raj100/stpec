import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "./Components/AppContext.jsx";
import About from "./Pages/About.jsx";
import Adminstration from "./Pages/Adminstration.jsx";
import Academics from "./Pages/Academics.jsx";
import Departments from "./Pages/Departments.jsx";
import Research from "./Pages/R&DProject.jsx";
import TraningandPlacement from "./Pages/TraningandPlacement.jsx";
import Alumni from "./Pages/Alumni.jsx";
import "./i18n.js";
import BOG from "./Pages/BOG.jsx";
import Director from "./Pages/Director/Director.jsx";
import Registrar from "./Pages/Registrar.jsx";
import Senate from "./Pages/Senate.jsx";
import Deans from "./Pages/Deans.jsx";
import Building from "./Pages/Building.jsx";
import Finance from "./Pages/Finance.jsx";
import Reports from "./Pages/Reports.jsx";
import Dissertation from "./Pages/Dissertation.jsx";
import Faculty from "./Pages/Faculty/Faculty.jsx";
import Login from "./Pages/admin/login/LoginPage.jsx";
import SignupPage from "./Pages/admin/login/SignupPage.jsx";
import Dashboard from "./Pages/admin/dashboard/AdminDashboard.jsx";
import PersonalFacultyPage from "./Pages/PersonalFacultyPage.jsx";
import MyDepartment from "./Pages/admin/myDepartment/myDepartment.jsx";
import FacultyProfilePage from "./Pages/admin/myProfile/FacultyProfilePage.jsx";
import ResearchMoUs from "./Pages/MoUs.jsx";
import Nirf from "./Pages/Nirf/Nirf.jsx";
import NIRF2024 from "./Pages/Nirf/Nirf2024.jsx";
import NIRF2023 from "./Pages/Nirf/Nirf2023.jsx";
import CSE from "./Pages/Departments/CSE.jsx";
import ECE from "./Pages/Departments/ECE.jsx";
import EEE from "./Pages/Departments/EEE.jsx";
import MCE from "./Pages/Departments/MCE.jsx";
import CVE from "./Pages/Departments/CVE.jsx";
import Humanities from "./Pages/Departments/Humanities.jsx";
import AppliedSciences from "./Pages/Departments/AppliedSciences.jsx";
import Error from "./Pages/Error.jsx";
import OutreachAct from "./Pages/OutreachAct.jsx";
import PaymentPage from "./Pages/FeePayment.jsx";
import RegularStudentPage from "./Pages/Payment/regular.jsx";
import DasaStudentPage from "./Pages/Payment/DasaStudent.jsx";
import MiscellaneousPage from "./Pages/Payment/Miscellaneous.jsx";
import ReprintReceiptsPage from "./Pages/Payment/Receipt.jsx";
import Library from "./Pages/Library.jsx";

import store from "./store.js";
import { Provider } from "react-redux";
import Committee from "./Pages/committee.jsx";
import HOD from "./Pages/HOD.jsx";
import JOSAA_CSAB from "./Pages/jossacsab.jsx";
import DasaAdmissions from "./Pages/Dassa.jsx";
import Facilities from "./Pages/Facilities.jsx";
import Strengths from "./Pages/Strengths.jsx";
import RulesAndRegulations from "./Pages/RulesAndRegulations.jsx";
import RTI from "./Pages/RTI.jsx";
// import PrivateRoute from './PrivateRoute';
import ComingSoon from "./Pages/ComingSoon/ComingSoon.jsx";
import ManageFaculties from "./Pages/admin/mangeFaculties/MangeFaculties.jsx";
import FacultyProfilePageByAdmin from "./Pages/admin/AdminEditFaculty/AdminEditFaculty.jsx";
import Edownloads from "./Pages/Edownloads.jsx";
import OrganisingCommitee from "./Pages/OrganisingCommittee/OrganisingCommitee.jsx";
import In_and_around_Goa from "./Pages/In_and_around_Goa/In_and_around_Goa.jsx";
import Stay from "./Pages/Stay/Stay.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <Routes>
//     const [theme,settheme]=useState("");
//     <Appcontext.Provider value={{theme, settheme}}>
//       <Route path='/' element={ <App />}></Route>
//       </Appcontext.Provider>
//     </Routes>

//     </BrowserRouter>
//   </React.StrictMode>,
// )

const Root = () => {
  const [theme, settheme] = useState("");

  return (
    <React.StrictMode>
      <AppContext.Provider value={{ theme, settheme }}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/About" element={<About />} />
              <Route path="/Administration" element={<Adminstration />} />
              <Route path="/Academics" element={<Academics />} />
              <Route path="/Departments" element={<Departments />} />
              <Route path="/Research" element={<Research />} />
              <Route path="/MoUs" element={<ResearchMoUs />} />
              <Route
                path="/Traning&Placement"
                element={<TraningandPlacement />}
              />
              <Route path="/Outreach_activities" element={<OutreachAct/>}/>
              <Route path="/Feepayment" element={<PaymentPage/>}/>
              <Route path="/regular-student" element={<RegularStudentPage />} />
              <Route path="/dasa-student" element={<DasaStudentPage />} />
              <Route path="/miscellaneous" element={<MiscellaneousPage />} />
              <Route path="/reprint-receipts" element={<ReprintReceiptsPage />} />
              <Route path="/BTech/JOSAA_CSAB" element={<JOSAA_CSAB />} />
              <Route path="/BTech/DASA" element={<DasaAdmissions />} />
              <Route path="/BTech/Facilities" element={<Facilities />} />
              <Route path="/BTech/Strengths" element={<Strengths />} />

              <Route path="/BOG" element={<BOG />} />
              <Route path="/HOD" element={<HOD />} />
              <Route path="/Director" element={<Director />} />
              <Route path="/Committee" element={<Committee />} />
              <Route path="/Registrar" element={<Registrar />} />
              <Route path="/Senate" element={<Senate />} />
              <Route path="/Dean" element={<Deans />} />
              <Route path="/Building" element={<Building />} />
              <Route path="/Finance" element={<Finance />} />
              <Route path="/Reports" element={<Reports />} />
              <Route path="/Dissertation" element={<Dissertation />} />
              <Route path="/Library" element={<Library />} />
              <Route path="/Faculty" element={<Faculty />} />
              <Route path="/edownloads" element={<Edownloads />} />





              <Route path="/Staff/:type" element={<Faculty />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin/signup" element={<SignupPage />} />




              {/* <Route path="/Computer_Science_and_Engineering" element={<CSE />} />
              <Route path="/Electronics_and_Communication_Engineering" element={<ECE />} />
              <Route path="/Electrical_and_Electronics_Engineering" element={<EEE />} />
              <Route path="/Mechanical_Engineering" element={<MCE />} />
              <Route path="/Civil_Engineering" element={<CVE />} />
              <Route path='/Humanities_and_Social_Sciences' element={<Humanities/>} />
              <Route path='/Applied_Sciences' element={<AppliedSciences/>}/> */}



              <Route path="/Department/:name" element={<CSE />} />
              <Route path="/rti" element={<RTI />} />
              <Route
                path="/faculty/:username"
                element={<PersonalFacultyPage />}
              />
              <Route path="nirf" element={<Nirf />} />
              <Route path="nirf2024" element={<NIRF2024 />} />
              <Route path="nirf2023" element={<NIRF2023 />} />


              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/profile" element={<FacultyProfilePage />} />
              <Route path="/admin/mydepartment" element={<MyDepartment />} />
              <Route path="/admin/manage-faculties" element={<ManageFaculties />} />
              <Route path="/admin/manage-faculties/:id" element={<FacultyProfilePageByAdmin />} />
              <Route path="/admin/manage-departments" element={<ComingSoon />} />
              <Route path="/DigitalSignature" element={<ComingSoon />} />


              <Route path="/rules_and_regulations" element={<RulesAndRegulations />} />






              <Route path="/Organising_Commitee" element={<OrganisingCommitee />} />
              <Route path="/In_and_around_Goa" element={<In_and_around_Goa />} />
              <Route path="/Stay" element={<Stay />} />
              <Route path="/Contact" element={<Contact />} />
              <Route
                    path="*"
                    element={<Error />}
                />
            </Routes>
          </BrowserRouter>
        </Provider>
      </AppContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
