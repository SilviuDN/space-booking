import FlightsOccupationChart from "./FlightsOccupationChart"
import LinesChart from "./LinesChart"
import CompaniesLinesChart from "./CompaniesLinesChart"
// import RadarCompaniesChart from "./bin/RadarCompaniesChart"
// import RadarFlightsChart from "./RadarFlightsChart"
import BarsCompanies from "./bin/BarsCompanies"
import UnifiedBarsLists from "./UnifiedBarsLists"

const Test01 = () => {
    return (
        <>

            <h3>UnifiedBarsChart rating for each company:</h3>
            <UnifiedBarsLists/>

            <FlightsOccupationChart howManyDays={1}/>
            <FlightsOccupationChart howManyDays={2}/>
            <FlightsOccupationChart howManyDays={3}/>
            <FlightsOccupationChart />

            <h3>Static linesChart:</h3>
            <LinesChart/>

            <h3>CompaniesLinesChart rating for each company:</h3>
            <CompaniesLinesChart/>

            <h3>CompaniesBarsChart rating for each company:</h3>
            <BarsCompanies/>


            <h3>UnifiedBarsChart rating for each company:</h3>
            <UnifiedBarsLists/>


            {/* <RadarCompaniesChart/>
            <RadarFlightsChart/> */}

        </>
    )
}

export default Test01