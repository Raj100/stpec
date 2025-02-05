import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { AppContext } from "../Components/AppContext";
import { useContext } from "react";

const HOD = () => {
    const { theme } = useContext(AppContext);
    
    const HODMembers = [
        {
            name: "Dr. Veena Thenkanidiyoor",
            department: "Computer Science and Engineering",
            email: "hod.cse@nitgoa.ac.in",
            phone: "--",
            image: "https://www.nitgoa.ac.in/People/frontend/Dr.%20Veena%20Thenkanidiyoor.png"
        },
        {
            name: "Dr. Suresh Mikkili",
            department: "Electrical and Electronics Engineering",
            email: "hod.eee@nitgoa.ac.in",
            phone: "--",
            image: "https://www.nitgoa.ac.in/People/frontend/Dr.%20Suresh%20Mikkili.png"
        },
        {
            name: "Dr. Veerakumar T",
            department: "Electronics and Communication Engineering",
            email: "hod.ece@nitgoa.ac.in",
            phone: "--",
            image: "https://www.nitgoa.ac.in/People/frontend/drveerakumar.jpeg"
        },
        {
            name: "Dr. L. Shangerganesh",
            department: "Applied Sciences and Humanities & Social Sciences",
            email: "hod.hs@nitgoa.ac.in",
            phone: "--",
            image: "https://www.nitgoa.ac.in/People/frontend/Dr.%20L.%20Shangerganesh.png"
        },
        {
            name: "Dr. Prasenjit Dey",
            department: "Mechanical Engineering",
            email: "hod.mech@nitgoa.ac.in",
            phone: "--",
            image: "https://www.nitgoa.ac.in/People/frontend/Dr.%20PRASENJIT%20DEY.png"
        },
        {
            name: "Dr. Harikumar M.",
            department: "Civil Engineering",
            email: "hod.civil@nitgoa.ac.in",
            phone: "--",
            image: "https://www.nitgoa.ac.in/People/frontend/Dr.%20Harikumar%20M.png"
        }
    ];

    return (
        <>
            <Navbar />
            <div className={`page font-dosis mt-5 bg-${theme}bg text-${theme}txt pb-4`}>
                <div className="cont">
                    <h2 className="text-3xl font-bold text-center mb-4">HOD MEMBERS</h2>
                    <div className={`w-20 mx-auto rounded bg-${theme}th mb-4 h-1`}></div>
                    <div className="tab overflow-x-auto">
                        <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-300">
                            <thead className={`bg-${theme}th text-white`}>
                                <tr>
                                    <th className="border text-center p-4">Name</th>
                                    <th className="border text-center p-4">Department</th>
                                    <th className="border text-center p-4">E-Mail</th>
                                    <th className="border text-center p-4">Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {HODMembers.map((member, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-100 transition duration-200">
                                        <td className="border border-b-4 p-4 text-center">
                                            <div className="flex flex-col items-center">
                                                <img
                                                    src={member.image}
                                                    alt={`${member.name}'s Image`}
                                                    className="h-24 w-24 md:h-32 md:w-32 lg:h-36 lg:w-36 object-cover mb-2 rounded-full border-4 border-gray-300"
                                                />
                                                <span className="font-medium">{member.name}</span>
                                            </div>
                                        </td>
                                        <td className="border border-b-4 p-4 text-center">{member.department}</td>
                                        <td className="border border-b-4 p-4 text-center">{member.email}</td>
                                        <td className="border border-b-4 p-4 text-center">{member.phone}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HOD;
