import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("red")

  return (
    <>

      <div className='w-full h-screen duration-300' style={{ backgroundColor: color }}>
        <div className='flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

          <div className='flex flex-wrap justify-center gap-4 shadow-xl bg-white rounded-3xl px-4 py-2  mt-10 '>
            <button onClick={()=> setColor("red")} className='outline-none px-3 py-1 rounded-full text-white shadow-xl' style={{ backgroundColor: 'red' }}>Red</button>
          </div>
          <div className='flex flex-wrap justify-center gap-4 shadow-xl bg-white rounded-3xl px-4 py-2 mt-10 '>
            <button onClick={()=> setColor("blue")} className='outline-none px-3 py-1 rounded-full text-white shadow-xl' style={{ backgroundColor: 'blue' }}>Blue</button>
          </div>
          <div className='flex flex-wrap justify-center gap-4 shadow-xl bg-white rounded-3xl px-4 py-2 mt-10 '>
            <button onClick={()=> setColor("black")} className='outline-none px-3 py-1 rounded-full text-white shadow-xl' style={{ backgroundColor: 'black' }}>Black</button>
          </div>
          <div className='flex flex-wrap justify-center gap-4 shadow-xl bg-white rounded-3xl px-4 py-2 mt-10 '>
            <button onClick={()=> setColor("grey")} className='outline-none px-3 py-1 rounded-full text-white shadow-xl' style={{ backgroundColor: 'grey' }}>Grey</button>
          </div>
          <div className='flex flex-wrap justify-center gap-4 shadow-xl bg-white rounded-3xl px-4 py-2 mt-10 '>
            <button onClick={()=> setColor("yellow")} className='outline-none px-3 py-1 rounded-full text-black shadow-xl' style={{ backgroundColor: 'yellow' }}>Yellow</button>
          </div>
          <div className='flex flex-wrap justify-center gap-4 shadow-xl bg-white rounded-3xl px-4 py-2 mt-10 '>
            <button onClick={()=> setColor("green")} className='outline-none px-3 py-1 rounded-full text-white shadow-xl' style={{ backgroundColor: 'green' }}>Green</button>
          </div>
          <div className='flex flex-wrap justify-center gap-4 shadow-xl bg-white rounded-3xl px-4 py-2 mt-10 '>
            <button onClick={()=> setColor("orange")} className='outline-none px-3 py-1 rounded-full text-grey shadow-xl' style={{ backgroundColor: 'orange' }}>Orange</button>
          </div>
          <div className='flex flex-wrap justify-center gap-4 shadow-xl bg-white rounded-3xl px-4 py-2 mt-10 '>
            <button onClick={()=> setColor("olive")} className='outline-none px-3 py-1 rounded-full text-grey shadow-xl' style={{ backgroundColor: 'olive' }}>Olive</button>
          </div>
          <div className='flex flex-wrap justify-center gap-4 shadow-xl bg-white rounded-3xl px-4 py-2 mt-10 '>
            <button onClick={()=> setColor("aqua")} className='outline-none px-3 py-1 rounded-full text-grey shadow-xl' style={{ backgroundColor: 'aqua' }}>Aqua</button>
          </div>
          <div className='flex flex-wrap justify-center gap-4 shadow-xl bg-white rounded-3xl px-4 py-2 mt-10 '>
            <button onClick={()=> setColor("white")} className='outline-none px-3 py-1 rounded-full text-black shadow-xl' style={{ backgroundColor: 'white' }}>white</button>
          </div>
          <div className='flex flex-wrap justify-center gap-4 shadow-xl bg-white rounded-3xl px-4 py-2 mt-10 '>
            <button onClick={()=> setColor("pink")} className='outline-none px-3 py-1 rounded-full text-black shadow-xl' style={{ backgroundColor: 'pink' }}>Pink</button>
          </div>
          <div className='flex flex-wrap justify-center gap-4 shadow-xl bg-white rounded-3xl px-4 py-2 mt-10 '>
            <button onClick={()=> setColor("purple")} className='outline-none px-3 py-1 rounded-full text-black shadow-xl' style={{ backgroundColor: 'purple' }}>Purple</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
