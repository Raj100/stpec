import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import './bod.css';

const ResearchMoUs = () => {
    const renderDomain = (domain) => {
        return Object.keys(domain).map((sectionKey, index) => (
            <div key={index} className="text-left mt-2 mb-1">
                <div className="font-bold">{sectionKey.replace(/([A-Z])/g, ' $1').trim()}</div>
                {domain[sectionKey].map((item, idx) => (
                    <div className="ml-2" key={idx}>• {item}</div>
                ))}
            </div>
        ));
    };

    const data = [
        {
            srNo: 1,
            signingDate: "2024",
            duration: "5 years",
            organization: "IIT Madras",
            domain: {
                scope: [
                    "Academic and research collaboration",
                    "Exchange of academic information, materials, and publications",
                    "Exchange of students and faculty",
                    "Sponsorship of cooperative seminars, workshops, and academic meetings",
                ],
                studentExchange: [
                    "Top 10% of NIT Goa students can apply for direct PhD at IIT Madras",
                    "Students can pursue 7th and 8th semesters at IIT Madras",
                    "Credits earned will be transferred to NIT Goa for B.Tech degree",
                ],
                researchCollaboration: [
                    "Joint research activities in disciplines of mutual interest",
                    "Faculty from both institutions will collaborate in supervision of exchange students and joint research",
                ],
                admissionToDirectPhD: [
                    "Top 10% of NIT Goa students with minimum CGPA of 8.0 can apply",
                    "Students must complete comprehensive viva within 3 semesters of joining direct PhD program",
                ],
                operationalAspects: [
                    "IIT Madras will select eligible students for direct PhD program",
                    "IIT Madras will select students for summer fellowship and direct PhD program",
                    "Students will pay tuition fees to NIT Goa during 7th and 8th semesters and to IIT Madras after joining direct PhD program",
                ],
                durationAndTermination: [
                    "MOU will be in effect for 5 years and can be renewed or terminated with 6 months' notice",
                ],
            },
        },
        // Add more entries as needed
    ];
    return (
        <div>
        <Navbar />
        
        <div className="mt-12 mb-12 px-4 md:px-36 lg:px-48">
            <h2 className="text-3xl font-bold text-center mb-8">Details Of MoUs</h2>

            <table className="min-w-full border border-gray-300 shadow-md">
                <thead>
                    <tr className="bg-blue-600 text-white">
                        <th className="py-4 px-6">Sr. No.</th>
                        <th className="py-4 px-6">Date of Signing</th>
                        <th className="py-4 px-6">Duration</th>
                        <th className="py-4 px-6">Organization/Institute</th>
                        <th className="py-4 px-6" style={{ width: '35%' }}>Domain/Selected Scope of Cooperation</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.srNo} className="hover:bg-gray-100 transition duration-200">
                            <td className="border px-4 py-2 text-center">{item.srNo}</td>
                            <td className="border px-4 py-2 text-center">{item.signingDate}</td>
                            <td className="border px-4 py-2 text-center">{item.duration}</td>
                            <td className="border px-4 py-2 text-center">{item.organization}</td>
                            <td className="border px-4 py-2 text-left">{renderDomain(item.domain)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
        <Footer />
    </div>
  )
}

export default ResearchMoUs