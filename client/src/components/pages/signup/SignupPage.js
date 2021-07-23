
import React, { Component } from 'react';
import UserForm from './SignupUserForm'
import CompanyForm from './SignupCompanyForm'

class SignupPage extends Component {
    constructor() {
        super()
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


    changeState = () => {
        this.props.match.params.company === 'y' ? this.setState({ companyRender: true }) : this.setState({ companyRender: false })

    }

    componentDidMount = () => this.props.match.params.company === 'y' ? this.setState({ companyRender: true }) : this.setState({ companyRender: false })


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.company !== this.props.match.params.company) {
            this.changeState()
        }
    }


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