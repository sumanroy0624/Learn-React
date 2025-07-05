import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState('bg-neutral-400');



  return (
    <>
      <div
       
        className={`w-full border h-screen duration-200 ${color}`}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-row justify-center bg-white rounded-full py-2 px-5">
            <button onClick={()=>setColor('bg-red-500')}  className="bg-red-500 rounded-full px-5 mx-3 py-2 text-white shadow-lg ">
              Red
            </button>
            <button  onClick={()=>setColor('bg-amber-300')} className="bg-amber-300 rounded-full px-5 mx-3 py-2 text-amber-950 shadow-lg ">
              Yellow
            </button>
            <button  onClick={()=>setColor('bg-cyan-500')} className="bg-cyan-500 rounded-full px-5 mx-3 py-2 text-b shadow-lg ">
              Cyan
            </button>
            <button onClick={()=>setColor('bg-blue-400')} className="bg-blue-400 rounded-full px-5 mx-3 py-2 text-black shadow-lg ">
              Blue
            </button>
            <button  onClick={()=>setColor('bg-emerald-400')} className="bg-emerald-400 rounded-full px-5 mx-3 py-2 text-black   shadow-lg ">
              Green
            </button>
            <button onClick={()=>setColor('bg-neutral-400')} className="bg-neutral-400 rounded-full px-5 mx-3 py-2 text-black shadow-lg ">
              Gray
            </button>
            <button onClick={()=>setColor('bg-pink-500')} className="bg-pink-500 rounded-full px-5 mx-3 py-2 text-black shadow-lg ">
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
