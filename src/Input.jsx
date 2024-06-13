import { useState } from "react"

export default function (){
    const [input, setInput] = useState ("")
    function handlechange (event) {
        setInput(event.target.value)
}
    return(
        <div className="mt-10">
        <input className="bg-black w-96 h-12 text-white rounded-full p-5"
                onChange={handlechange}
                placeholder="Digite..."/>
            <h1 className="mt-10 text-yellow-400 text-4xl font-semibold">{input}</h1>
        </div>
    )
}