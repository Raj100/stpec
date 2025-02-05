import logo from "../assets/NIT_Goa_logo.png";
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
    const navigate = useNavigate(); 

    const handlePostBack = (eventTarget) => {
        // Navigate to different pages based on the button clicked
        switch (eventTarget) {
        case 'lblregularStudent':
            navigate('/regular-student'); 
            break;
        case 'lbldasaStudent':
            navigate('/dasa-student'); 
            break;
        case 'lblmisc':
            navigate('/miscellaneous');
            break;
        case 'lbnpayrecipts':
            navigate('/reprint-receipts'); 
            break;
        default:
            break;
    }
  };

  return (
<div className="bg-gray-100 min-h-screen flex items-center justify-center mb-8">
      <form method="post" action="./Payment.aspx" id="form1">
        <div className="container mx-auto mt-20">
          <div className="border-t-4 border-blue-600 rounded-lg"></div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <img src={logo} alt="NIT Goa" className="w-24 h-24 mr-4" />
              <div>
                <h2 className="text-xl font-bold">National Institute of Technology Goa</h2>
                <p className="text-gray-600">Cuncolim, Goa - 403 703, India</p>
              </div>
            </div>

            <h3 className="text-center text-lg font-semibold">
              <span className="bg-blue-200 text-blue-800 py-1 px-3 rounded">Online Payment Portal</span>
            </h3>
            <hr className="my-2" />
            <div className="flex flex-col items-center mt-6">
              <input type="hidden" name="key" id="key" />
              <input type="hidden" name="hash" id="hash" />
              <input type="hidden" name="txnid" id="txnid" />
              <input type="hidden" name="enforce_paymethod" id="enforce_paymethod" />

              <button
                type="button"
                onClick={() => handlePostBack('lblregularStudent')}
                className="bg-gray-300 text-black rounded-lg py-4 w-48 mb-4 hover:bg-gray-400 transition duration-200 flex justify-center items-center"
              >
                Regular
              </button>

              <button
                type="button"
                onClick={() => handlePostBack('lbldasaStudent')}
                className="bg-gray-300 text-black rounded-lg py-4 w-48 mb-4 hover:bg-gray-400 transition duration-200 flex justify-center items-center"
              >
                DASA
              </button>

              <button
                type="button"
                onClick={() => handlePostBack('lblmisc')}
                className="bg-gray-300 text-black rounded-lg py-4 w-48 mb-4 hover:bg-gray-400 transition duration-200 flex justify-center items-center"
              >
                Miscellaneous
              </button>

              <button
                type="button"
                onClick={() => handlePostBack('lbnpayrecipts')}
                className="bg-gray-300 text-black rounded-lg py-4 w-48 mb-4 hover:bg-gray-400 transition duration-200 flex justify-center items-center"
              >
                Reprint Payment Receipts
              </button>
            </div>

            <div className="text-center mt-6">
              <h5 className="text-gray-600">
                Contact Us: <span className="font-semibold">payment@nitgoa.ac.in</span>
              </h5>
            </div>
            <div className="mt-6 text-center">
              <strong>
                Designed and Developed By:
                <a href="#" className="text-blue-600 underline"> NitGoa</a>
                <span className="ml-2">&copy; 2016. All rights reserved.</span>
              </strong>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;
