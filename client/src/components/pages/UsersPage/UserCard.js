import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import editButton from './edit.png'
import deleteButton from './delete.png'

const UserCard = ({ name, surname, _id, deleteUser }) => {
    return (
        <>
            <tr>
                <td>
                    <Link to={`/users/${_id}`} style={{ color: 'black', textDecoration: 'none' }}>
                        <p>{name} {surname} </p>
                    </Link>
                </td>
                <td>
                    &nbsp;
                    <Link to={`/users/${_id}/edit`}>
                        <Button variant="primary" block size="sm" data-toggle="tooltip" data-placement="bottom" title="Edit" ><img src={editButton} style={{ width: '20px' }} /></Button>
                    </Link>
                    &nbsp;
                    <Link to={`/users`} onClick={(e) => deleteUser(_id)}>
                        <Button variant="danger" block size="sm"><img src={deleteButton} style={{ width: '20px' }} /></Button>
                    </Link>
                </td>
            </tr>
        </>
    )
}

export default UserCard