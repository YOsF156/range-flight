import React, { useContext } from 'react'
import { Context } from '../../App'
import FlightCard from '../Flight/Flight'
import "./ListOfData.css"


function ListOfData() {
    const { filteredFlights } = useContext(Context)
    return (
        <div className="list">
            {
                filteredFlights.map(flight => <FlightCard flight={flight} />)
            }
        </div>
    )
}

export default ListOfData