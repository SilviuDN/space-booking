import { Component } from 'react'
import { Table } from 'react-bootstrap'
import UserCard from './UserCard'
import UserService from '../../services/user.service'

class UsersList extends Component {

    constructor() {
        super()
        this.state = {
            user: undefined,
            searchBox: '',
            typingTimeout: 0
        }

        this.userService = new UserService()
    }

    loadUsers = () => {

        !this.state.searchBox ?

            this.userService
                .getUsers()
                .then(response => this.setState({ user: response.data }))
                .catch(err => console.log(err))
            :
            this.userService
                .searchBox(this.state.searchBox)
                .then(response => this.setState({ user: response.data }))
                .catch(err => console.log(err))

    }

    componentDidMount = () => {
        this.loadUsers()
    }


    search = (e) => {

        if (this.state.typingTimeout) {
            clearTimeout(this.state.typingTimeout);
        }

        this.setState({
            searchBox: e.target.value,
            typingTimeout: setTimeout(() => {
                this.loadUsers();
            }, 500)
        });
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
                    <input type="text" className="form-control" placeholder="name/surname or email" name="search" value={this.state.searchBox} onChange={e => { this.search(e) }} />

                    <Table striped bordered hover size="sm">

                        <thead>
                            <tr>
                                <th>Nombres y apellidos</th>
                                <th>Detalles</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.user.map(elm => <UserCard key={elm._id} {...elm} deleteUser={this.deleteUser} setList={this.props.setList} setId={this.props.setId} />)}
                        </tbody>

                    </Table>
                </>
        )

    }

}

export default UsersList