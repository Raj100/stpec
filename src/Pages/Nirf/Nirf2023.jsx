
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const NIRF2023 = () => {
  return (
    <div>
      <Navbar />
      <div className="pb-10 mt-10">
        <p className="text-center text-xl font-serif">
          <span>NIRF-2023</span>
        </p>
        <hr className="my-4" />
        <p>&nbsp;</p>
        <p className="p-2">
          <a
            className="text-blue-600 hover:text-blue-800"
            href="../uploads/NITGoa_Engineering_2023.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full Report-MoE, National Institutional Ranking Framework (NIRF) - ENGG
          </a>
        </p>
        <p>&nbsp;</p>
        <p className="p-2">
          <a
            className="text-blue-600 hover:text-blue-800"
            href="../uploads/NITGoa_Overall_2023.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full Report-MoE, National Institutional Ranking Framework (NIRF) - OVERALL
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default NIRF2023;
