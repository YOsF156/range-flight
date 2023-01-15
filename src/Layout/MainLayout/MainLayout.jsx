import React from 'react'
import Filters from '../../components/Filters/Filters'
import ListOfData from '../../components/ListOfData/ListOfData'

function MainLayout() {
    return (
        <div className="main">
            <ListOfData />
            <Filters />
        </div>
    )
}

export default MainLayout