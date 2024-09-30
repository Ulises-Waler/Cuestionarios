import React from "react";
import { useState } from "react"
import { Card, Container, Form, Button, Nav, Navbar} from "react-bootstrap";


 export const Login = () => {
   
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
    <>
    
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
                  <Button className="mt-3" variant="primary" type="submit" onClick={()=>{onSubmit()}}>Ingresar</Button>
                </Form>
            </Card.Body>
        </Card>
    </Container>
    </>
  );
}

export default Login;
