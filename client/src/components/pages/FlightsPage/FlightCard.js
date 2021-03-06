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
                    loggedUser?._id === flightCompany?.moderator || loggedUser?.role === 'admin' ?

                        typeof setId === 'function' ?

                            <>
                                <Link to={`/admin`} onClick={() => { setId(_id); setList('flightEdit') }}>
                                    <Button variant="primary" block size="sm" data-toggle="tooltip" data-placement="bottom" title="Edit" ><img alt="" src={editButton} style={{ width: '20px' }} /></Button>
                                </Link>

                                &nbsp;
                                <Link to={`/admin`} onClick={() => { removeFlight(_id); setId(_id); }}>
                                    <Button variant="danger" block size="sm"><img alt="" src={deleteButton} style={{ width: '20px' }} /></Button>
                                </Link>
                            </>


                            :
                            <>
                                <Link to={`/flights/${_id}/edit`}>
                                    <Button variant="primary" block size="sm" data-toggle="tooltip" data-placement="bottom" title="Edit" ><img alt="" src={editButton} style={{ width: '20px' }} /></Button>
                                </Link>
                                <Link to={`/flights`} onClick={() => { removeFlight(_id); }}>
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

