'use client'
import { createContext, useReducer } from "react";


export const Themecontext = createContext()

const themeReducer = ( action , state ) => {
    if(action.type == 'BLUECHANGE'){
        return {...state , color:'white' , bgcolor: 'rgb(34, 34, 139)' , bgbtn: 'black' , bginput:'lightblue' , bgcon:'rgb(71, 71, 224)'}
    }
    else if(action.type == 'REDCHANGE'){
        return {...state , color:'rgb(165, 165, 165)' , bgcolor:'rgb(108, 0, 0)' , bgbtn: 'black' , bginput:'rgb(138, 119, 119)' , bgcon:'rgb(128, 0, 0)'}
    }
    else if(action.type == 'GREENCHANGE'){
        return {...state , color:'white' , bgcolor:'balck' , bgbtn: 'rgb(34, 34, 34)' , bginput:'rgb(173, 173, 173)' , bgcon:'black'}
    }
    else{
        return state
    }
}


export function ThemeProvider({children}) {

    const [ state , dispatch ] = useReducer(themeReducer , {
        color: 'white',
        bgcolor: 'rgb(34, 34, 139)',
        bgcon: 'rgb(71, 71, 224)',
        bgbtn: 'black',
        bginput:'lightblue'
    })

    const Changeblue = ( color , bgcolor , bgbtn , bgcon , bginput ) => {
        dispatch({ type: 'BLUECHANGE' , payload:color , payload:bgcolor , payload:bgbtn , payload:bginput , payload:bgcon})
    }
    const Changered = ( color , bgcolor , bgbtn , bgcon , bginput ) => {
        dispatch({ type: 'REDCHANGE' , payload:color , payload:bgcolor , payload:bgbtn , payload:bginput , payload:bgcon})
    }
    const Changegreen = ( color , bgcolor , bgbtn , bgcon , bginput ) => {
        dispatch({ type: 'GREENCHANGE' , payload:color , payload:bgcolor , payload:bgbtn , payload:bginput , payload:bgcon})
    }

    return(
        <Themecontext.Provider value={{...state , Changeblue , Changered , Changegreen}}>
            {children}
        </Themecontext.Provider>
    )
}