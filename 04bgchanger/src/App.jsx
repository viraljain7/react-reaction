import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bg, setBg] = useState("white")
  return (
    <div className="p-4 w-[100vw] h-[100vh]" style={{ background: bg }}>
      <div className="m-auto bg-green-100 w-[80vw] h-[50px]  rounded-md flex items-center justify-evenly" >
        <div onClick={() => setBg("red")} className="border rounded-md bg-red-400 h-[25px] w-[80px] flex items-center justify-center"></div>
        <div onClick={() => setBg("blue")} className="border rounded-md bg-blue-400 h-[25px] w-[80px] flex items-center justify-center"></div>
        <div onClick={() => setBg("yellow")} className="border rounded-md bg-yellow-400 h-[25px] w-[80px] flex items-center justify-center"></div>
        <div onClick={() => setBg("green")} className="border rounded-md bg-green-400 h-[25px] w-[80px] flex items-center justify-center"></div>
        <div onClick={() => setBg("pink")} className="border rounded-md bg-pink-900 h-[25px] w-[80px] flex items-center justify-center"></div>
        <div onClick={() => setBg("purple")} className="border rounded-md bg-purple-400 h-[25px] w-[80px] flex items-center justify-center"></div>
        <div onClick={() => setBg("orange")} className="border rounded-md bg-orange-400 h-[25px] w-[80px] flex items-center justify-center"></div>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
