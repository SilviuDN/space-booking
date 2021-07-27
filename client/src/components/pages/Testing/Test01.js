import FlightsPerDestination from "./FlightsPerDestination"
import RandomChart from "./RandomChart"
import FlightsOccupationChart from "./FlightsOccupationChart"
import SoldToCapacityComparation from "./SoldToCapacityComparation"
import LinesChart from "./LinesChart"
import CompaniesChart from "./CompaniesChart"

const Test01 = () => {
    return (
        <>
            {/* <FlightsPerDestination /> */}
            {/* <RandomChart /> */}

            <FlightsOccupationChart howManyDays={1}/>
            <FlightsOccupationChart howManyDays={2}/>
            <FlightsOccupationChart howManyDays={3}/>
            <FlightsOccupationChart />
            <LinesChart/>

            <CompaniesChart/>

        </>
    )
}

export default Test01