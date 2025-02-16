import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import Polem_beach from '../../assets/New/Polem_beach.jpg'
import Palolem_sunset from '../../assets/New/Palolem_sunset.jpg'
import Lord_Shiva_statue_at_Murudeshwara from '../../assets/New/Lord_Shiva_statue_at_Murudeshwara.jpg'
import Colva_beach from '../../assets/New/Colva_beach.jpg'
import Calangute_beach from "../../assets/New/Calangute_beach.jpg"
import Fort_Aguada_Light_House_1 from "../../assets/New/Fort_Aguada_Light_House_1.jpg"

const In_and_around_Goa = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="p-4 bg-yellow-100 lg:px-20 lg:pb-12">
      {/* <div className="p-4 lg:px-20 lg:pb-12 bg-[url('src/assets/images/placesbg.png')] bg-cover bg-center opacity-3 z-[-1]"> */}
      <h1 className="text-2xl p-2 font-semibold">In and Around Goa</h1>
        <div className="text-lg">
        Goa, renowned as the 'Pearl of the Orient,' is a premier coastal destination celebrated for its pristine beaches, vibrant culture, and rich historical heritage. Blending Portuguese influences with Indian traditions, Goa offers an unparalleled experience through its architectural marvels, serene landscapes, and world-class hospitality. From the lively shores of North Goa to the tranquil retreats of the south, visitors can explore breathtaking beaches, ancient churches, and exquisite temples. The region’s diverse culinary offerings, thrilling water sports, and luxurious resorts make it an ideal destination for both leisure and business travelers. Whether seeking adventure, relaxation, or cultural immersion, Goa promises an unforgettable experience enriched by its timeless charm and warm hospitality.
        </div>
      <h1 className="text-2xl p-2 font-semibold">In Goa</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='p-2 bg-white rounded-lg relative m-2 mt-0 shadow-xl'>
            <img className='rounded h-64 w-64 w-full' src={Palolem_sunset} alt="feild" />
            <h1 className=' text-black text-center text-lg pt-1'> Palolem Beach</h1>
          </div>
          <div className='p-2 bg-white rounded-lg relative m-2 mt-0 shadow-xl'>
            <img className='rounded h-64 w-full' src={Colva_beach} alt="feild" />
            <h1 className=' text-black text-center text-lg pt-1'> Colva Beach</h1>
          </div>
          <div className='p-2 bg-white rounded-lg relative m-2 mt-0 shadow-xl'>
            <img className='rounded h-64 w-full' src={Calangute_beach} alt="feild" />
            <h1 className=' text-black text-center text-lg pt-1'> Calangute Beach</h1>
          </div>
          <div className='p-2 bg-white rounded-lg relative m-2 mt-0 shadow-xl'>
            <img className='rounded h-64 w-full' src={Fort_Aguada_Light_House_1} alt="feild" />
            <h1 className=' text-black text-center text-lg pt-1'> Aguada Fort</h1>
          </div>
          {/* <div className='p-2 bg-white rounded-lg relative m-2 mt-0 shadow-xl'>
            <img className='rounded h-64 w-full' src={Fort_Aguada_Light_House_1} alt="feild" />
            <h1 className=' text-black text-center text-lg pt-1'> Aguada Fort</h1>
          </div> */}
        </div>
        <h1 className="text-2xl p-2 font-semibold">Around Goa</h1>
        <div className='flex wrap'>
        <div className='p-2 bg-white rounded-lg relative m-2 mt-0 shadow-xl'>
            <img className='rounded h-64 w-full' src={Lord_Shiva_statue_at_Murudeshwara} alt="feild" />
            <h1 className=' text-black text-center text-lg pt-1'> Murdeshwar</h1>
          </div>
          {/* <div className='p-2 bg-white rounded-lg relative m-2 mt-0 shadow-xl'>
            <img className='rounded h-64 w-full' src={Palolem_sunset} alt="feild" />
            <h1 className=' text-black text-center text-lg pt-1'> Palolem Beach</h1>
          </div> */}
        </div>
        </div>
      <Footer></Footer>
    </>
  )
}

export default In_and_around_Goa
