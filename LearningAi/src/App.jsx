import { useState } from 'react'

import './App.css'
import UpSidebar from './component/sideBar/UpSidebar'
import Homepage from './component/homepage/Homepage'

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
    
      
    </>
  )
}

export default App
