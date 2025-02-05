import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Announcement from './Components/Announcement'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {

  return (
    <div className='max-w-[2000px] m-auto'>
      <div className=''>
        <I18nextProvider i18n={i18n}>
          <Navbar />
          <Announcement/>
          <Footer />
        </I18nextProvider>
      </div>
    </div>
  )
}

export default App
