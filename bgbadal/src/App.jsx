import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#000");

  return (
    <div className='w-full h-screen flex justify-center ' style={{ backgroundColor: color }}>
      <div className=' fixed flex justify-evenly w-4/5 h-20 bg-white rounded-lg m-5 bottom-12'>
        <button className='bg-green-400 p-3 m-3 rounded-xl w-20' onClick={() => setColor('Green')}>Green</button>
        <button className='bg-red-400 p-3 m-3 rounded-xl w-20' onClick={() => setColor('red')}>Red</button>
        <button className='bg-blue-400 p-3 m-3 rounded-xl w-20' onClick={() => setColor('blue')}>Blue</button>
        <button className='bg-yellow-300 p-3 m-3 rounded-xl w-20' onClick={() => setColor('yellow')}>Yellow</button>
        <button className='bg-pink-400 p-3 m-3 rounded-xl w-20' onClick={() => setColor('pink')}>Pink</button>
        <button className='bg-orange-300 p-3 m-3 rounded-xl w-20' onClick={() => setColor('orange')}>Orange</button>
        <button className='bg-purple-400 p-3 m-3 rounded-xl w-20' onClick={() => setColor('purple')}>Purple</button>
      </div>
    </div>
  )
}

export default App


{/* <div className='bg-black rounded p-1.5'>
        <button className='bg-green-600 text-black p-3 m-3' color={bg - green - 600}>Green</button>
        <button className='bg-red-600 text-black p-3 m-3' color={bg - red - 600}>Red</button>
        <button className='bg-blue-600 text-black p-3 m-3' color={bg - blue - 600}>Blue</button>
        <button className='bg-yellow-600 text-black p-3 m-3' color={bg - yellow - 600}>yellow</button>
        <button className='bg-purple-600 text-black p-3 m-3' color={bg - purple - 600}>purple</button>
        <button className='bg-gray-600 text-black p-3 m-3' color={bg - black - 600}>black</button>
        <button className='bg-pink-600 text-black p-3 m-3' color={bg - pink - 600}>pink</button>
        <button className='bg-orange-600 text-black p-3 m-3' color={bg - orange - 600}>orange</button>
      </div> */}