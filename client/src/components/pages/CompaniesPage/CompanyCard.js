import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

const CompanyCard = ({ companyName, _id, deleteCompany }) => {
    return (
        <>
            <tr>
                <td>
                    <Link to={`/alex/companyDetails/${_id}`} style={{ color: 'black', textDecoration: 'none' }}>
                        <p>{companyName}</p>
                    </Link>
                </td>
                <td>



                    &nbsp;
                    <Link to={`/alex/companyEdit/${_id}`}>
                        <Button variant="dark" block >Editar</Button>
                    </Link>
                    &nbsp;
                    <Link to={`/alex/companies`} onClick={(e) => deleteCompany(_id)}>
                        <Button variant="danger" block >Eliminar</Button>
                    </Link>
                </td>
            </tr>

        </>
    )
}

export default CompanyCard