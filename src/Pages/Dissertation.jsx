import { AppContext } from "../Components/AppContext";
import { useContext } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Dissertation = () => {
    const { theme } = useContext(AppContext);

    return (
        <>
            <Navbar />
            <div className={`bg-${theme}bg text-${theme}txt page mt-5 font-dosis pb-8`}>
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-serif font-semibold text-gray-800 text-center mt-5">Dissertation Formats</h1>

                    <div className="my-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                            <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                                <a href="https://www.nitgoa.ac.in/uploads/BTechReportFormat.rar" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                B.Tech Report Format (LateX & docx)
                                </a>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                                <a href="https://www.nitgoa.ac.in/uploads/MTechDissertationFormat.rar" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                M.Tech Dissertation Format (LateX & docx)
                                </a>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                                <a href="https://www.nitgoa.ac.in/uploads/PhDDissertationFormat.rar" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                Ph.D Dissertation Format (LateX & docx)
                                </a>
                            </div>
                        </div>
                    </div>

            </div>
            </div>
            <Footer />
        </>
    );
}

export default Dissertation;
