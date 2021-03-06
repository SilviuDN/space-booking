import { ResponsiveBar } from '@nivo/bar'
import React, { Component } from 'react';

export default class BarsChart extends Component {


    render() {


        let chartType = this.props.type
        let legend
        switch (chartType) {
            case 'company':
            case 'destination':
                legend = 'rating'
                break
            case 'airport':
                legend = 'flights'
                break
            case 'flight':
                legend = 'sold tickets'
                break
            default:
                legend = ''
        }

        return (
            <div style={{ height: '200px' }}>

                <ResponsiveBar

                    data={this.props.data}
                    keys={['y',]}
                    indexBy="x"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    valueFormat={{ format: '', enabled: false }}
                    // colors={{ scheme: 'nivo' }}
                    // colors={{ scheme: "green_blue" }}
                    // colors={{ scheme: "reds" }}
                    // colors={{ scheme: "category10" }}
                    // colors={{ scheme: "blues" }}
                    // colors={['#1e2746']}



                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: '#38bcb2',
                            size: 4,
                            padding: 1,
                            stagger: true,

                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: '#eed312',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10,

                        }
                    ]}
                    borderColor={{ from: 'color', modifiers: [['brighter', 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={null}
                    //     {
                    //         tickSize: 5,
                    // tickPadding: 5,
                    // tickRotation: 0,
                    // legend: `${chartType}`,
                    // legendPosition: 'middle',
                    // legendOffset: 32,

                    //     }
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: `${legend}`,
                        legendPosition: 'middle',
                        legendOffset: -40,

                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: 'color', modifiers: [['brighter', 5.6]] }}
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
                            itemOpacity: 0,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        // itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        )
    }
}