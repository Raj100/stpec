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
                    <h1 className="text-4xl font-serif font-semibold text-gray-800 text-center mt-5">Rules and Regulations</h1>

                    <div className="my-10">
                        <h3 className="text-3xl text-gray-700 border-b-4 border-blue-600 w-fit mx-auto pb-2"><strong>U.G Rules Regulations:</strong></h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                            <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                                <a href="../uploads/BTech (Rules &amp; Regulations)_2023-24_March2024.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Batches Admitted for B.Tech from 2023 onwards
                                </a>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                                <a href="../uploads/BTech (Rules &amp; Regulations)_2013-14_March 2024.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Batches Admitted for B.Tech from 2013 to 2022
                                </a>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                                <a href="../static/BTech_(Rules_&amp;_Regulations)_2010-2013_8june2023.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Batches Admitted for B.Tech in 2010, 2011, 2012
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="my-10">
                        <h3 className="text-3xl text-gray-700 border-b-4 border-blue-600 w-fit mx-auto pb-2"><strong>P.G Rules & Regulations:</strong></h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                            <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                                <a href="../uploads/M.Tech (Rules &amp; Regulations)_2014-15_March 2024.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                                    M.Tech Rules & Regulations
                                </a>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                                <a href="../uploads/PhD (Rules &amp; Regulations)_March 2024.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                                    Ph.D. Rules & Regulations
                                </a>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                                <a href="../uploads/Post-Doc Fellowship Rules and Regulations.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                                    Post-Doc Fellowship Rules
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="my-10">
                        <h3 className="text-3xl text-gray-700 border-b-4 border-blue-600 w-fit mx-auto pb-2"><strong>U.G Curriculum:</strong></h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                            <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                                <a href="../static/HAND BOOK NITG_2023-24_23Jul2024.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Academic Handbook for B.Tech from 2023 onwards
                                </a>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                                <a href="../academics/minor.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Minor Syllabus for B.Tech from 2022 onwards
                                </a>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                                <a href="../static/Academic_Handbook_BTech_8june2023.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Academic Handbook for B.Tech from 2013 to 2022
                                </a>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                                <a href="../static/old_syllabus.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Academic Handbook for B.Tech in 2010, 2011, 2012
                                </a>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                                <a href="../static/M.Tech_Hand_Book_2013-2014_19march2021.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Academic Handbook of courses for PG
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
