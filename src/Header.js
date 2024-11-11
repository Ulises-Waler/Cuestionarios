import React from "react";
import { Button, Container, Nav, Form, Navbar } from "react-bootstrap";

export const Header=()=>{
    return (
        <>
             <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/home">Home</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/create-questionnaire">Crear Cuestionario</Nav.Link>
                            <Nav.Link href="/grafica">Respuestas Graficadas</Nav.Link>
                            <Nav.Link href="/recover-password">Recuperar Contraseña</Nav.Link>
                            <Nav.Link href="/">Log out</Nav.Link>
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
        </>
    );
};

export default Header