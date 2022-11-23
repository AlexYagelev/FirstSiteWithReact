import React, {useState} from 'react';
import { Nav, Navbar, Button, Container, Modal, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components'; 

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav, .nav-link{
        color:#adb1b8;
        &:hover{
            color: white
        }
    }
`

export default function Navibar(){
const [show,setShow] = useState(false);
const handleShow = () => setShow(true);
const handleClose = () => setShow(false);

    return(
    <>
    <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">  
            <Container>
            <Navbar.Brand> Web Dev</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav classname='me-auto'>
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                    <Nav.Link><Link to="/about">About</Link></Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="primary" classname='me-2'  onClick={handleShow}>Log In</Button>
                    <Button variant="primary"  onClick={handleShow}>Sign Out</Button>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </Styles>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Log in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>  
                    <Form.Group controlId='fromBasicEmail'>
                        <Form.Label > 
                            Email Adress
                        </Form.Label>
                        <Form.Control tipe="email" placeholder='Enter email' />
                        <Form.Text className='text-muted'>We`ll never share you Imail</Form.Text>
                    </Form.Group>

                    <Form.Group controlId='fromBasicPassWord'>
                        <Form.Label > 
                            PassWord
                        </Form.Label>
                        <Form.Control tipe="password" placeholder='Enter password' />
                    </Form.Group>

                    <Form.Group controlId='fromBasicCheckBox'>
                        <Form.Check tipe="checkbox" label="Remember me" />
                    </Form.Group>
                </Form>
            </Modal.Body>
         </Modal>
    </>
)}
