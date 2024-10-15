import { useState } from 'react'

import './App.css'
import UpSidebar from './component/mainPage/sideBar/UpSidebar'
import Homepage from './component/mainPage/Herosection/Homepage'
import Search from './component/mainPage/searchbar/Search'

function App() {
  const [count, setCount] = useState(0)

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

export default App
