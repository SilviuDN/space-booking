// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar'
import React, { Component } from 'react';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

// const data2 = [
//   {
//       "x": "Ironhack",
//       "y": 4,
//       "yColor": "hsl(19, 70%, 50%)",
//   },
//   {
//       "x": "Ironhack2",
//       "y": 3,
//       "yColor": "hsl(19, 70%, 50%)",
//   },
//   {
//       "x": "SpaceBooking",
//       "y": 3,
//       "yColor": "hsl(19, 70%, 50%)",
//   },
//   {
//       "x": "ironhack3",
//       "y": 4,
//       "yColor": "hsl(19, 70%, 50%)",
//   },
//   {
//       "x": "c",
//       "y": 4,
//       "yColor": "hsl(19, 70%, 50%)",
//   },
//   {
//       "x": "d",
//       "y": 4,
//       "yColor": "hsl(19, 70%, 50%)",
//   },
//   {
//       "x": "a",
//       "y": 2,
//       "yColor": "hsl(19, 70%, 50%)",
//   },
//   {
//       "x": "SilviuCompany",
//       "y": 4,
//       "yColor": "hsl(19, 70%, 50%)",
//   }
// ]






export default class UnifiedBarsChart extends Component {

   

    render() {


    let ChartType = this.props.type
      // console.log(typeof data2 === typeof this.props.data)
      // console.log(shallowEqual(data2, this.props.data))


      // console.log("this.props in BarsChart", this.props.data)
      
      // this.props.data.forEach(elem => console.log(elem.x, typeof elem.x, elem.y, typeof elem.y, elem.yColor))  
        
        return (
          // <h4>succes</h4>
          <div style={{ height: '200px' }}>
    <ResponsiveBar


        data={this.props.data}


        // data={data2}
        keys={[ 'y',]}
        indexBy="x"

        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        valueFormat={{ format: '', enabled: false }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Company',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'rating',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div >
    )
}
}