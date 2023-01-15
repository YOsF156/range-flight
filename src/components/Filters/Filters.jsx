import React, { useContext } from 'react'
import { BusContext } from '../../App'
import Filter from '../Filter/Filter'
import "./Filters.css"

const filtersList = [
    {
        type: "range",
        name: "duration",
        min: 1,
        max: 22,
        init: 3
    },
    {
        type: "range",
        name: "cost",
        min: 100,
        max: 1000,
        init: 250
    },
    {
        type: "range",
        name: "passengers",
        min: 1,
        max: 50,
        step: 2,
        init: 1
    },

]

function Filters() {

    const { handleSubmit } = useContext(BusContext)
    return (
        <form onSubmit={handleSubmit} className='filters-container'>
            {filtersList.map(input => <Filter key={input.name} {...input} />)}
            <button type='submit'>filter</button>
        </form>
    )
}

export default Filters