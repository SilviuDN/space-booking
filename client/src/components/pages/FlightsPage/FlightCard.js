import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import editButton from './edit.png'
import deleteButton from './delete.png'

const FlightCard = ({ _id, flightNumber, price, capacity, destination, flightCompany, removeFlight, setId, setList, loggedUser }) => {

    return (




        <tr >
            <td>
                {
                    typeof setId === 'function' ?

                        <Link to={'/admin'} onClick={() => { setId(_id); setList('flightDetails') }} style={{ color: 'black', textDecoration: 'none' }}>
                            <p>{flightNumber}</p>
                        </Link>

                        :

                        <Link to={`/flights/${_id}`} style={{ color: 'black', textDecoration: 'none' }}>
                            <p>{flightNumber}</p>
                        </Link>

                }
            </td>
            <td>
                &nbsp;

                {/* enseño un boton o no depende del rol o si es el owner*/}
                {
                    loggedUser?._id === flightCompany.moderator || loggedUser?.role === 'admin' ?

                        typeof setId !== 'function' && loggedUser?.flight ?

                            <Link to={`/flights/${_id}/edit`}>
                                <Button variant="primary" block size="sm" data-toggle="tooltip" data-placement="bottom" title="Edit" ><img alt="" src={editButton} style={{ width: '20px' }} /></Button>
                            </Link>

                            :

                            <>
                                <Link to={`/admin`} onClick={() => { setId(_id); setList('flightEdit') }}>
                                    <Button variant="primary" block size="sm" data-toggle="tooltip" data-placement="bottom" title="Edit" ><img alt="" src={editButton} style={{ width: '20px' }} /></Button>
                                </Link>

                                &nbsp;
                                <Link to={`/admin`} onClick={() => { removeFlight(_id); setId(_id); setList('flightEdit') }}>
                                    <Button variant="danger" block size="sm"><img alt="" src={deleteButton} style={{ width: '20px' }} /></Button>
                                </Link>
                            </>

                        : null
                }


            </td>
        </tr>




    )
}

export default FlightCard


    // < Col md = { 4} >

    //     <Card className="coaster-card">
    //         {/* ID ->> <cardFotoDest id= destination /> */}
    //         <Card.Img variant="top" src={destination?.image} />
    //         <Card.Body>
    //             <Card.Title>Price: ${price}</Card.Title>
    //             <Card.Subtitle>Seats: {capacity}</Card.Subtitle>
    //             <Link to={`/flights/${_id}`}>
    //                 <Button variant="dark" block >Ver detalles</Button>
    //             </Link>
    //             <button className="btn btn-danger" onClick={removeFlight}>Delete</button>


    //         </Card.Body>
    //     </Card>
    //     </Col >