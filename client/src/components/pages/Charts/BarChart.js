// yarn add @nivo/core @nivo/bullet
import { ResponsiveBullet } from '@nivo/bullet'
import React, { Component } from 'react';


export default class BarChart extends Component {

    render() {

      if(this.props.capacity === undefined) return <p>!</p>

      let {capacity, soldTickets} = this.props
      let marker = 0.9 * capacity

      let data = [
        {
          "id": "seats.",
          "ranges": [
            soldTickets,
            0,
            capacity
          ],
          "measures": [
            0
          ],
          "markers": [
            marker
          ]
        },
      ]

        return (
            <div style={{ height: '10px', width: '400px'}}>
            <ResponsiveBullet
                data={data}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                spacing={46}
                titleAlign="start"
                titleOffsetX={-70}
                measureSize={0.4}
            />
            <p>Only {capacity - soldTickets} seats left</p>

        </div >
        )
    }
}

















// const MyResponsiveBullet = ({ data /* see data tab */ }) => (

// )