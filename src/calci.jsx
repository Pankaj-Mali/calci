import { useState } from "react"

import ("./calci.css")

 const Calculator  = () => {

    const [input , setInput] = useState("")

    const result=()=>{
    let res=eval(input);
    setInput(res)
    }

    const back=()=>{
        let res= input.substring(0, input.length-1);
        setInput(res)
    }

    const checker= (e)=>{

        if(input[input.length-1] === "/" || input[input.length-1] === "-"||input[input.length-1] === "+" || input[input.length-1] === "*"){
            setInput(input)
        }else{
            setInput(input+e.target.value)

        }

    }


  return (
    <div className=" main-container"> 
     <div className="header">
        <h1>Calculator</h1> 
     </div> 
     <div className="cali">
        <div className="display">
            <input type="text" className="input" value={input}/>
        </div>

        <div className="buttonholder">
            <button className="topbutton" onClick={()=>{setInput("")}}>c</button>
            <button className="topbutton2" onClick={back}>back</button>
        </div>

        <div className="buttonholder">
            <button className="button" onClick={()=>{setInput(input+"1")}}>1</button>
            <button className="button2" onClick={()=>{setInput(input+"2")}}>2</button>
            <button className="button2" onClick={()=>{setInput(input+"3")}}>3</button>
            <button className="button2" onClick={checker} value={"/"}>/</button>
        </div>
        <div className="buttonholder">
            <button className="button" onClick={()=>{setInput(input+"4")}}>4</button>
            <button className="button2"  onClick={()=>{setInput(input+"5")}}>5</button>
            <button className="button2" onClick={()=>{setInput(input+"6")}}>6</button>
            <button className="button2" onClick={checker} value={"-"}>-</button>
        </div>
        <div className="buttonholder" >
            <button className="button" onClick={()=>{setInput(input+"7")}}>7</button>
            <button className="button2" onClick={()=>{setInput(input+"8")}}>8</button>
            <button className="button2" onClick={()=>{setInput(input+"9")}}>9</button>
            <button className="button2" onClick={checker} value={"+"}>+</button>
        </div>
        <div className="buttonholder">
            <button className="button" onClick={()=>{setInput(input+".")}}>.</button>
            <button className="button2" onClick={()=>{setInput(input+"0")}}>0</button>
            <button className="button2" onClick={result}>=</button>
            <button className="button2" onClick={checker} value={"*"}>*</button>
        </div>
    </div>   
    </div>
  )
}

export default Calculator