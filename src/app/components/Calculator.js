'use client'
import { useContext, useState } from "react"
import { Themecontext } from "../context/Themecontext"

function Calculator({ number , inputnum , setNumber , setInputnum , end }) {

    const { bginput , color , bgcon , bgcolor , bgbtn , Changeblue , Changered } = useContext(Themecontext)

    const [ url , setUrl ] = useState('')
    const [ test , setTest ] = useState(true)

    const addTheme = () => {
        if(test == true){
            setUrl(
                {src: 'https://imgurl.ir/uploads/m54366_blackpng.png',
                 src2: 'https://imgurl.ir/uploads/b806317_bluepng.png',
                 src3: 'https://imgurl.ir/uploads/r42070_red.png'}
            )
            setTest(false)
        }
        else{
            setUrl('')
            setTest(true)
        }
    }


    return(
        <div className="container flex justify-center items-center w-full">

            <div className="flex">
                    <div dir="rtl" className="show flex justify-end items-center bg-white py-3">
                        <img
                            onClick={Changered} // تابع Changered برای تصویر بعدی
                            className="theme mx-1"
                            src={url.src2}
                        />
                        <img
                            onClick={Changeblue}
                            // تابع Changered برای تصویر بعدی
                            className="theme mx-1"
                            src={url.src3}
                        />
                    </div>
            </div>

            <div onClick={addTheme} className="w-[1rem] h-[4rem] bg-black rounded-l-xl cursor-pointer">
            </div>


            <div style={{background:bgcolor , color:color}} className="card flex flex-col justify-center items-center w-[30%] bg-red-900 mt-[10rem] py-10 rounded-xl">

                <div className="number flex justify-center items-center w-[100%]">
                    <input
                        style={{background:bginput}} 
                        type="text" 
                        className="w-[80%] h-[4rem] text-3xl px-2 rounded-t-xl"
                        onChange={(e) => setInputnum(e.target.value)}
                        value={number}
                    />
                </div>

                <div style={{background:bgcolor}}  className="btns flex justify-center items-center w-full">
                <div style={{background:bgcon}} className="key w-[80%] flex justify-center items-center flex-wrap gap-3 py-7 rounded-b-xl">
                    
                    <div style={{background:bgbtn}} onClick={()=> setNumber(prevState => prevState ? prevState + '9' : 9)} className="keys p-3 rounded-full w-[18%] flex justify-center items-center">
                        <h1 className="text-3xl">9</h1>
                    </div>

                    <div style={{background:bgbtn}} onClick={()=> setNumber(prevState => prevState ? prevState + '8' : 8)} className="keys p-3 rounded-full w-[18%] flex justify-center items-center">
                        <h1 className="text-3xl">8</h1>
                    </div>

                    <div style={{background:bgbtn}} onClick={()=> setNumber(prevState => prevState ? prevState + '7' : 7)} className="keys p-3 rounded-full w-[18%] flex justify-center items-center">
                        <h1 className="text-3xl">7</h1>
                    </div>

                    <div style={{background:bgbtn}} onClick={()=> setNumber(prevState => prevState ? prevState + '*' : null)} className="keys p-3 rounded-full w-[18%] flex justify-center items-center">
                        <h1 className="text-3xl">*</h1>
                    </div>

                    <div style={{background:bgbtn}} onClick={()=> setNumber(prevState => prevState ? prevState + '6' : 6)} className="keys p-3 rounded-full w-[18%] flex justify-center items-center">
                        <h1 className="text-3xl">6</h1>
                    </div>

                    <div style={{background:bgbtn}} onClick={()=> setNumber(prevState => prevState ? prevState + '5' : 5)} className="keys p-3 rounded-full w-[18%] flex justify-center items-center">
                        <h1 className="text-3xl">5</h1>
                    </div>

                    <div style={{background:bgbtn}} onClick={()=> setNumber(prevState => prevState ? prevState + '4' : 4)} className="keys p-3 rounded-full w-[18%] flex justify-center items-center">
                        <h1 className="text-3xl">4</h1>
                    </div>

                    <div style={{background:bgbtn}} onClick={()=> setNumber(prevState => prevState ? prevState + '/' : null)} className="keys p-3 rounded-full w-[18%] flex justify-center items-center">
                        <h1 className="text-3xl">/</h1>
                    </div>

                    <div style={{background:bgbtn}} onClick={()=> setNumber(prevState => prevState ? prevState + '3' : 3)} className="keys p-3 rounded-full w-[18%] flex justify-center items-center">
                        <h1 className="text-3xl">3</h1>
                    </div>

                    <div style={{background:bgbtn}} onClick={()=> setNumber(prevState => prevState ? prevState + '2' : 2)} className="keys p-3 rounded-full w-[18%] flex justify-center items-center">
                        <h1 className="text-3xl">2</h1>
                    </div>

                    <div style={{background:bgbtn}} onClick={()=> setNumber(prevState => prevState ? prevState + '1' : 1)} className="keys p-3 rounded-full w-[18%] flex justify-center items-center">
                        <h1 className="text-3xl">1</h1>
                    </div>

                    <div style={{background:bgbtn}} onClick={()=> setNumber(prevState => prevState ? prevState + '+' : null)} className="keys p-3 rounded-full w-[18%] flex justify-center items-center">
                        <h1 className="text-3xl">+</h1>
                    </div>

                    <div style={{background:bgbtn}} onClick={()=> setNumber('')} className="keys p-3 rounded-full w-[18%] flex justify-center items-center">
                        <h1 className="text-3xl">C</h1>
                    </div>

                    <div style={{background:bgbtn}} onClick={()=> setNumber(prevState => prevState ? prevState + '0' : null)} className="keys p-3 rounded-full w-[18%] flex justify-center items-center">
                        <h1 className="text-3xl">0</h1>
                    </div>

                    <div style={{background:bgbtn}} onClick={()=> setNumber(prevState => prevState ? prevState + '00' : null)} className="keys p-3 rounded-full w-[18%] flex justify-center items-center">
                        <h1 className="text-3xl">00</h1>
                    </div>

                    <div style={{background:bgbtn}} onClick={end} className="keys p-3 rounded-full w-[18%] flex justify-center items-center">
                        <h1 className="text-3xl">=</h1>
                    </div>

                </div>
                </div>
        
            </div>
        </div>
    )
}

export default Calculator