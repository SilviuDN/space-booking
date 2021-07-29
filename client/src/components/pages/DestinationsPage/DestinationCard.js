import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import editButton from './edit.png'
import deleteButton from './delete.png'

const DestinationCard = ({ _id, name, description, moderator, image, removeDestination, setId, setList, loggedUser }) => {

    return (
        <>
            <tr>
                <td>
                    {
                        typeof setId === 'function' ?

                            <Link to={'/admin'} onClick={() => { setId(_id); setList('destinationDetails') }} style={{ color: 'black', textDecoration: 'none' }}>
                                <p>{name}</p>
                            </Link>

                            :

                            <Link to={`/destinations/${_id}`} style={{ color: 'black', textDecoration: 'none' }}>
                                <p>{name}</p>
                            </Link>

                    }

                </td>
                <td>


                    {

                        (loggedUser?._id === moderator && moderator) || loggedUser?.role === 'admin' ?

                            typeof setId === 'function' ?
                                <>
                                    &nbsp;
                                    <Link to={`/admin`} onClick={() => { setId(_id); setList('editDestination'); }}>
                                        <Button variant="primary" block size="sm" data-toggle="tooltip" data-placement="bottom" title="Edit" ><img alt="" src={editButton} style={{ width: '20px' }} /></Button>
                                    </Link>


                                    &nbsp;
                                    <Link to={`/admin`} onClick={() => { removeDestination() }}>
                                        <Button variant="danger" block size="sm"><img alt="" src={deleteButton} style={{ width: '20px' }} /></Button>
                                    </Link>
                                </>
                                :
                                <>
                                    &nbsp;
                                    <Link to={`/destinations/${_id}/edit`}>
                                        <Button variant="primary" block size="sm" data-toggle="tooltip" data-placement="bottom" title="Edit" ><img alt="" src={editButton} style={{ width: '20px' }} /></Button>
                                    </Link>


                                    &nbsp;
                                    <Link to={`/destinations`} onClick={() => removeDestination(_id)}>
                                        <Button variant="danger" block size="sm"><img alt="" src={deleteButton} style={{ width: '20px' }} /></Button>
                                    </Link>


                                </>
                            :
                            null
                    }

                </td>
            </tr>





        </>

        // <Col md={4}>

        //     <Card className="coaster-card">
        //         <Card.Img variant="top" src={image} />
        //         <Card.Body>
        //             <Card.Title>Name: {name}</Card.Title>
        //             <Card.Subtitle>Description: {description}</Card.Subtitle>
        //             <Link to={`/destinations/${_id}`}>
        //                 <Button variant="dark" block >Details</Button>
        //             </Link>
        //             <button className="btn btn-danger" onClick={removeDestination}>Delete</button>


        //         </Card.Body>
        //     </Card>

        // </Col>

    )
}

export default DestinationCard