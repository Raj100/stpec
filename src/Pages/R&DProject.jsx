import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import './bod.css';

const Research = () => {
  const theme = "blue-"; // You can change this to another color if needed

  // Array of project data
  const projects = [
      {
          srNo: 1,
          name: "An Integrated Computational and Experimental Approach to Structural design for ballistic impacts and blasts",
          pi: "Dr. G.R.C.Reddy",
          fundingAgency: "IISC Bangalore"
      },
      {
          srNo: 2,
          name: "Visvesvaraya PhD Scheme for Electronics & IT- Batch 2014-15",
          pi: "Dr. Nithin Kumar Y.B.",
          fundingAgency: "Media Lab Asia"
      },
      {
          srNo: 3,
          name: "Visvesvaraya PhD Scheme for Electronics & IT- Batch 2015-16",
          pi: "Dr. Nithin Kumar Y.B.",
          fundingAgency: "Media Lab Asia"
      },
      {
          srNo: 4,
          name: "Design, Simulation and Implementing of Band-pass Sigma-Delta Modulator",
          pi: "Dr. Nithin Kumar Y.B.",
          fundingAgency: "Science & Engineering Research Board"
      },
      {
          srNo: 5,
          name: "Development Of Efficient Algorithms For Photoacoustic Tomography (Pat)",
          pi: "Dr. Raviprasad K.J",
          fundingAgency: "Science & Engineering Research Board"
      },
      {
          srNo: 6,
          name: "EPR Studies of some Ni(II) complex in crystalline environment",
          pi: "Dr. Velavan Kathirvelu",
          fundingAgency: "Science & Engineering Research Board"
      },
      {
          srNo: 7,
          name: "Special Manpower Development Programme for Chips to System Design",
          pi: "Dr. Nithin Kumar Y.B.",
          fundingAgency: "CEERI, Pilani"
      },
      {
          srNo: 8,
          name: "Suspended functional magnetic microparticle array based point-of-care diagnostic system for multiplexed bio-molecular sensing and diagnostic",
          pi: "Dr. Prasanth G.R.",
          fundingAgency: "Science & Engineering Research Board"
      },
      {
          srNo: 9,
          name: "Design and implementation of an inverter for a grid connected Photovoltaic System which is a part of Virtual Power Plant",
          pi: "Dr. Sreeraj E.S.",
          fundingAgency: "Science & Engineering Research Board"
      },
      {
          srNo: 10,
          name: "Development of Secure Key Management Protocols for Group Communication Under Active Outsider Attack Model",
          pi: "Dr. Purushothama B.R.",
          fundingAgency: "Science & Engineering Research Board"
      },
      {
          srNo: 11,
          name: "Enhanced Automation of 3-Axis CNC Milling Machine using Computer Vision and Artificial Intelligence",
          pi: "Dr. Pravati Swain",
          fundingAgency: "Science & Engineering Research Board"
      },
      {
          srNo: 12,
          name: "Energy Efficient Lighting with Visible Light based Communication & Power Line Communication",
          pi: "Dr. Ankit Dubey",
          fundingAgency: "Department of Science & Technology, Ministry of Science & Technology"
      },
      {
          srNo: 13,
          name: "Design & Development of a Photovoltaic -Thermoelectric Hybrid Energy System",
          pi: "Dr. Lalat Indu Giri",
          fundingAgency: "Science & Engineering Research Board"
      },
      {
          srNo: 14,
          name: "Design & Development of Roast Distributed Nonlinear Channel Equalization & Identification",
          pi: "Dr. Trilochan Panigrahi",
          fundingAgency: "Science & Engineering Research Board"
      },
      {
          srNo: 15,
          name: "Monit Air: An IoT Based Air Pollution Monitoring System",
          pi: "Dr. S. Mini & Dr. Trilochan Panigrahi",
          fundingAgency: "Science & Engineering Research Board"
      },
      {
          srNo: 16,
          name: "Computational and Theoretical Studies on Parabolic Partial Differential Equations in Cancer Modelling",
          pi: "Dr. Lalat Indu Giri",
          fundingAgency: "Science & Engineering Research Board"
      },
  ];

  return (
    <div>
      <Navbar></Navbar>
      <div className='page mt-5 font-dosis'>
            <div className="cont">
                <h1 className='text-center text-2xl font-bold'>R&D Projects</h1>
                <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
                <div className="tab">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="bg-blue-600 text-white w-full">
                                <th className="py-2 px-4 border-b text-center">Sr. No.</th>
                                <th className="py-2 px-4 border-b text-center">Project Name</th>
                                <th className="py-2 px-4 border-b text-center">Name of PI</th>
                                <th className="py-2 px-4 border-b text-center">Funding Agency</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(project => (
                                <tr key={project.srNo}>
                                    <td className="py-2 px-4 border-b">{project.srNo}</td>
                                    <td className="py-2 px-4 border-b">{project.name}</td>
                                    <td className="py-2 px-4 border-b">{project.pi}</td>
                                    <td className="py-2 px-4 border-b">{project.fundingAgency}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Research
