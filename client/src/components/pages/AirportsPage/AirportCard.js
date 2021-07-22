import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

const AirportCard = ({ name, _id, deleteAirport, setList, setId }) => {
    return (

        <>
            <tr>
                <td>
                    <Link to="/admin" onClick={() => { setId(_id); setList('airportDetails'); }} style={{ color: 'black', textDecoration: 'none' }}>
                        <p>{name}</p>
                    </Link>
                </td>
                <td>



                    &nbsp;
                    <Button variant="dark" onClick={() => { setId(_id); setList('editAirport'); }}>Editar</Button>
                    &nbsp;
                    <Link to={`/admin`} onClick={() => { deleteAirport(_id) }}>
                        <Button variant="danger">Eliminar</Button>
                    </Link>
                </td>
            </tr>

        </>
    )
}

export default AirportCard