import FlightsOccupationChart from "./FlightsOccupationChart"
import LinesChart from "./LinesChart"
import CompaniesLinesChart from "./CompaniesLinesChart"
// import RadarCompaniesChart from "./bin/RadarCompaniesChart"
// import RadarFlightsChart from "./RadarFlightsChart"
import BarsCompanies from "./bin/BarsCompanies"

const Test01 = () => {
    return (
        <>

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


            {/* <RadarCompaniesChart/>
            <RadarFlightsChart/> */}

        </>
    )
}

export default Test01