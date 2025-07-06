import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [lenght, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordRef=useRef(null);
   
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const nums = "0123456789";
    const specialChars = "!@#$%^&*(){}[]|?/>.<,+=_-`~";
    if (numberAllowed) {
      str += nums;
    }
    if (symbolAllowed) {
      str += specialChars;
    }

    for (let i = 1; i <= lenght; i++) {
      let ind = Math.floor(Math.random() * str.length);
      pass += str.charAt(ind);
    }
    setPassword(pass);
  }, [lenght, numberAllowed, symbolAllowed, setPassword]);

  const copyPasswordToClipBoard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,Math.min(33,Password.length));
    window.navigator.clipboard.writeText(Password);
  },[Password]) 

  useEffect(() => {
    generatePassword();
  }, [lenght, numberAllowed, symbolAllowed, setPassword, generatePassword]);

  return (
    <>
      <div className=" w-full max-w-md mx-auto my-5  bg-gray-800 rounded-lg text-white py-8 mx-4">
        <h1 className="text-2xl text-center font-bold mb-4">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            readOnly
            placeholder="Generated Password"
            ref={passwordRef}
            className="outline-none w-full px-4 py-2 bg-white text-black mx-2 rounded-lg"
          />
          <button onClick={copyPasswordToClipBoard} className="outline-none text-white px-3 mx-2 rounded-lg bg-blue-700 hover:bg-blue-800">
            Copy
          </button>
        </div>

        <div className="flex text-sm gapx-x-2 ">
          <div className="flex items-center gap-x-1 mx-1">
            <input
              type="range"
              min={6}
              max={100}
              value={lenght}
              className="cursor-pointer w-full"
              onChange={(e) => setLenght(e.target.value)}
            />
            <label> Lenght:{lenght}</label>
          </div>

          <div className="flex items-center gap-x-1 mx-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed(!numberAllowed);
              }}
              className="cursor-pointer"
              id="numberinput"
            />
            <label htmlFor="numberinput">Include Numbers</label>
          </div>

          <div className="flex items-center gap-x-1 mx-2">
            <input
              type="checkbox"
              defaultChecked={symbolAllowed}
              onChange={() => {
                setSymbolAllowed((prev)=>!prev);
              }}
              className="cursor-pointer"
              id="symbolinput"
            />
            <label htmlFor="numberinput">Symbol Numbers</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
