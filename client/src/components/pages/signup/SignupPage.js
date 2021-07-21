
import React, { Component } from 'react';
import UserForm from './SignupUserForm'
import CompanyForm from './SignupCompanyForm'

class SignupPage extends Component {
    constructor(props) {
        super()
        this.props2 = props
        this.state = {
            companyRender: false,
            sharedfunction: undefined
        }

    }

    updateSharedFn = (fn) => {
        this.setState({
            sharedfunction: fn
        })
    }


    componentDidMount = () => this.companyRender = this.props.match.params.company === 'y' ? this.setState({ companyRender: true }) : null



    render = () => {

        return (
            <>

                <UserForm companyRender={this.state.companyRender} sharedFunction={this.updateSharedFn} />

                {this.state.companyRender ? <CompanyForm submitUserForm={this.state.sharedfunction} /> : null}

            </>
        )
    }

}


export default SignupPage