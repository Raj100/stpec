import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Director from '../../assets/director.jpeg'
import Suresh from '../../assets/New/Dr. Suresh Mikkili.png'
import AndyKnight from '../../assets/New/AndyKnight1.jpg'
import Somitra from '../../assets/New/Dr. Soumitra Das.png'
import Amol from '../../assets/New/Dr. Amol D. Rahulkar.jpg'
import Avoki from '../../assets/New/Dr. Avoki Omekanda.jpg'
import Bred from '../../assets/New/Bredley Lehman.jpeg'
import Milos from '../../assets/New/ProfessorMilosManic.jpg'
import Frede from '../../assets/New/FredeBl_bjerg.jpg'
import Yang from '../../assets/New/Yang Shi.jpeg'
import Akshay from '../../assets/New/Akshay Rathore.jpeg'
import huang from '../../assets/New/Huang-jen chiu.jpeg'
import Pradyumn from '../../assets/New/Pradyumn Chaturvedi.jpeg'
import Cvyjayanthi from '../../assets/New/Dr. C.Vyjayanthi.png'
import Patwheeler from '../../assets/New/Pat-wheeler.webp'
import Sunanda from '../../assets/New/Sunanda Sinha.jpeg'
import Ramsha from '../../assets/New/Ramsha Karampuri.jpg'
import Trilochan from '../../assets/New/Trilochan Panigrahi.jpeg'
import Siba from '../../assets/New/Siba Kumar Patro.jpeg'
import Ravi from '../../assets/New/Ravi Ragoju.jpeg'
import Sreeraj from '../../assets/New/Dr. Sreeraj E S.png'
import Prasenjit from '../../assets/New/Dr. PRASENJIT DEY.png'
import Chirag from '../../assets/New/Chirag_Modi.jpeg'
import Sarani from '../../assets/New/Sarani_G.jpeg'
import Venkatanareshbabu from '../../assets/New/Venkatanareshbabu.jpeg'
import Harikumar from '../../assets/New/Dr. Harikumar M.png'

const OrganisingCommitee = () => {
 const image=[
{name:"check", 
image: "Venkatanareshbabu",
postion: "",
organisation: "",
commitee: "",
},{}
]
    return (
        <>
            <Navbar></Navbar>
            <div className='p-4 lg:px-20 lg:pb-12'>
                <h1 className='text-3xl text-center p-4 font-bold'>Patron</h1>
                <div className='flex flex-col items-center'>
                    <div>
                        <img src={Director} alt="" className='rounded-full w-32 h-32 mb-2 ' />
                        <p className='text-center'>Dr. O. R. Jaiswal</p>
                        <p className='text-center'>Director, NIT Goa</p>
                    </div>
                </div>
                <h1 className='text-3xl text-center p-4 font-bold'>Honorary Chairs</h1>
                <div className='flex flex-row justify-evenly items-center'>
                    <div>
                    <img src={AndyKnight} alt="" className='rounded-full w-32 h-32 mb-2' />
                        <p className='text-center'>Dr. Andy Knight</p>
                        <p className='text-center'>Canada</p>
                    </div>
                    <div>
                    <img src={Avoki} alt="" className='rounded-full w-32 h-32 mb-2 ' />
                        <p className='text-center'>Dr. Avoki Omekanda</p>
                        <p className='text-center'>USA</p>
                    </div>
                    <div>
                    <img src={Milos} alt="" className='rounded-full w-32 h-32 mb-2 ' />
                        <p className='text-center'>Dr. Milos Manic</p>
                        <p className='text-center'>USA</p>
                    </div>
                    <div>
                    <img src={Yang} alt="" className='rounded-full w-32 h-32 mb-2 ' />
                        <p className='text-center'>Dr. Yang Shi</p>
                        <p className='text-center'>Canada</p>
                    </div>
                    <div>
                    <img src={Bred} alt="" className='rounded-full w-32 h-32 mb-2 ' />
                        <p className='text-center'>Dr. Brad Lehman</p>
                        <p className='text-center'>USA</p>
                    </div>
                    <div>
                    <img src={Frede} alt="" className='rounded-full w-32 h-32 mb-2 ' />
                        <p className='text-center'>Dr. Frede Blaabjerg</p>
                        <p className='text-center'>Denmark</p>
                    </div>
                </div>
                <h1 className='text-3xl text-center p-4 font-bold'>IEEE IAS Representative</h1>
                <div className='flex flex-col items-center'>
                    <div>
                    <img src={Akshay} alt="" className='rounded-full w-32 h-32 mb-2' />
                        <p className='text-center'>Dr. Akshay Rathore</p>
                        <p className='text-center'>Singapore</p>
                    </div>
                </div>
                <h1 className='text-3xl text-center p-4 font-bold'>General Chairs</h1>
                <div className='flex flex-row justify-evenly items-center'>
                    <div>
                    <img src={huang} alt="" className='rounded-full w-32 h-32 mb-2' />
                        <p className='text-center'>Dr. Huang-Jen Chiu</p>
                        <p className='text-center'>NTUST, Taiwan</p>
                    </div>
                    <div>
                    <img src={Pradyumn} alt="" className='rounded-full w-32 h-32 mb-2' />
                        <p className='text-center'>Dr. Pradyumn Chaturvedi</p>
                        <p className='text-center'>VNIT Nagpur</p>
                    </div>
                </div>
                <h1 className='text-3xl text-center p-4 font-bold'>General Co-Chairs</h1>
                <div className='flex flex-col items-center'>
                    <div>
                    <img src={Suresh} alt="" className='rounded-full w-32 h-32 mb-2' />
                        <p className='text-center'>Dr. Suresh Mikkili</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                </div>
                <h1 className='text-3xl text-center p-4 font-bold'>Organizing Chairs</h1>
                <div className='flex flex-row justify-evenly items-center'>
                    <div>
                    <img src={Somitra} alt="" className='rounded-full w-32 h-32 mb-2 ' />
                        <p className='text-center'>Dr. Soumitra Das</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                    <div>
                    <img src={Amol} alt="" className='rounded-full w-32 h-32 mb-2 ' />
                        <p className='text-center'>Dr. Amol Rahulkar</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                </div>
                <h1 className='text-3xl text-center p-4 font-bold'>Conference Secretary</h1>
                <div className='flex flex-row justify-evenly items-center'>
                    <div>
                    <img src={Cvyjayanthi} alt="" className='rounded-full w-32 h-32 mb-2 ' />
                        <p className='text-center'>Dr. C. Vyjayanthi</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                </div>
                <h1 className='text-3xl text-center p-4 font-bold'>Technical Program Chairs</h1>
                <div className='flex flex-row justify-evenly items-center'>
                    <div>
                    <img src={Patwheeler} alt="" className='rounded-full w-32 h-32 mb-2' />
                        <p className='text-center'>Dr. Patrick Wheeler</p>
                        <p className='text-center'>NU, UK</p>
                    </div>
                    <div>
                    <img src={Sunanda} alt="" className='rounded-full w-32 h-32 mb-2' />
                        <p className='text-center'>Dr. Sunanda Sinha</p>
                        <p className='text-center'>MNIT Jaipur</p>
                    </div>
                    <div>
                    <img src={Ramsha} alt="" className='rounded-full w-32 h-32 mb-2' />
                        <p className='text-center'>Dr. K Ramsha</p>
                        <p className='text-center'>VNIT Nagpur</p>
                    </div>
                    <div>
                    <img src={Trilochan} alt="" className='rounded-full w-32 h-32 mb-2' />
                        <p className='text-center'>Dr. Trilochan Panigrahi</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                </div>
                <h1 className='text-3xl text-center p-4 font-bold'>Publication Chairs</h1>
                <div className='flex flex-row justify-evenly items-center'>
                    <div>
                    <img src={Siba} alt="" className='rounded-full w-32 h-32 mb-2' />
                        <p className='text-center'>Dr. Siba Kumar Patro</p>
                        <p className='text-center'>IIT Roorkee</p>
                    </div>
                    <div>
                    <img src={Ravi} alt="" className='rounded-full w-32 h-32 mb-2' />
                        <p className='text-center'>Dr. Ragoju Ravi</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                </div>
                <h1 className='text-3xl text-center p-4 font-bold'>Finance Chairs</h1>
                <div className='flex flex-row justify-evenly items-center'>
                    <div>
                        <img src={Sreeraj} alt="" className='rounded-full w-32 h-32 mb-2 ' />
                        <p className='text-center'>Dr. Sreeraj E S</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                    <div>
                        <img src={Prasenjit} alt="" className='rounded-full w-32 h-32 mb-2 ' />
                        <p className='text-center'>Dr. Prasenjit Dey</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                </div>
                <h1 className='text-3xl text-center p-4 font-bold'>Publicity and Website Chairs</h1>
                <div className='flex flex-row justify-evenly items-center'>
                    <div>
                        <img src={Chirag} alt="" className='rounded-full w-32 h-32 mb-2 ' />
                        <p className='text-center'>Dr. Chirag Modi</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                    <div>
                        <img src={Sarani} alt="" className='rounded-full w-32 h-32 mb-2 ' />
                        <p className='text-center'>Dr. Sarani Mondal</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                </div>
                <h1 className='text-3xl text-center p-4 font-bold'>Registration Chairs</h1>
                <div className='flex flex-row justify-evenly items-center'>
                    <div>
                        <img src={Venkatanareshbabu} alt="" className='rounded-full w-32 h-32 mb-2 ' />
                        <p className='text-center'>Dr. Venkatanareshbabu Kuppili</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                    <div>
                        <img src={Harikumar} alt="" className='rounded-full w-32 h-32 mb-2' />
                        <p className='text-center'>Dr. Harikumar</p>
                        <p className='text-center'>NIT Goa</p>
                    </div>
                </div>
                

                {/* <div className='grid grid-cols-3 gap items-center w-full p-8 lg:p-20'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-2xl font-semibold'>General Co-Chairs:</h1>
                        
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={Suresh} alt="" className='rounded-full w-32 h-32 mb-2 ' />
                        <p>Dr. Suresh Mikkili</p>
                        <p>HOD and Head</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={Suresh} alt="" className='rounded-full w-32 h-32 mb-2 ' />
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
