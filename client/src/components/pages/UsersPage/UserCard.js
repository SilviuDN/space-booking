import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

const UserCard = ({ name, surname, _id, deleteUser }) => {
    return (
        <>
            <tr>
                <td>
                    <Link to={`/alex/userDetails/${_id}`} style={{ color: 'black', textDecoration: 'none' }}>
                        <p>{name} {surname}

                        </p>
                    </Link>
                </td>
                <td>



                    &nbsp;
                    <Link to={`/alex/userDetails/${_id}`}>
                        <Button variant="dark" block >Editar</Button>
                    </Link>
                    &nbsp;
                    <Link to={`/alex/user`} onClick={(e) => deleteUser(_id)}>
                        <Button variant="danger" block >Eliminar</Button>
                    </Link>
                </td>
            </tr>

        </>
    )
}

export default UserCard