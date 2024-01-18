import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style = {{backgroundColor : color }} >
        <div className='flex flex-wrap fixed bottom-12 justify-center inset-x-0 px-2'>
          <div className='flex gap-4 py-2 px-4 outline-none shadow-md rounded-2xl bg-white'>
            <button 
            onClick={() => setColor("Red")} className='py-2 px-6 rounded-xl text-white shadow-lg outline-1' style={{backgroundColor : "red"}} >Red</button>
            <button
            onClick={() => setColor("Green")} className='py-2 px-6 rounded-xl text-white shadow-lg outline-1' style={{backgroundColor : "green"}} >Green</button>
            <button 
            onClick={() => setColor("Yellow")} className='py-2 px-6 rounded-xl text-white shadow-lg outline-1' style={{backgroundColor : "yellow"}} >Yellow</button>
            <button 
            onClick={() => setColor("Black")}className='py-2 px-6 rounded-xl text-white shadow-lg outline-1' style={{backgroundColor : "black"}} >Black</button>
            <button 
            onClick={() => setColor("Pink")}className='py-2 px-6 rounded-xl text-white shadow-lg outline-1' style={{backgroundColor : "pink"}} >Pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
