import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

// logo image
import Logo from '../asset/image/android-chrome-192x192.png'

// react icons
import { FaUserPlus } from 'react-icons/fa';


function Header () {
    return(
        <Container fluid>
            <Row className="bg-dark d-flex align-items-center">
                <Col md={3}>
                    <img src={Logo} style={{height:"90px"}} alt=""/>
                </Col>

                <Col md={2}>
                    <Button variant="warning btn-sm col-8 rounded-3">
                    <FaUserPlus/> Create User
                    </Button>
                </Col>

                <Col  md={2}>
                    <Form.Control type="text" placeholder="phone number.."></Form.Control>
                </Col>

                <Col  md={2}>
                    <Form.Control type="password" placeholder="phone number.."></Form.Control>
                </Col>

                <Col md={1}>
                    <Button variant="warning btn-sm col-8 rounded-3">
                    <FaUserPlus/> Login
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Header