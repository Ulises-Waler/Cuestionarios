import React from "react";
import { useState } from "react"
import { Card, Container, Form, Button, Modal, Nav, Navbar} from "react-bootstrap";


 export const Login = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [data, setData] = useState({})
    const onChangeregister = (e)=>{
            e.preventDefault();
            const nData = data;
            nData[e.target.name] = e.target.value;
            setData(nData);
            console.log(nData);
    }
    const onSubmit= () => {
            console.log(data)
    }
  
  return (
    <Container>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">....</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">....</Nav.Link>
                    <Nav.Link href="#link">....</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Card className="mt-3">
            <Card.Body>
                <Card.Title>Inicio de Sesion</Card.Title>
                <Form>
                  <Form.Group>
                    <Form.Label>Correo</Form.Label>
                      <Form.Control onChange={onChangeregister} name="email" type="text" placeholder="Escriba su correo electronico"/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                      <Form.Control onChange={onChangeregister} name="password" type="password" placeholder="Escriba su contraseña"/>
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={()=>{onSubmit()}}>Ingresar</Button>
                  <Button variant="primary" onClick={handleShow}>Registrarse</Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Registro</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group className="mb-3" controlId="email">
                          <Form.Label>Correo</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                          <Form.Label>Nombre</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Escribe tu nombre"
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                          <Form.Label>Contraseña</Form.Label>
                          <Form.Control
                            type="Password"
                            placeholder="Escribe una contraseña"
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password_Confirmation">
                          <Form.Label>Confirma Contraseña</Form.Label>
                          <Form.Control
                            type="Password"
                            placeholder="Vuelve a escribir tu constraseña"
                            autoFocus
                          />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Aceptar
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Form>
            </Card.Body>
        </Card>
    </Container>
  );
}

export default Login;
