// import FlightsPerDestination from "./FlightsPerDestination"
// import RandomChart from "./RandomChart"
// import FlightsOccupationChart from "./FlightsOccupationChart"
import ReturnedFlightCard from "./BuyFlightCard"

const Test02 = (props) => {  
    const flight_id = props.match.params.flight_id
    // console.log('test', props.match.params.flight_id)
    
    return (
        <>
            {/* <FlightsOccupationChart /> */}
            <ReturnedFlightCard flight_id = {flight_id}/>

        </>
    )
}

export default Test02