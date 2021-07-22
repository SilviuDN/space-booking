import { Nav } from 'react-bootstrap'
import './Dashboard.css'


const AdminNav = (props) => {



    return (


        <Nav className=" d-md-block bg-light sidebar"
        // activeKey="/home"
        // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
            {/* <div className="sidebar-sticky">
                    <img src="http://www.gravatar.com/avatar/b9f8c2f3d8f3b2d8a5f8c8e9a8a8c8c3?s=200" alt="platform logo" />
                </div> */}
            <Nav.Item>
                <Nav.Link className="nav-link" onClick={() => props.setList('user')}>Users</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => props.setList('company')}>Company</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => props.setList('flights')}>Flights</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => props.setList('destinations')}>Destinations</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => props.setList('airports')}>Airports</Nav.Link>
            </Nav.Item>
        </Nav>




    )
}


export default AdminNav