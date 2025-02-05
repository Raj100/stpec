import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { AppContext } from "../Components/AppContext";
import { useContext } from "react";

const Building = () => {
    const { theme } = useContext(AppContext);
    return (
        <>
            <Navbar />
            <div className={`page font-dosis bg-${theme}bg text-${theme}txt pb-4`}>
                <div className="cont mt-5">
                    <h2 className="text-xl font-bold">Building and Works Committee</h2>
                    <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
                    <div className="tab">
                        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
                            <thead className={`bg-${theme}th text-white`}>
                                <tr>
                                    <th className="border text-center p-4">Sr.No.</th>
                                    <th className="border text-center p-4">NIT Statute Section: 12</th>
                                    <th className="border text-center p-4">Designation</th>
                                    <th className="border text-center p-4">Name & Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="border border-b-4 m-3 p-4">1</td>
                                    <td className="border border-b-4 m-3 p-4 text-center">(i)</td>
                                    <td className="border border-b-4 m-3 p-4">Director, Ex-officio Chairman</td>
                                    <td className="border border-b-4 m-3 p-4">Prof. O.R. Jaiswal, Director NIT Goa</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="border border-b-4 m-3 p-4">2</td>
                                    <td className="border border-b-4 m-3 p-4 text-center">(ii)</td>
                                    <td className="border border-b-4 m-3 p-4">Deputy Secretary, MoE dealing with NIT Member</td>
                                    <td className="border border-b-4 m-3 p-4">Ms. Veena Dunga, Deputy Secretary, MOE</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="border border-b-4 m-3 p-4">3</td>
                                    <td className="border border-b-4 m-3 p-4 text-center">(ii)</td>
                                    <td className="border border-b-4 m-3 p-4">Director, MoE, dealing with Finance Member</td>
                                    <td className="border border-b-4 m-3 p-4">Sri. Anilkumar, Director, IFD, MoE</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="border border-b-4 m-3 p-4">4</td>
                                    <td className="border border-b-4 m-3 p-4 text-center">(iii)</td>
                                    <td className="border border-b-4 m-3 p-4">Nominee of BoG Member</td>
                                    <td className="border border-b-4 m-3 p-4">Prof. R.K. Tripathi, Professor Dept. of Civil Engineering & Dean (P&D), NIT Raipur</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="border border-b-4 m-3 p-4">5</td>
                                    <td className="border border-b-4 m-3 p-4 text-center">(iv)</td>
                                    <td className="border border-b-4 m-3 p-4">Registrar, Ex-officio Member Secretary</td>
                                    <td className="border border-b-4 m-3 p-4">Dr. Shashidhar K. Kudari</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="border border-b-4 m-3 p-4">6</td>
                                    <td className="border border-b-4 m-3 p-4 text-center">(v)</td>
                                    <td className="border border-b-4 m-3 p-4">Dean (P&D) Member</td>
                                    <td className="border border-b-4 m-3 p-4">Dr. Velavan Kathirvelu</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="border border-b-4 m-3 p-4" rowSpan={2}>7</td>
                                    <td className="border border-b-4 m-3 p-4 text-center" rowSpan={2}>(vi)</td>
                                    <td className="border border-b-4 m-3 p-4" rowSpan={2}>One Expert each from Civil & Electrical wing of Central or State or any autonomous body. Members.</td>
                                    <td className="border border-b-4 m-3 p-4">Prof. Krishna Kant Pathak, Professor Dept. of Civil Engineering IIT BHU</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="border border-b-4 m-3 p-4">Shri A.K. Jain, Former DDG (Works), CPWD Delhi</td>
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

export default Building;
