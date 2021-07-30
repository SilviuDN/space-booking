import { Nav } from 'react-bootstrap'
import './Dashboard.css'


const AdminNav = (props) => {



    return (


        < Nav className=" d-md-block blue-nav py-6 sidebar"
        // activeKey="/home"
        // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
            {/* <div className="sidebar-sticky">
                    <img src="http://www.gravatar.com/avatar/b9f8c2f3d8f3b2d8a5f8c8e9a8a8c8c3?s=200" alt="platform logo" />
                </div> */}
            <Nav.Item>
                <Nav.Link className="nav-link" onClick={() => props.setLeftView('user')}>Users</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => props.setLeftView('company')}>Company</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => props.setLeftView('flights')}>Flights</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => props.setLeftView('destinations')}>Destinations</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => props.setLeftView('airports')}>Airports</Nav.Link>
            </Nav.Item>
        </Nav>




    )
}


export default AdminNav