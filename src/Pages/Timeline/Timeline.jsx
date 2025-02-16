import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"

const Timeline = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="p-4 bg-gray-50 lg:px-20">

                <h1 className='text-center text-3xl font-bold'>Timeline</h1>
                <div className="py-8 md:px-4">
                    <ol className="relative border-s border-green-200 ">
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-white  ">
                                <svg className="w-2.5 h-2.5 text-green-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                                Submission Open
                                <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm ms-3">Ongoing</span></h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                                February 1st, 2025
                            </time>
                            <p className="mb-4 text-base font-normal text-gray-500 ">
                                Paper Submission Opens
                            </p>
                            {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"><svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                            </svg> Download ZIP</a> */}
                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-white ">
                                <svg className="w-2.5 h-2.5 text-green-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
                                Deadline for Full Paper Submission
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                                31 May, 2025
                            </time>
                            <p className="text-base font-normal text-gray-500 ">
                                All of the pages to be submitted.
                            </p>
                        </li>
                        <li className="ms-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-white ">
                                <svg className="w-2.5 h-2.5 text-green-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
                                Notification of Acceptance
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                                31 July, 2025
                            </time>
                            {/* <p className="text-base font-normal text-gray-500 ">
                                InAugration of the event.
                            </p> */}
                        </li>
                    </ol>
                </div>
            </div>
            <Footer></Footer>



        </>
    )
}

export default Timeline
