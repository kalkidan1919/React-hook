import { useState,useEffect } from 'react'


import Index from "./components/Index"
import UseEffect from './components/UseEffect';
import { createContext } from 'react';

export const mycontext =createContext();
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Index /> */}
      {/* <UseEffect/> */}
      <mycontext.Provider value="hi kall"><component1/></mycontext.Provider>
      
    </>
  );
}

export default App
