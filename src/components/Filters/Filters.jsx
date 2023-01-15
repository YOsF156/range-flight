import React from 'react'
import Filter from '../Filter/Filter'
import "./Filters.css"

const filtersList = [
    {
        type: "range",
        name: "duration",
        min: 1,
        // defaultValue: 1,
        max: 22
    },
    {
        type: "range",
        name: "cost",
        min: 100,
        // defaultValue: 500,
        max: 1000
    },
    {
        type: "range",
        name: "passengers",
        min: 1,
        // defaultValue: 500,
        max: 50
    },

]

function Filters() {
    return (
        <form onSubmit={(e) => { e.preventDefault(); }} className='filters-container'>
            {filtersList.map(input => <Filter key={input.name} {...input} />)}
            <button type='submit'>filter</button>
        </form>
    )
}

export default Filters