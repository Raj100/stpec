import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

const Nirf = () => {
  return (
    <>      <Navbar />
<main className="flex flex-col p-4 border-b-4">
      <div className="mt-2">
        <h2 className="text-2xl text-blue-800 font-serif text-center border-b-2">
          NIRF Forms
        </h2>
        <center>
          <ul className="ml-2">
            <li className="text-blue-600 font-semibold m-3">
              <Link className="hover:text-blue-700" to="/nirf2024">
                NIRF FORMS-2024
              </Link>
            </li>
            <li className="text-blue-600 font-semibold m-3">
              <Link className="hover:text-blue-700" to="/nirf2023">
                NIRF FORMS-2023
              </Link>
            </li>
            <li className="text-blue-600 font-semibold m-3">
              <Link className="hover:text-blue-700" to="/nirf2022">
                NIRF FORMS-2022
              </Link>
            </li>
            <li className="text-blue-600 font-semibold m-3">
              <Link className="hover:text-blue-700" to="/nirf2021">
                NIRF FORMS-2021
              </Link>
            </li>
            <li className="text-blue-600 font-semibold m-3">
              <Link className="hover:text-blue-700" to="/nirf2020">
                NIRF FORMS-2020
              </Link>
            </li>
            <li className="text-blue-600 font-semibold m-3">
              <Link className="hover:text-blue-700" to="/nirf2019">
                NIRF FORMS-2019
              </Link>
            </li>
            <li className="text-blue-600 font-semibold m-3">
              <Link className="hover:text-blue-700" to="/nirf2018">
                NIRF FORMS-2018
              </Link>
            </li>
            <li className="text-blue-600 font-semibold m-3">
              <Link className="hover:text-blue-700" to="/nirf2017">
                NIRF FORMS-2017
              </Link>
            </li>
          </ul>
        </center>
        <p className="text-center mt-6">
          FOR ANY COMMENTS AND FEEDBACK PLEASE E-MAIL TO{' '}
          <a href="mailto:nirf@nitgoa.ac.in" className="text-blue-600">
            nirf@nitgoa.ac.in
          </a>
        </p>
      </div>
    </main>
    <Footer />
    </>

  );
};

export default Nirf;
