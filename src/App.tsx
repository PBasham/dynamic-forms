import { useEffect, useState, useSyncExternalStore } from "react"
import './assets/styling/App.css'
// @ts-ignore
import { arrFormInputs } from "./data/inputData.js"
import { arrDropdownData } from "./data/dropdownData.js"

function App() {

    // const csvFile = "./data/dynamic questions.csv"

    const [inputFields, setInputFields] = useState<any>([])
    const [dropDownData, setDropDownData] = useState<any>([])

    useEffect(() => {
        // @ts-ignore
        arrFormInputs.sort((a,b) => a.question_number > b.question_number ? 1 : -1)

        setInputFields(arrFormInputs)
        setDropDownData(arrDropdownData)
    }, [])


    return (
        <div className="App">
            <form className="form-wrapper">
                {inputFields.map((current: {
                    question_id: number | null
                    question: string | null
                    value_type: string | null
                    line_item_description: string | null
                    qb_product_sku: string | null
                    scale_multiplier: number | null
                    question_number: number | null
                },
                    idx: number) => (
                    current.value_type === "dropdown" ?

                        <div key={idx
                        }>
                            <h3>{current.question_number}<span>{current.question}</span></h3>
                            <select className="form-select" >
                                {arrDropdownData.filter((curOption: any) => curOption.question_id === current.question_id).map((curList: any, idx: number) => (
                                    <option className="form-option" key={idx} value={curList.value} >{curList.label}</option>
                                ))}
                            </select>
                        </div>

                        :

                        <div key={idx
                        } >
                            <h3>{current.question_number}<span>{current.question}</span></h3>
                            <div className="radio-btn-group">
                                <label htmlFor={`question-${current.question_id}-yes`}>
                                    <input className="radio-btn" type="radio" name={`question-${current.question_id}-ans`} id={`question-${current.question_id}-yes`} value="yes" />
                                    Yes</label>
                                <label htmlFor={`question-${current.question_id}-no`}>
                                    <input className="radio-btn" type="radio" name={`question-${current.question_id}-ans`} id={`question-${current.question_id}-no`} value="no" />
                                    No</label>
                                <label htmlFor={`question-${current.question_id}-idk`}>
                                    <input className="radio-btn" type="radio" name={`question-${current.question_id}-ans`} id={`question-${current.question_id}-idk`} value="idk" />
                                    I don't Know</label>
                            </div>
                        </div>
                ))}
            </form>
        </div>
    )
}

export default App
