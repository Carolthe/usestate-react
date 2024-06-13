import { useState } from "react"

export default function Button (){
   const [click, setClick] = useState ("Click!")

    function clicar (){
        setClick("Obrigada!!")
    }

    return(
        <div className="" >
            <button className="w-32 h-12 bg-black text-yellow-300 rounded-full" onClick={clicar}>{click}
            </button>
        </div>
    )
}