import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap"


const IndexPage2 = () => {

    return (
        <>
            <Link to="/signup"> Signup </Link>
            <Link to={`/alex/userDetails/60f6e482febcb21fa9153581`}>
                <Button variant="dark" block >Ver detalles</Button>
            </Link>
        </>
    )


}


export default IndexPage2