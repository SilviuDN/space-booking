// import { Component } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import AuthService from '../../services/auth.service'
import './login.css'
// import { useEffect } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;


export default function ResetPassword({ loggedUser, storeUser, showAlert, history }) {

    const [pwd, setPwd] = useState('')
    const [pwdCheck, setPwdCheck] = useState('')
    const [passNotMatch, setPassNotMatch] = useState(false)
    const { token } = useParams()

    const authService = new AuthService()


    const showPass = (e) => {

        while (e.target.id !== 'i') {
            e.target = e.target.parentElement
        }

        if (e.target.previousElementSibling?.type === 'password') {
            e.target.previousElementSibling.type = 'text'
        } else {
            e.target.previousElementSibling.type = 'password'
        }
    }

    const handleFormSubmit = e => {
        e.preventDefault()


        if (pwd === pwdCheck) {

            authService
                .updatePassword(token, pwd)
                .then(loggedUser => {
                    showAlert('Welcome! Successfully logged in')
                    storeUser(loggedUser.data)
                    history.push('/')
                })
                .catch(err => {
                    // showAlert('Something went wrong! Retry to logg in')
                    // setwrongUser(true)
                    console.log(err)
                })
        } else {
            setPassNotMatch(true)
        }
    }




    return (

        <Container>

            <Row className="mt-5">

                <Col md={{ span: 10, offset: 1 }} className={'pb-4'}>


                    <Form onSubmit={handleFormSubmit}>

                        <div className="pass-wrapper">
                            <Form.Group controlId="pwd">
                                <Form.Label>New password</Form.Label>
                                <Form.Control type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} name="pwd" />
                                <i id="i" onClick={(e) => showPass(e)}>{eye}</i>
                            </Form.Group>
                        </div>

                        <div className="pass-wrapper">
                            <Form.Group controlId="pwdCheck">
                                <Form.Label>Type same password</Form.Label>
                                <Form.Control type="password" value={pwdCheck} onChange={(e) => setPwdCheck(e.target.value)} name="pwdCheck" />
                                <i id="i" onClick={(e) => showPass(e)}>{eye}</i>
                            </Form.Group>
                        </div>

                        {passNotMatch && <div className="alert alert-danger">Passwords do not match</div>}

                        <Button style={{ marginTop: '20px', width: '100%' }} bsPrefix="btn-flat" variant="primary" type="submit">Save new password</Button>

                    </Form>

                    <hr />

                    <Link to="/" >
                        <Button bsPrefix="btn-flat" variant="primary" style={{ marginTop: '20px', width: '100%' }} >Cancel</Button>
                    </Link>

                    <hr />


                </Col>
            </Row>

        </Container>

    )
}

