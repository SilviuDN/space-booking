// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/radar
import { ResponsiveRadar } from '@nivo/radar'
import React, { Component } from 'react';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


const data = [
    {
      "axis": "soldTickets",
      "comp1": 90,
      "comp2": 23,
      "comp3": 96
    },
    {
      "axis": "destRev",
      "comp1": 35,
      "comp2": 27,
      "comp3": 26
    },
    {
      "axis": "flightComRev",
      "comp1": 86,
      "comp2": 117,
      "comp3": 83
    },

  ]


  export default class RadarFlightsChart extends Component {
    // data = this.props.data

    render() {

        // data={data}
        return (
            <div style={{ height: '400px' }}>

    <ResponsiveRadar
        data={data}
        keys={[ 'comp1', 'comp2', 'comp3' ]}
        indexBy="axis"
        maxValue="auto"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        curve="linearClosed"
        borderWidth={2}
        borderColor={{ from: 'color' }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={36}
        enableDots={true}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color' }}
        enableDotLabel={true}
        dotLabel="value"
        dotLabelYOffset={-12}
        colors={{ scheme: 'nivo' }}
        fillOpacity={0.25}
        blendMode="multiply"
        animate={true}
        motionConfig="wobbly"
        isInteractive={true}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
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