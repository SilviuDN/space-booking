// import { Component } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../services/auth.service'
import { useState } from 'react'
// import { useEffect } from 'react'


export default function PasswordRecover({ recoverPassModal, showAlert, history }) {

    const [email, setEmail] = useState('')
    const [wrongEmail, setwrongEmail] = useState(false)

    const authService = new AuthService()


    const handleFormSubmit = e => {
        if (e) e.preventDefault()

        authService
            .recoverPassword(email)
            .then(response => {
                showAlert(`Recover email sent to ${response.data.email}`)
                recoverPassModal(false)
                history.push('/')
            })
            .catch(err => {
                // showAlert('Something went wrong! Retry to logg in')
                setwrongEmail(true)
                console.log(err)
            })
    }




    return (

        <Container>

            <Row>

                <Col md={{ span: 10, offset: 1 }} className={'pb-4'}>


                    <Form onSubmit={handleFormSubmit}>

                        <Form.Group controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" />
                        </Form.Group>

                        <Button style={{ marginTop: '20px', width: '100%' }} bsPrefix="btn-flat" variant="primary" type="submit">Request password reset</Button>
                    </Form>



                    {wrongEmail ?
                        <>
                            <hr />
                            <div className="alert alert-danger text-center" role="alert">Email does not exist</div>
                            <div className="text-center"><Link to="/signup/n" onClick={() => recoverPassModal(false)}> <small>Register</small> </Link></div>
                        </>
                        : null}


                </Col>
            </Row>

        </Container>

    )
}

