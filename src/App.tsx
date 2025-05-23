import { useEffect } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Aframe from './components/Aframe'
import WoodWorking from './components/Woodworking'

function App() {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setVH()
    window.addEventListener('resize', setVH)

    return () => {
      window.removeEventListener('resize', setVH)
    }
  }, [])

  return (
    <div
      className='bg-[#031713] w-full min-h-screen overflow-x-hidden'
      style={{ height: 'calc(var(--vh, 100vh) * 100)' }}
    >
      <div className='mx-5 my-7 md:mx-16 md:my-10'>
        <div>
          <AboutMe />
        </div>
        <div className='lg:mt-30'>
          <Aframe />
        </div>
        <div className='mt-12'>
          <WoodWorking />
        </div>
      </div>
    </div>
  )
}

export default App
