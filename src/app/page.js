'use client'
import { useState } from "react";
import Calculator from "./components/Calculator";
import { ThemeProvider } from "./context/Themecontext";

export default function Home() {


  const [ inputnum , setInputnum ] = useState()
  const [ number , setNumber ] = useState()


  const end = () => {
    const result = eval(number);
    setNumber(result.toString());
  };
  


  return (
    <ThemeProvider>
        <main className="flex justify-center items-center">
          <Calculator number={number} setNumber={setNumber} setInputnum={setInputnum} inputnum={inputnum} end={end}/>
        </main>
    </ThemeProvider>
    
  );
}
