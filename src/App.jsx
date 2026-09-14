import { useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Chat from './components/Chat'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ScrollToTop />
      <div>
        <Navbar className=''/>
        <div>
          <Outlet />
          <Chat />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
