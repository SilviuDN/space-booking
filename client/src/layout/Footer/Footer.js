import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Footer = ({ loggedUser }) => {

    const style = { background: '#212529', color: 'white', display: 'flex', justifyContent: 'center', fontSize: '.7em', position: 'fixed', bottom: 0, padding: 5, width: '100%' }

    return (
        <footer style={style}>
            Todos los derechos reservados

            <Link className="color-light" to="/signup/y" > SignUp for Companies </Link>

        </footer>
    )
}

export default Footer