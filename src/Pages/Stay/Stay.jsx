import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
const Stay = () => {
  return (
    <>
      <Navbar></Navbar>
      <>
        <h1 className="text-3xl text-center p-4 font-bold">Hotels in Madgaon</h1>
      <div className="flex flex-col items-center p-4">
        <table className="table-auto lg:w-5/6 border-collapse border border-gray-400">
            <thead>
                <tr>
                    <th className="border border-gray-300 px-4 py-2">Hotel Name</th>
                    <th className="border border-gray-300 px-4 py-2">Star Rating</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">Hotel A</td>
                    <td className="border border-gray-300 px-4 py-2">5</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">Hotel B</td>
                    <td className="border border-gray-300 px-4 py-2">4</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">Hotel C</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">Hotel D</td>
                    <td className="border border-gray-300 px-4 py-2">4</td>
                </tr>
            </tbody>
        </table>
      </div>
      </>
      <Footer></Footer>
    </>
  )
}

export default Stay
