import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Director from '../../assets/director.jpeg'
import Suresh from '../../assets/New/Dr. Suresh Mikkili.png'
import Somitra from '../../assets/New/Dr. Soumitra Das.png'
import Amol from '../../assets/New/Dr. Amol D. Rahulkar.jpg'
import Cvyjayanthi from '../../assets/New/Dr. C.Vyjayanthi.png'
import Sreeraj from '../../assets/New/Dr. Sreeraj E S.png'
import Prasenjit from '../../assets/New/Dr. PRASENJIT DEY.png'
import Chirag from '../../assets/New/Chirag_Modi.jpeg'
import Sarani from '../../assets/New/Sarani_G.jpeg'
import Venkatanareshbabu from '../../assets/New/Venkatanareshbabu.jpeg'
import Harikumar from '../../assets/New/Dr. Harikumar M.png'

const OrganisingCommitee = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='p-4 lg:px-20 lg:pb-12'>
                <h1 className='text-3xl text-center p-4 font-bold'>Patron</h1>
                <div className='flex flex-col items-center'>
                    <div>
                        <img src={Director} alt="" className='w-48 h-48 rounded-xl mb-2' />
                        <p className='text-center'>Dr. O. R. Jaiswal</p>
                        <p className='text-center'>Director, NIT Goa</p>
                    </div>
                </div>
                <h1 className='text-3xl text-center p-4 font-bold'>General Co-Chairs</h1>
                <div className='flex flex-col items-center'>
                    <div>
                    <img src={Suresh} alt="" className='w-48 h-48 rounded-xl mb-2' />
                        <p className='text-center'>Dr. Suresh Mikkili</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                </div>
                <h1 className='text-3xl text-center p-4 font-bold'>Organizing Chairs</h1>
                <div className='flex flex-row justify-evenly items-center'>
                    <div>
                    <img src={Somitra} alt="" className='w-48 h-48 rounded-xl mb-2' />
                        <p className='text-center'>Dr. Soumitra Das</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                    <div>
                    <img src={Amol} alt="" className='w-48 h-48 rounded-xl mb-2' />
                        <p className='text-center'>Dr. Amol Rahulkar</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                </div>
                <h1 className='text-3xl text-center p-4 font-bold'>Conference Secretary</h1>
                <div className='flex flex-row justify-evenly items-center'>
                    <div>
                    <img src={Cvyjayanthi} alt="" className='w-48 h-48 rounded-xl mb-2' />
                        <p className='text-center'>Dr. C. Vyjayanthi</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                </div>
                <h1 className='text-3xl text-center p-4 font-bold'>Finance Chairs</h1>
                <div className='flex flex-row justify-evenly items-center'>
                    <div>
                        <img src={Sreeraj} alt="" className='w-48 h-48 rounded-xl mb-2' />
                        <p className='text-center'>Dr. Sreeraj E S</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                    <div>
                        <img src={Prasenjit} alt="" className='w-48 h-48 rounded-xl mb-2' />
                        <p className='text-center'>Dr. Prasenjit Dey</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                </div>
                <h1 className='text-3xl text-center p-4 font-bold'>Publicity and Website Chairs</h1>
                <div className='flex flex-row justify-evenly items-center'>
                    <div>
                        <img src={Chirag} alt="" className='w-48 h-48 rounded-xl mb-2' />
                        <p className='text-center'>Dr. Chirag Modi</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                    <div>
                        <img src={Sarani} alt="" className='w-48 h-48 rounded-xl mb-2' />
                        <p className='text-center'>Dr. Sarani Mondal</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                </div>
                <h1 className='text-3xl text-center p-4 font-bold'>Registration Chairs</h1>
                <div className='flex flex-row justify-evenly items-center'>
                    <div>
                        <img src={Venkatanareshbabu} alt="" className='w-48 h-48 rounded-xl mb-2' />
                        <p className='text-center'>Dr. Venkatanareshbabu Kuppili</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                    <div>
                        <img src={Harikumar} alt="" className='w-48 h-48 rounded-xl mb-2' />
                        <p className='text-center'>Dr. Harikumar</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                </div>
                

                {/* <div className='grid grid-cols-3 gap items-center w-full p-8 lg:p-20'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-2xl font-semibold'>General Co-Chairs:</h1>
                        
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={Suresh} alt="" className='w-48 h-48 rounded-xl' />
                        <p>Dr. Suresh Mikkili</p>
                        <p>HOD and Head</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={Suresh} alt="" className='w-48 h-48 rounded-xl' />
                        <p>Dr. Suresh Mikkili</p>
                        <p>HOD and Head</p>
                    </div>
                </div> */}
            </div>
            <Footer></Footer>
        </>
    )
}

export default OrganisingCommitee
