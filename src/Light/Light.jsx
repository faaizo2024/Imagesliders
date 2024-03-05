
import { useState } from "react" 


function Light(){

const [color, setColor] = useState ("")
const handleOn =() => {

     setColor("yellow")

}

const handleOff =() => {

    setColor("blue")
}





    

    return  <div className="flex justify-center mt-5">

       <div>
        
    <div style={{backgroundColor :color}} className=" w-[300px] h-[300px] rounded-full border-4 border-black " ></div>
       


        <button onClick={handleOn} className="bg-green-500  text-3xl px-3 py-3 ml-16 text-white rounded mt-2">ON</button>
        <button onClick={handleOff} className="bg-red-500  text-3xl px-3 py-3 ml-16 text-white rounded mt-2" >Off</button>


  

    
        </div> 

    </div>
}

export default Light