import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setlength] = useState(6)
  const [number, setNumber] = useState(false)
  const [charecter, setCharecter] = useState(false)
  const [password, setPassword] = useState(" ")

 const paswdRef= useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pswd = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (charecter) str += "~!@#$$%^&*"
    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pswd += str.charAt(char)
    }
    setPassword(pswd)
  },
    [length, number, charecter, setPassword])

    const copyPassword = useCallback(() => {
      window.navigator.clipboard.writeText(password)
      paswdRef.current?.select()
    })

    useEffect(() => {
      PasswordGenerator()
    },[length,number,charecter,PasswordGenerator])

  return (
    <>
      <div className=' w-full max-w-md mx-auto text-white py-8 px-3 my-8 bg-black shadow-md rounded-lg'>
        <h1 className='text-center text-white my-3 py-2 font-serif text-lg'> Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden'>
          <input
            type="text"
            value={password}
            placeholder='password'
            readOnly
            className='outline-none w-full py-2 px-3 text-black'
            ref={paswdRef}
          />
          <button onClick={copyPassword} className='text-white text-center bg-blue-600 px-3 py-1'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>Length:{length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={number}
              id='numInput'
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label>Number:{number}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charecter}
              id='charInput'
              onChange={() => {
                setCharecter((prev) => !prev);
              }}
            />
            <label>Charecter:{charecter}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
