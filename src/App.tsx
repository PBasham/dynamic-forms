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
                    current.value_type === "dropdown" ?
                        <div key={idx
                        }>
                            <h4>{current.question}</h4>
                            <div><label htmlFor=""></label>yes<input type="radio" name="answer" id="yes" value="yes" /></div>
                            <div><label htmlFor=""></label>no<input type="radio" name="answer" id="no" value="no" /></div>
                            <div><label htmlFor=""></label>idk<input type="radio" name="answer" id="idk" value="idk" /></div>
                        </div>
                        :
                        <div key={idx
                        }>
                            <label>{current.question}</label>
                            <select>
                                <option value="abc">abc</option>
                            </select>
                        </div>
                ))}
            </form>
        </div>
    )
}

export default App
