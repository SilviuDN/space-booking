import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import editButton from './edit.png'
import deleteButton from './delete.png'

// INSERT OWNER EL QUE SUPUESTAMENTE VMAOS A RECIBIR CUANDO HAGAMOS LO DEL OWNER, si soy owner  redirect a otro sitio
const UserCard = ({ name, surname, _id, deleteUser, setList, setId, owner = false }) => {
    return (
        <>
            <tr>
                <td>
                    {/* LOGICA DEL OWNER */}


                    {typeof setList === 'function' ?

                        <Link to={'/admin'} onClick={() => { setList('userDetails'); setId(_id); }} style={{ color: 'black', textDecoration: 'none' }}>
                            <p>{name} {surname} admin</p>
                        </Link>

                        :

                        <Link to={`/users/${_id}`} style={{ color: 'black', textDecoration: 'none' }}>
                            <p>{name} {surname} user</p>
                        </Link>

                    }

                </td>
                <td>
                    &nbsp;

                    {typeof setList === 'function' ?

                        <Link to={`/admin`} onClick={() => { setList('userEdit'); setId(_id); }} >

                            <Button variant="primary" block size="sm" data-toggle="tooltip" data-placement="bottom" title="Edit" ><img src={editButton} style={{ width: '20px' }} alt="editbutton" /></Button>
                        </Link>

                        :
                        <Link to={`/users/${_id}/edit`}  >

                            <Button variant="primary" block size="sm" data-toggle="tooltip" data-placement="bottom" title="Edit" ><img src={editButton} style={{ width: '20px' }} alt="editbutton" /></Button>
                        </Link>


                    }



                    &nbsp;
                    <Link to={`/admin`} onClick={() => deleteUser(_id)}>
                        <Button variant="danger" block size="sm"><img src={deleteButton} style={{ width: '20px' }} alt="deleteButton" /></Button>
                    </Link>
                </td>
            </tr>
        </>
    )
}

export default UserCard