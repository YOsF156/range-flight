import React from 'react';

const FlightCard = ({ flight }) => {
    return (
        <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={flight.airlineLogo} style={{ width: '80px', height: '80px', marginRight: '20px' }} alt={flight.airline} />
                <div>
                    <h3 style={{ marginBottom: 0 }}>{flight.airline}</h3>
                    <p style={{ fontSize: '12px', color: 'gray', marginBottom: 0 }}>Flight {flight.id}</p>
                </div>
            </div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <p style={{ marginBottom: '5px' }}>Departure: <b>{flight.departure}</b></p>
                    <p style={{ marginBottom: '5px' }}>Arrival: <b>{flight.arrival}</b></p>
                </div>
                <div>
                    <p style={{ marginBottom: '5px' }}>Duration: <b>{flight.duration} hrs</b></p>
                    <p style={{ marginBottom: '5px' }}>Passengers: <b>{flight.passengers}</b></p>
                    <p style={{ marginBottom: '5px' }}>Cost: <b>${flight.cost}</b></p>
                </div>
            </div>
        </div>
    );
};

export default FlightCard;
