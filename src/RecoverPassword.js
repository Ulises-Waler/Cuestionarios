import React from "react";
import { useState } from "react"
import { Card, Container, Form, Button, Nav, Navbar } from "react-bootstrap";


 export const RecoverPassword = () => {
    const [email, setEmail] = useState ("");
    const onChange = (e) =>{
        e.preventDefault();
        setEmail(e.target.value)
    }

    const onSubmit = () => {
        console.log(email)
      }

    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/create-questionnaire">Crear Cuestionario</Nav.Link>
            <Nav.Link href="/recover-password">Recuperar Contraseña</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Container>
      </Navbar>
        <Container className="mt-4">
            <Card>
                <Card.Body>
                    <Card.Title>Recuperar Contraseña</Card.Title>
                    <Form.Control className="mt-3" type="email" name ="email" placeholder="Ingresa tu correo" onChange={onChange}></Form.Control>
                    <div className="text-end">
                    <Button variant="primary" className="mt-3" onClick={() => onSubmit()}>Recuperar Contraseña</Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
        </>
    );
};

export default RecoverPassword;

