import { Outlet } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import { ToastContainer } from 'react-toastify'
import { styles } from './Styles'

function App() {
  return (
    <div className={`overflow-hidden ${styles.backGround}`}>
      <Navbar></Navbar>
      <div className='w-11/12 min-h-[70vh] mx-auto'>
        <ToastContainer></ToastContainer>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
