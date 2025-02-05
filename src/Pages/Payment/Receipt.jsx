import { useState } from 'react';
import logo from "../../assets/NIT_Goa_logo.png";

const PaymentPage = () => {
  const [rollNo, setRollNo] = useState('');
  const [feeType, setFeeType] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rollNo || feeType === '0' || !dob) {
      alert('Please enter all mandatory fields.');
      return;
    }
    // Handle form submission logic here
    console.log('Form Submitted');
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg"> {/* Increased width */}
        <div className="p-4"> {/* Reduced padding */}
          <div className="flex items-center mb-2"> {/* Reduced margin */}
            <img src={logo} alt="NIT Goa" className="w-16 h-16 mr-3" /> {/* Reduced logo size */}
            <div>
              <h2 className="text-lg font-bold">National Institute of Technology Goa</h2> {/* Smaller font */}
              <p className="text-gray-600 text-sm">Cuncolim, Goa - 403 703, India</p> {/* Smaller text */}
            </div>
          </div>

          <h3 className="text-center text-md font-semibold"> {/* Reduced font size */}
            <span className="bg-blue-300 text-white py-1 px-3 rounded">Online Fee Payment for Regular Student</span>
          </h3>

          <hr className="my-3 border-gray-300" /> {/* Reduced margin */}

          <p className="text-xs text-red-500 mb-3">* All fields are mandatory</p> {/* Smaller warning text */}

          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3"> {/* Reduced margin */}
              <div className="flex items-center">
                <label className="mr-4 text-sm"> {/* Smaller label */}
                  <input
                    type="radio"
                    name="IDNO"
                    value="rdoIdno"
                    className="mr-2"
                  />
                  IDNO <span className="text-red-500">*</span>
                </label>
                <label className="text-sm"> {/* Smaller label */}
                  <input
                    type="radio"
                    name="IDNO"
                    value="rdoEnrollementno"
                    defaultChecked
                    className="mr-2"
                  />
                  Roll No <span className="text-red-500">*</span>
                </label>
              </div>

              <input
                type="text"
                name="productinfo"
                placeholder="Enter Roll No."
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                className="w-full p-2 mt-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-red-500">*</span>

              <label className="mt-2 block text-sm"> {/* Smaller label */}
                Fee Type <span className="text-red-500">*</span>
              </label>
              <select
                name="ddlReceiptType"
                value={feeType}
                onChange={(e) => setFeeType(e.target.value)}
                className="w-full p-2 mt-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="0">Please Select</option>
                <option value="TF">INSTITUTE FEES</option>
                <option value="HF">HOSTEL FEES</option>
              </select>

              <label className="mt-2 block text-sm"> {/* Smaller label */}
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full p-2 mt-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-24 bg-blue-500 text-white py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        <div className="text-center text-xs text-gray-500 p-3 border-t"> {/* Reduced footer size */}
          <strong>Designed and Developed By:</strong>{' '}
          <a href="http://www.iitms.co.in/" className="text-blue-600 hover:underline">
            MasterSoft Group Nagpur
          </a>{' '}
          &copy; 2016. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
