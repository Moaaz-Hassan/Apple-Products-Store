import React, { useEffect, useState } from 'react'

function TransitionPage({activePage , children}) {
    console.log(children)
  
    const [currentPage , setCurrentPage] = useState(activePage) ;
    const [transitioning , setTransitioning] = useState(false) ;

  useEffect(() => {
    if (currentPage !== activePage) {
      setTransitioning(true)
      setTimeout(() => {
        setCurrentPage(activePage)
        setTransitioning(false)
      }, 500)
    }
  }, [activePage, currentPage])

  
  return <div className=' w-full h-full overflow-hidden TransitionPage relative '>
    <div className={` absolute w-full h-full transition-transform duration-500 
    ${transitioning  ? " -translate-y-full " : "  translate-y-0 "}`}>
        {children[currentPage]}
    </div>
  </div>
}

export default TransitionPage