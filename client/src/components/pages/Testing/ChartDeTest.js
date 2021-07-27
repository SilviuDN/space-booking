// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line'
import React, { Component } from 'react';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.




// const  data = [
//     {
//       "id": "sold",
//       "color": "hsl(96, 70%, 50%)",
//       "data": [
//         {
//           "x": "Ironhack",   //key - Data 
//           "y": 150        //value - soldTickets  
//         },
//         {
//           "x": "adas",
//           "y": 274
//         },
//         {
//           "x": "boat",
//           "y": 239
//         },
//         {
//           "x": "train",
//           "y": 290
//         },


//       ]
//     },
//   ]



export default class ChartDeTest extends Component {
   

    render() {
      // console.dir(typeof data === typeof this.props.data[0])
      // console.dir(typeof this.props.data[0])

      // console.log("this.props", this.props.data)
      // this.props.data[0].data.forEach(elem => console.log(elem.x, typeof elem.x, elem.y, typeof elem.y))  
        
        return (
          // <h4>succes</h4>
          <div style={{ height: '200px' }}>
          <ResponsiveLine
              data={this.props.data}
              // data={data}
              // data={data2}
              // data={data3}
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: 'point' }}
              yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'company',
                legendOffset: 36,
                legendPosition: 'middle'
              }}
              axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'rating',
                legendOffset: -40,
                legendPosition: 'middle'
              }}
              pointSize={10}
              pointColor={{ theme: 'background' }}
              pointBorderWidth={2}
              pointBorderColor={{ from: 'serieColor' }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
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

