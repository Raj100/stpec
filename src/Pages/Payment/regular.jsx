import { useState } from 'react';
import logo from "../../assets/NIT_Goa_logo.png";

const PaymentPage = () => {
  const [rollNo, setRollNo] = useState('');
  const [feeType, setFeeType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rollNo || feeType === '0') {
      alert('Please enter Roll No. and select a Fee Type.');
      return;
    }
    // Handle form submission logic here
    console.log('Form Submitted');
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg">
        <div className="p-6">
        <div className="flex items-center mb-4">
              <img src={logo} alt="NIT Goa" className="w-24 h-24 mr-4" />
              <div>
                <h2 className="text-xl font-bold">National Institute of Technology Goa</h2>
                <p className="text-gray-600">Cuncolim, Goa - 403 703, India</p>
              </div>
            </div>

            <h3 className="text-center text-lg font-semibold">
              <span className="bg-blue-300 text-white py-1 px-3 rounded">Online Fee Payment for Regular Student</span>
            </h3>

          <hr className="my-4 border-gray-300" />

          <form onSubmit={handleSubmit}>
            <div className="form-group my-4">
              <div className="flex items-center">
                <label className="mr-4">
                  <input
                    type="radio"
                    name="IDNO"
                    value="rdoIdno"
                    className="mr-2"
                  />
                  IDNO
                </label>
                <label>
                  <input
                    type="radio"
                    name="IDNO"
                    value="rdoEnrollementno"
                    defaultChecked
                    className="mr-2"
                  />
                  Roll No
                </label>
              </div>

              <input
                type="text"
                name="productinfo"
                placeholder="Enter Roll No."
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                className="w-full p-2 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <label className="mt-4 block">Fee Type</label>
              <select
                name="ddlReceiptType"
                value={feeType}
                onChange={(e) => setFeeType(e.target.value)}
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="0">Please Select</option>
                <option value="TF">INSTITUTE FEES</option>
                <option value="HF">HOSTEL FEES</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-28  bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        <div className="text-center text-sm text-gray-500 p-4 border-t">
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
