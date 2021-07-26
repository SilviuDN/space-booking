// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line'
import React, { Component } from 'react';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


const data = [
    {
      "id": "sold",
      "color": "hsl(96, 70%, 50%)",
      "data": [
        {
          "x": "plane",   //key - Data 
          "y": 150        //value - soldTickets  
        },
        {
          "x": "helicopter",
          "y": 274
        },
        {
          "x": "boat",
          "y": 239
        },
        {
          "x": "train",
          "y": 290
        },
        {
          "x": "subway",
          "y": 172
        },
        {
          "x": "bus",
          "y": 208
        },
        {
          "x": "car",
          "y": 43
        },
        {
          "x": "moto",
          "y": 31
        },
        {
          "x": "bicycle",
          "y": 48
        },
        {
          "x": "horse",
          "y": 295
        },
        {
          "x": "skateboard",
          "y": 103
        },
        {
          "x": "others",
          "y": 296
        }
      ]
    },
    {
        "id": "france",
        "color": "hsl(168, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 192
          },
          {
            "x": "helicopter",
            "y": 100
          },
          {
            "x": "boat",
            "y": 1
          },
          {
            "x": "train",
            "y": 260
          },
          {
            "x": "subway",
            "y": 4
          },
          {
            "x": "bus",
            "y": 296
          },
          {
            "x": "car",
            "y": 224
          },
          {
            "x": "moto",
            "y": 155
          },
          {
            "x": "bicycle",
            "y": 189
          },
          {
            "x": "horse",
            "y": 237
          },
          {
            "x": "skateboard",
            "y": 62
          },
          {
            "x": "others",
            "y": 127
          }
        ]
      },
    ]



export default class SoldToCapacityComparation extends Component {
    // data = this.props.data

    render() {

        // data={data}
        return (
            <div style={{ height: '200px' }}>
                   <ResponsiveLine
        data={data}
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
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
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
