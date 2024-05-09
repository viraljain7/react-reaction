import { useEffect, useRef, useState } from 'react'
import './App.css'
import { useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")
  const [allowNumber, setAllowNumber] = useState(false)
  const [allowSpChar, setAllowSpChar] = useState(false)

  //useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let generatedPass = "";
    let str = "ABCABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (allowSpChar) str += "!@#$%^&*(){}"
    if (allowNumber) str += "1234567890"

    for (let index = 1; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      generatedPass += str.charAt(char);
    }
    setPassword(generatedPass)
  }, [length, allowNumber, allowSpChar, setPassword])


  useEffect(() => {
    passwordGenerator()
    // console.log(password);
  }, [length, allowNumber, allowSpChar, setPassword])

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>


      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3 '>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            className="outline-none w-full py-1 px-3"
          />
          <button
            onClick={copyToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              className='cursor-pointer'
              type="range"
              min={8}
              max={20}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id='numberInput'
              defaultChecked={allowNumber}
              onChange={() => { setAllowNumber((prev) => !prev) }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id='characterInput'
              defaultChecked={allowSpChar}
              onChange={() => { setAllowSpChar((prev) => !prev) }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
        <div className="my-6 flex shadow rounded-lg overflow-hidden mb-4 bg-slate-700">
          <button
            className='outline-none bg-blue-700 text-white p-2 w-[100vw]'
            onClick={passwordGenerator}
          >Regenerate</button>
        </div>
      </div>


    </>
  );


}


export default App;
