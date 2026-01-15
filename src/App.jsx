import React, { useState  } from 'react'
import Controls from './components/Controls'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Iphone from './components/iphone';
import MacBook from './components/MacBook';
import Watch from './components/Watch';
import Imack from './components/Imack';
import TransitionPage from './components/TransitionPage';
function App() {

  const [frameZoom , setFrameZoom] = useState(false) ;
  const [activePage, setActivePage] = useState(0) ;
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen)
  }

  function  handleNavClick(pageIndex){
    setActivePage(pageIndex)
  }


  function togglZoom(){
    setFrameZoom(!frameZoom)
  }



  return <div className=' w-full  h-screen grid place-items-center'>
    <div className={`${frameZoom && 'min-w-[97vw] min-h-[97vh]' } w-[70vw] min-w-[70vw] max-w-[90vw] h-[85vh] min-h-[85vh] max-h-[90vh]
    border border-gray-300 rounded-2xl resize overflow-auto 
    relative transition-all duration-100 flex overflow-hidden`} >
      <Navbar  isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} activePage={activePage} handleNavClick={handleNavClick} />
      <Controls setActivePage={setActivePage} togglZoom={togglZoom} frameZoom={frameZoom} />
      <div className='flex-grow'>
        <TransitionPage activePage={activePage} >
          <Home setActivePage={setActivePage} />
          <Iphone/>
          <MacBook/>
          <Watch/>
          <Imack/>
        </TransitionPage>
        
        
      </div>
      
    </div>
  </div>

}

export default App