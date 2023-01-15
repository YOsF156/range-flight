import React, { useContext } from 'react'
import { Context } from '../../App'

function Filter(props) {
    console.log("🚀 ~ file: Filter.jsx:5 ~ Filter ~ props", props)

    const { handleInputs, inputs } = useContext(Context)
    return (
        <label>
            <span>{props.name}</span>
            <input {...props} value={inputs[props.name] ? inputs[props.name] : props.max} onChange={handleInputs} />
            <span className="range-tooltip">{inputs[props.name]}</span>


        </label>
    )
}

export default Filter