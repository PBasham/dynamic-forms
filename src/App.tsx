import { useState } from "react"
import './assets/styling/App.css'
// @ts-ignore
import { dynamicInputsData, dropdownData } from "./data/inputData.js"

function App() {

    console.log(dynamicInputsData)

    // const csvFile = "./data/dynamic questions.csv"


    const [inputFields, setInputFields] = useState([])

    return (
        <div className="App">
            <form className="form-wrapper">
                {dynamicInputsData.map((current: {
                    question_id: number | null
                    question: string | null
                    value_type: string | null
                    line_item_description: string | null
                    qb_product_sku: string | null
                    scale_multiplier: number | null
                    question_number: number | null
                }, idx: number) => (
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
                                {dropdownData.filter((curOption: any) => curOption.question_id === current.question_id).map((curList: any, idx: number) => (
                                    <option key={idx} value={curList.value}>{curList.value}</option>
                                ))}
                                {/* <option value="abc">abc</option> */}
                            </select>
                        </div>
                ))}
            </form>
        </div>
    )
}

export default App
