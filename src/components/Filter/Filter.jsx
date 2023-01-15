import React, { useContext } from 'react'
import { BusContext } from '../../App'

function Filter(props) {

    const { handleInputs, inputs } = useContext(BusContext)

    return (
        <label>
            <span>{props.name}</span>
            <input {...props} value={inputs[props.name]} onChange={handleInputs} />
            <input {...props} type="number" value={inputs[props.name]} onChange={handleInputs} className="range-tooltip"></input>
        </label>


    )
}

export default Filter