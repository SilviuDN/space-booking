import { Component } from 'react'
import { Table } from 'react-bootstrap'
import UserCard from './UserCard'
import UserService from '../../../services/user.service'
import SearchBox from '../../shared/searchBox/searchBox'

class UsersList extends Component {

    constructor() {
        super()
        this.state = {
            user: undefined,
            searchBox: '',
            typingTimeout: 0,
        }
        this.userService = new UserService()
    }

    loadUsers = (search) => {

        !search ?

            this.userService
                .getUsers()
                .then(response => this.setState({ user: response.data }))
                .catch(err => console.log(err))
            :
            this.userService
                .searchBox(search)
                .then(response => this.setState({ user: response.data }))
                .catch(err => console.log(err))

    }



    componentDidMount = () => {
        this.loadUsers()
        this.props.sharedFunction('usersList', this.loadUsers)
    }



    deleteUser = user_id => {

        if (window.confirm('¿Are you sure want to delete this user ?')) {

            this.setState({
                user: this.state.user.filter(elm => elm._id !== user_id)
            })

            this.userService.userDelete(user_id)
                .then(() => console.log('Usuario eliminado correctamente'))
                .catch(err => console.log(err))
        }
    }


    render() {
        return (

            !this.state.user
                ?
                'CARGANDO'
                :
                <>
                    <SearchBox load={this.loadUsers} />

                    <Table striped bordered hover size="sm">

                        <thead>
                            <tr>
                                <th>Nombres y apellidos</th>
                                <th>Detalles</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.user.map(elm => <UserCard key={elm._id} {...elm} deleteUser={this.deleteUser} setList={this.props.setList} setId={this.props.setId} loadUsers={this.loadUsers} />)}
                        </tbody>

                    </Table>
                </>
        )

    }

}

export default UsersList