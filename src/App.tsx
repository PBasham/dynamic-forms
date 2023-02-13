import { useState } from "react"
import './assets/styling/App.css'

import { dynamicInputsData } from "./data/inputData.js"

function App() {

    console.log(dynamicInputsData)

// const csvFile = "./data/dynamic questions.csv"


const [inputFields, setInputFields] = useState([])

  return (
    <div className="App">
        <form className="form-wrapper">
            {dynamicInputsData.map((current: object, idx: number) => (
                <>
                <label >{current.question}</label>
                <input type="text" key={idx}  />
                </>
            ))}
        </form>
    </div>
  )
}

export default App
