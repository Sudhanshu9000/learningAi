import React from 'react'
import UpSidebar from './sideBar/UpSidebar'
import Homepage from './Herosection/Homepage'
import Search from './searchbar/Search'

const Mainpage = () => {
  return (
    <>
       <div>
    <UpSidebar/>
    </div>
    <div className=" text-white flex justify-center">
      <Homepage/>
    </div>

    <div>
     <Search/>
    </div>
    
    </>
  )
}

export default Mainpage
