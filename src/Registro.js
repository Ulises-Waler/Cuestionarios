import React from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 


export const Registro = () => {
  const navigate = useNavigate(); 


  return (
    <Container>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Registro de Usuario</Card.Title>
          <Form>
          <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Escriba su Nombre" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Escriba su Apellido" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Correo</Form.Label>
              <Form.Control type="text" placeholder="Escriba su correo electronico" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Escriba su contraseña" />
            </Form.Group>
            <Button onClick={() => navigate("/")} className="mt-3" variant="primary">Registrar</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

