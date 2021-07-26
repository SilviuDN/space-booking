import FlightsPerDestination from "./FlightsPerDestination"
import RandomChart from "./RandomChart"
import FlightsOccupationChart from "./FlightsOccupationChart"
import SoldToCapacityComparation from "./SoldToCapacityComparation"

const Test01 = () => {
    return (
        <>
            {/* <FlightsPerDestination /> */}
            {/* <RandomChart /> */}
            <FlightsOccupationChart howManyDays={1}/>
            <FlightsOccupationChart howManyDays={2}/>
            <FlightsOccupationChart howManyDays={3}/>
            <FlightsOccupationChart />
            <SoldToCapacityComparation/>

        </>
    )
}

export default Test01