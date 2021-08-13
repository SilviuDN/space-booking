// import { Component } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'
// import { useEffect } from 'react'
import { useState } from 'react'

export default function Login({ setLoginModal, recoverPassModal, storeUser, showAlert, history }) {
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [wrongUser, setwrongUser] = useState(false)

    const authService = new AuthService()

    const handleFormSubmit = e => {
        e.preventDefault()

        // const { email, pwd } = this.state

        authService
            .login(email, pwd)
            .then(loggedUser => {
                storeUser(loggedUser.data)
                showAlert(`Welcome ${loggedUser.data.name}! loading... ${loggedUser.data.role.toUpperCase()} config`)
                setLoginModal(false)
                history.push('/')
            })
            .catch(err => {
                // showAlert('Something went wrong! Retry to logg in')
                setwrongUser(true)
                console.log(err)
            })
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }} className={'pb-4'}>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="email">
                            {/* <FloatingLabel
                                controlId="email"
                                label="Email address"
                                type="email" value={this.state.email} onChange={this.handleInputChange} name="email"
                            /> */}
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} name="email" />

                            {/* </FloatingLabel> */}
                        </Form.Group>

                        <Form.Group controlId="pwd">
                            {/* <FloatingLabel controlId="pwd"
                                    label="Password"
                                    className="mb-3"
                                    type="password"
                                    value={this.state.pwd} onChange={this.handleInputChange} name="pwd"

                                > */}
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={pwd} onChange={e => setPwd(e.target.value)} name="pwd" />
                            {/* </FloatingLabel> */}
                        </Form.Group>

                        <Button style={{ marginTop: '20px', width: '100%' }} bsPrefix="btn-flat" variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>

                    <hr />

                    <Link to="/" onClick={() => setLoginModal(false)}>
                        <Button bsPrefix="btn-flat" variant="primary" style={{ marginTop: '20px', width: '100%' }}>
                            Cancel
                        </Button>
                    </Link>

                    <hr />

                    {wrongUser ? (
                        <>
                            <div className="alert alert-danger text-center" role="alert">
                                Wrong user or password
                            </div>
                            <div className="text-center">
                                <small>
                                    <Link
                                        to="/"
                                        onClick={() => {
                                            setLoginModal(false)
                                            recoverPassModal(true)
                                        }}
                                    >
                                        {' '}
                                        Recover password{' '}
                                    </Link>
                                </small>
                            </div>
                            <hr />
                        </>
                    ) : null}

                    <p align="center">
                        <small>
                            If you have not yet registered you can do so by clicking on the following link:{' '}
                            <Link to="/signup/n" onClick={() => setLoginModal(false)}>
                                {' '}
                                I'm not registered yet.{' '}
                            </Link>
                        </small>
                    </p>
                    {/* <small>Or new Company?  register <Link to="/signup/y" onClick={() => this.props.updateModal(false)}>here</Link></small> */}
                </Col>
            </Row>
        </Container>
    )
}
