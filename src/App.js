import { createContext, useContext, useMemo, useState } from "react";
import MainLayout from "./Layout/MainLayout/MainLayout";

export const BusContext = createContext()

const flights = [
  {
    id: 1,
    duration: 3,
    cost: 150,
    passengers: 20,
    departure: "New York",
    arrival: "Los Angeles",
    airline: "Delta",
    airlineLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Delta_Air_Lines_Logo.svg/1200px-Delta_Air_Lines_Logo.svg.png"
  },
  {
    id: 2,
    duration: 12,
    cost: 550,
    passengers: 30,
    departure: "Chicago",
    arrival: "Houston",
    airline: "American Airlines",
    airlineLogo: "https://www.logo.wine/a/logo/American_Airlines/American-Airlines-Logo.wine.svg"
  },
  {
    id: 3,
    duration: 18,
    cost: 800,
    passengers: 40,
    departure: "Boston",
    arrival: "San Francisco",
    airline: "United",
    airlineLogo: "https://www.logo.wine/a/logo/United_Airlines/United-Airlines-Logo.wine.svg"
  },
  {
    id: 4,
    duration: 22,
    cost: 1000,
    passengers: 50,
    departure: "Miami",
    arrival: "Seattle",
    airline: "Alaska Airlines",
    airlineLogo: "https://www.logo.wine/a/logo/Alaska_Airlines/Alaska-Airlines-Logo.wine.svg"
  },
  {
    id: 5,
    duration: 1,
    cost: 100,
    passengers: 2,
    departure: "Dallas",
    arrival: "New Orleans",
    airline: "Southwest",
    airlineLogo: "https://www.logo.wine/a/logo/Southwest_Airlines/Southwest-Airlines-Logo.wine.svg"
  },
  {
    id: 6,
    duration: 2,
    cost: 200,
    passengers: 2,
    departure: "Houston",
    arrival: "New York",
    airline: "JetBlue",
    airlineLogo: "https://www.logo.wine/a/logo/JetBlue/JetBlue-Logo.wine.svg"
  },
  {
    id: 7,
    duration: 4,
    cost: 250,
    passengers: 15,
    departure: "Los Angeles",
    arrival: "Chicago",
    airline: "Spirit",
    airlineLogo: "https://www.logo.wine/a/logo/Spirit_Airlines/Spirit-Airlines-Logo.wine.svg"
  },
  {
    id: 8,
    duration: 5,
    cost: 300,
    passengers: 25,
    departure: "San Francisco",
    arrival: "Boston",
    airline: "Frontier",
    airlineLogo: "https://www.logo.wine/a/logo/Frontier_Airlines/Frontier-Airlines-Logo.wine.svg"
  },
  {
    id: 9,
    duration: 6,
    cost: 350,
    passengers: 20,
    departure: "Seattle",
    arrival: "Miami",
    airline: "Hawaiian Airlines",
    airlineLogo: "https://www.logo.wine/a/logo/Hawaiian_Airlines/Hawaiian-Airlines-Logo.wine.svg"
  },
  {
    id: 10,
    duration: 8,
    cost: 400,
    passengers: 30,
    departure: "New Orleans",
    arrival: "Dallas",
    airline: "AirTran",
    airlineLogo: "https://www.logo.wine/a/logo/AirTran_Airways/AirTran-Airways-Logo.wine.svg"
  },
  {
    id: 11,
    duration: 10,
    cost: 450,
    passengers: 35,
    departure: "Houston",
    arrival: "Chicago",
    airline: "Virgin America",
    airlineLogo: "https://www.logo.wine/a/logo/Virgin_America/Virgin-America-Logo.wine.svg"
  },
  {
    id: 12,
    duration: 11,
    cost: 500,
    passengers: 40,
    departure: "New York",
    arrival: "Houston",
    airline: "Air Canada",
    airlineLogo: "https://www.logo.wine/a/logo/Air_Canada/Air-Canada-Logo.wine.svg"
  },
  {
    id: 13,
    duration: 13,
    cost: 600,
    passengers: 45,
    departure: "Los Angeles",
    arrival: "New York",
    airline: "Air China",
    airlineLogo: "https://www.logo.wine/a/logo/Air_China/Air-China-Logo.wine.svg"
  },
  {
    id: 14,
    duration: 15,
    cost: 700,
    passengers: 50,
    departure: "Chicago",
    arrival: "Los Angeles",
    airline: "Emirates",
    airlineLogo: "https://www.logo.wine/a/logo/Emirates/Emirates-Logo.wine.svg"
  },
  {
    id: 15,
    duration: 17,
    cost: 750,
    passengers: 30,
    departure: "San Francisco",
    arrival: "Chicago",
    airline: "China Eastern",
    airlineLogo: "https://www.logo.wine/a/logo/China_Eastern_Airlines/China-Eastern-Airlines-Logo.wine.svg"
  }]


function App() {
  const [flightsList, setFlightsList] = useState(flights)
  const [inputs, setInputs] = useState({
    duration: 3,
    cost: 250,
    passengers: 1
  });
  console.log("🚀 ~ file: App.js:162 ~ App ~ inputs", inputs)

  // const filteredFlights = useMemo(() => {
  //   return flights.filter(flight =>
  //     flight.duration <= inputs.duration && flight.cost <= inputs.cost && flight.passengers >= inputs.passengers
  //   )
  // }, [inputs])



  const handleSubmit = (e) => {
    e.preventDefault()
    setFlightsList(flights.filter(flight =>
      flight.duration <= inputs.duration && flight.cost <= inputs.cost && flight.passengers >= inputs.passengers
    ))
  }



  const handleInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }
  return (
    <div className="app">
      <BusContext.Provider value={{
        flightsList,
        // filteredFlights,
        handleSubmit, handleInputs, inputs
      }}>
        <MainLayout />
      </BusContext.Provider>
    </div>
  );
}

export default App;
//<Context.Provider value={{ handleInputs, inputs, filteredFlights }}>
