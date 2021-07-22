import { Component } from 'react'
import { Table } from 'react-bootstrap'
import UserCard from './UserCard'
import UserService from '../../services/user.service'

class UsersList extends Component {

    constructor() {
        super()
        this.state = {
            user: undefined
        }

        this.userService = new UserService()
    }

    loadUsers = () => {
        this.userService
            .getUsers()
            .then(response => this.setState({ user: response.data }))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.loadUsers()
    }

    deleteUser = user_id => {
        this.setState({
            user: this.state.user.filter(elm => elm._id !== user_id)
        })

        this.userService.userDelete(user_id)
            .then(() => console.log('Usuario eliminado correctamente'))
            .catch(err => console.log(err))
    }

    render() {
        return (

            !this.state.user
                ?
                'CARGANDO'
                :
                <>
                    <Table striped bordered hover size="sm">

                        <thead>
                            <tr>
                                <th>Nombres y apellidos</th>
                                <th>Detalles</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.user.map(elm => <UserCard key={elm._id} {...elm} deleteUser={this.deleteUser} />)}
                        </tbody>

                    </Table>
                </>
        )

    }

}

export default UsersList