import { AppContext } from "../Components/AppContext";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useContext } from "react";

const Reports = () =>{
    const {theme}=useContext(AppContext);
    return (
        <>
        <Navbar/>
        <div className={`page font-dosis bg-${theme}bg text-${theme}txt pb-4 mt-5`}>
            <h2 className="text-2xl mx-auto text-center font-bold">Annual Reports & Annual Accounts</h2>
            <div className={`w-20 mx-auto rounded-sm mt-1 bg-${theme}th px-0.5 py-0.5`}></div>
            {/* <hr class='line'/>
             */}
             
            <div className="cont mx-auto text-center p-4">
                <div className="my-2">
                    <a href="https://nitgoa.ac.in/static/annual_report_2010.pdf">Annual Report and Annual Accounts of 2010-11</a>
                </div>
                <div className="my-2">
                    <a href="https://nitgoa.ac.in/static/annual_report_2010.pdf">Annual Report and Annual Accounts of 2010-11</a>
                </div>
                <div className="my-2">
                    <a href="https://nitgoa.ac.in/static/annual_report_2010.pdf">Annual Report and Annual Accounts of 2010-11</a>
                </div>
                <div className="my-2">
                    <a href="https://nitgoa.ac.in/static/annual_report_2010.pdf">Annual Report and Annual Accounts of 2010-11</a>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Reports;