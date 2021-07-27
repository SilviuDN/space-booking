import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

const CompanyCard = ({ moderator, companyName, _id, deleteCompany, setList, setId, loggedUser, acceptCompany, status }) => {
    return (

        <>
            <tr>
                <td>
                    {!typeof setList === 'function' ?

                        <Link to={`/companies/${_id}`} style={{ color: 'black', textDecoration: 'none' }}>
                            <p>{companyName} user</p>
                        </Link>
                        :
                        <Link to={`/admin`} onClick={() => { setList('companyDetails'); setId(_id); }} style={{ color: 'black', textDecoration: 'none' }}>
                            <p>{companyName} admin</p>
                        </Link>
                    }
                </td>
                <td>



                    &nbsp;

                    {(loggedUser && loggedUser?._id === moderator) || loggedUser?.role === 'admin' ?
                        <>

                            <Link to={`/companies/${_id}/edit`}>
                                <Button variant="dark" block >Editar</Button>
                            </Link>
                            &nbsp;
                            <Link to={`/admin`} onClick={(e) => deleteCompany(_id)}>
                                <Button variant="danger" block >Eliminar</Button>
                            </Link>
                        </>
                        : null

                    }
                    {
                        loggedUser?.role === 'admin' ?
                            status === false ?

                                <Link to="/admin" onClick={() => { acceptCompany(_id, !status); }}> Pending</Link>

                                :

                                <Link to="/admin" onClick={() => { acceptCompany(_id, !status); }}> Live</Link>
                            :
                            null
                    }
                </td>
            </tr>

        </>
    )
}

export default CompanyCard