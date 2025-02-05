import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import "./Error.css"
// import AnimatedCursor from "react-animated-cursor"

const Error = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* <AnimatedCursor
      innerSize={10}
      outerSize={20}
      color='0,0,0'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    /> */}

      {/* <div className='h-48 w-full flex items-center justify-center text-lg font-dosis'>404: Page Not Found!</div> */}



      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h3>Oops! Page not found</h3>
            <h1><span className="letter">4</span><span className="letter">0</span><span className="letter">4</span></h1>
          </div>
          <h2>we are sorry, but the page you requested was not found</h2>
          <Link to="/" type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Home</Link>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Error
