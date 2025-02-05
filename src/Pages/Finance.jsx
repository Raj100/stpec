import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { AppContext } from "../Components/AppContext";
import { useContext } from "react";

const Finance = () => {
    const { theme } = useContext(AppContext);
    return (
        <>
            <Navbar />
            <div className={`page font-dosis mt-5 bg-${theme}bg text-${theme}txt pb-4`}>
                <div className="cont">
                    <h2 className="text-3xl font-bold text-center mb-4">FINANCE COMMITTEE (FC) of NIT Goa</h2>
                    <div className={`w-20 mx-auto rounded bg-${theme}th mb-4 h-1`}></div>
                    <div className="tab">
                        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
                            <thead className={`bg-${theme}th text-white`}>
                                <tr>
                                    <th className="border text-center p-4">S.No</th>
                                    <th className="border text-center p-4">NIT Statute Section: 10</th>
                                    <th className="border text-center p-4">Position</th>
                                    <th className="border text-center p-4">Name</th>
                                    <th className="border text-center p-4">Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="border border-b-4 m-3 p-4">1</td>
                                    <td className="border border-b-4 m-3 p-4">10(i)</td>
                                    <td className="border border-b-4 m-3 p-4">Chairperson BoG, ex-officio Chairman</td>
                                    <td className="border border-b-4 m-3 p-4">Prof. O.R. Jaiswal</td>
                                    <td className="border border-b-4 m-3 p-4">Director, In charge Chairman</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="border border-b-4 m-3 p-4">2</td>
                                    <td className="border border-b-4 m-3 p-4">10(ii)</td>
                                    <td className="border border-b-4 m-3 p-4">Director, Ex-Officio Member</td>
                                    <td className="border border-b-4 m-3 p-4">Prof. O.R. Jaiswal</td>
                                    <td className="border border-b-4 m-3 p-4">Director, National Institute of Technology Goa</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="border border-b-4 m-3 p-4">3</td>
                                    <td className="border border-b-4 m-3 p-4" rowSpan={2}>10(ii)</td>
                                    <td className="border border-b-4 m-3 p-4" rowSpan={2}>Jt. Secretary Dealing with NIT or his nominee and Finance advisor (MoE) or his nominee</td>
                                    <td className="border border-b-4 m-3 p-4">Mrs. Saumya Gupta</td>
                                    <td className="border border-b-4 m-3 p-4">Addnl Secretary/Jt. Secretary (Technical Education), MHRD, Govt. of India</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="border border-b-4 m-3 p-4">4</td>
                                    <td className="border border-b-4 m-3 p-4">Sh. Sanjog Kapoor</td>
                                    <td className="border border-b-4 m-3 p-4">Financial Advisor, Dept of Higher Education, MHRD, Govt. of India</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="border border-b-4 m-3 p-4">5</td>
                                    <td className="border border-b-4 m-3 p-4" rowSpan={2}>10(iv)</td>
                                    <td className="border border-b-4 m-3 p-4" rowSpan={2}>Two persons nominated by the Board</td>
                                    <td className="border border-b-4 m-3 p-4">Prof. B. G. Farnandes</td>
                                    <td className="border border-b-4 m-3 p-4">Professor, Department of Electrical Engineering, IIT Bombay</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="border border-b-4 m-3 p-4">6</td>
                                    <td className="border border-b-4 m-3 p-4">Dr. Sreeraj E. S</td>
                                    <td className="border border-b-4 m-3 p-4">Associate Professor, Department of Electrical and Electronics Engineering, NIT Goa</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="border border-b-4 m-3 p-4">7</td>
                                    <td className="border border-b-4 m-3 p-4">10(v)</td>
                                    <td className="border border-b-4 m-3 p-4">Member Secretary</td>
                                    <td className="border border-b-4 m-3 p-4">Dr. Shashidhar K. Kudari</td>
                                    <td className="border border-b-4 m-3 p-4">Registrar, NIT Goa</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Finance;
