
import React, { Component } from 'react';
import UserForm from './SignupUserForm'
import CompanyForm from './SignupCompanyForm'

class SignupPage extends Component {
    constructor(props) {
        super()
        this.props2 = props
        this.state = {
            companyRender: false,
            sharedSubmitUser: undefined,
            sharedSubmitCompany: undefined
        }

    }

    setSharedFn = (fn, keyName) => {

        this.setState({
            [keyName]: fn
        })
    }


    componentDidMount = () => this.companyRender = this.props.match.params.company === 'y' ? this.setState({ companyRender: true }) : null



    render = () => {

        return (
            <>

                <UserForm companyRender={this.state.companyRender} setSharedFn={this.setSharedFn} sharedFunction={this.state.sharedSubmitCompany} />


                {this.state.companyRender ? <CompanyForm setSharedFn={this.setSharedFn} sharedFunction={this.state.sharedSubmitUser} /> : null}

            </>
        )
    }

}


export default SignupPage