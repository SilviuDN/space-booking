import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { Row, Col, Container } from 'react-bootstrap';

const data = [
    { name: 'Mars', value: 12000 },
    { name: 'Mercury', value: 8000 },
    { name: 'Venus', value: 6000 },
    { name: 'Proxima b', value: 10000 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class FlightsPerDestination extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

    render() {
        return (

            <Container>

                <Row>
                    <Col xs={12} md={8}>


                        <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
                            <Pie
                                data={data}
                                cx={120}
                                cy={200}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Pie
                                data={data}
                                cx={420}
                                cy={200}
                                startAngle={180}
                                endAngle={0}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>

                    </Col>
                    <Col xs={12} md={4}>
                        <h4 style={{ color: "#00C49F" }}>Mercury</h4>
                        <h4 style={{ color: "#FFBB28" }}>Venus</h4>
                        <h4 style={{ color: "#0088FE" }}>Mars</h4>
                        <h4 style={{ color: "#FF8042" }}>Proxima b</h4>
                    </Col>
                </Row>

            </Container>
        );
    }
}