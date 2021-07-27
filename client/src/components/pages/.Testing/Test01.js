import FlightsOccupationChart from "../Charts/FlightsOccupationChart"
// import LinesChart from "./LinesChart"
// import RadarCompaniesChart from "./bin/RadarCompaniesChart"
// import RadarFlightsChart from "./RadarFlightsChart"
import BarsLists from "../Charts/BarsLists"
import Star from "../RatingComponent/Star"
import Rating from "../RatingComponent/Rating"

import '../RatingComponent/Rating.css'

const Test01 = () => {
    return (
        <>

        <div id="root">
            <Rating stars={4} />
        </div>

            <h3>BarsChart rating for each company:</h3>
            {/* <BarsLists/> */}

            <FlightsOccupationChart howManyDays={1}/>
            <FlightsOccupationChart howManyDays={2}/>
            <FlightsOccupationChart howManyDays={3}/>
            <FlightsOccupationChart />

            <h3>BarsChart rating for each company:</h3>


            {/* <BarsLists/> */}
                        
            <h3>Airport</h3>
            <BarsLists  type='airport'/>

            <h3>Company</h3>
            <BarsLists  type='company'/>
            
            <h3>Destination</h3>
            <BarsLists  type='destination'/>
            
            <h3>Flight</h3>
            <BarsLists  type='flight'/>


            {/* <RadarCompaniesChart/>
            <RadarFlightsChart/> */}

        </>
    )
}

export default Test01