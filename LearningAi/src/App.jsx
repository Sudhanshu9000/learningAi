import { useState } from 'react'

import './App.css'
import UpSidebar from './component/sideBar/UpSidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <UpSidebar/>
    </div>
    
      
    </>
  )
}

export default App
