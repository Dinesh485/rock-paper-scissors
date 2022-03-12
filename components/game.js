import { AnimatePresence, useAnimation } from "framer-motion";
import { useState,useEffect } from "react";
import { useRef } from "react";
import Animation from "./animation";
import Dialogs from "./dialogs";
import ShowResult from "./showResult";
import UserSelection from "./UserSelection";
import { getCinput, getResult } from "./utils";

const Game = () => {
    const [input, setInput] = useState(null)
    const [result, setResult] = useState(null)
    const [pInput, setPInput] = useState(null)
    const [cInput, setCInput] = useState(null)
    const [disableSelect, setDisableSelect] = useState(false)
    const game = useRef(null)
    const control = useAnimation()

    useEffect( () =>{
    
        if(input){
            setDisableSelect(true)
            control.start('start').then(() =>{
                setCInput(getCinput())
                setPInput(input)

            })
        }

    },[input,control])

    useEffect(() =>{
      if(cInput && pInput){
          setTimeout(()=>{
            setResult(getResult(pInput,cInput))
          },500)
      }
    },[cInput, pInput])

    useEffect(() =>{
        game.current.style.height = window.innerHeight + 'px'
    },[])

    const handleReset =() =>{
        setInput(null);
        setCInput(null)
        setPInput(null)
        setDisableSelect(false)
        setResult(null)
    }

    return ( 
        <div ref = {game} className = 'flex flex-col p-5 items-center xl:gap-10 2xl:p-20'>
            <Animation pInput ={pInput} cInput = {cInput} control ={control} />
            <h1 className="font-bold text-center text-3xl my-5">Pick one</h1>
            <UserSelection input= {input} setInput= {setInput} disableSelect = {disableSelect}/>
            <Dialogs control={control} />
            <AnimatePresence>
            {result && <ShowResult result = {result} handleReset = {handleReset} />}
            </AnimatePresence>
            
        </div>
     );
}
 
export default Game;