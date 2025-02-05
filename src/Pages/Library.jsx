import logo from "../assets/NIT_Goa_logo.png";
import Footer from "../Components/Footer";
import Navbar from "../Components/NavbarL";

const LibraryPage = () => {
  return (
    <div>
        <Navbar/>      
      <div className="p-8 shadow-lg bg-white rounded-lg border border-gray-200">
        <div className="text-3xl text-center text-blue-600 font-bold">
          <h1 className="text-2xl font-serif font-semibold text-gray-800 border-gray-200">
            Central Library of NIT Goa
          </h1>
        </div>

        <div className="mt-8">
          <p className="text-justify">
            Central Library of the National Institute of Technology Goa (NIT Goa) is a continuous growing organism with the compact features of documents, users and services. Its core objective is to support academics in knowledge generation through different educational activities, i.e., teaching and research. The library has the qualitative documents on subjects of Science, Technology, Engineering, Economics & Finance, Management, Professional Communication. Apart from these core collections, documents on other subjects are also available such as Hindi literature. The main focus of the library is to develop a qualitative collection with the books, journals, digital documents, magazines and dailies. It is housed in a separate building where more than 10 thousand books, CD-ROMs, e-books are available. Moreover, the library provides access to reputed international E-journals such as IEEE Xplore Digital Library, Springer, ACM Digital library, Elsevier (Back files), etc. Also, the NIT Goa library provides access to selective E-books and the CMIE- ProwessIQ (Center for monitoring Indian Economy) database. The library automation software is used for housekeeping activities of NIT Goa library. It reminds and alerts its users on their transactions, and assists them in searching in OPAC database to save time. The NIT Goa library follows the recommendation method to procure the documents, to meet the knowledge needs of academicians. It is open for 12 hours on working days for reading purposes.
          </p>
          <br />
          <b>Library works with the following prime priorities;</b>

          <ul className="mt-2 list-disc pl-6">
            <li>To fulfill the need of information.</li>
            <li>To provide the reading resource to every member.</li>
            <li>To be an active part of the educational programme as a resource providing channel.</li>
            <li>To provide solutions on academic, research and publication arena.</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-b m-10 text-center p-8 text-3xl font-semibold">
        <a className="text-blue-600" href="http://www.library.nitgoa.ac.in/">WebOPAC </a>(NIT Goa Library Catalogue)
      </div>

      <div className="border-t border-b m-10 text-center p-8 text-3xl font-semibold">
        <a className="text-blue-600" href="https://vidwan.inflibnet.ac.in/">Create Profile in VIDWAN </a>(Expert Database & National Researcher's Network)
      </div>
        <Footer/>
    </div>
  );
};

export default LibraryPage;
