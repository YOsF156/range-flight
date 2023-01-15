import React, { useContext } from 'react'
import { BusContext } from '../../App'
import FlightCard from '../Flight/Flight'
import "./ListOfData.css"


function ListOfData() {
    // const { filteredFlights } = useContext(BusContext)
    const { flightsList } = useContext(BusContext)
    return (
        <div className="list">
            <span>{flightsList.length}</span>
            {
                flightsList.map(flight => <FlightCard flight={flight} />)
            }
        </div>
    )
}

export default ListOfData