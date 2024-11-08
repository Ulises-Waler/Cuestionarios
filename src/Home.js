import React from "react";
import { Button, Card, Container, Table} from "react-bootstrap";
import { useState } from "react";
import Header from "./Header";



export const Home = () => {
    const [datos, setData] = useState({});
    const [newUser, setNewUser] = useState({ name: '', ap: '', correo: '' });
    const [users, setUsers] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleAddUser = () => {
        setUsers([...users, newUser]);
        setNewUser({ name: '', ap: '', correo: '' });
    };

    const Takeit = (e) => {
        e.preventDefault();
        let nData = datos;
        nData[e.target.name] = e.target.value;
        setData(nData);
    };

    const onSubmit = () => {
        console.log(datos);
    };

    return (
        <>
            <Header></Header>

            <Container>
                <Card style={{boxShadow:'0 4px 8px rgba(128,0,128,0.6)'}} className="mt-3">
                    <Card.Body>
                        <Card.Title>Lista de Usuarios</Card.Title>
                        <Table striped bordered hover variant="dark" className="mt-4">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Correo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Angel</td>
                                    <td>Padilla</td>
                                    <td>utm23090741@utma.edu.mx</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Itzel</td>
                                    <td>Rivera</td>
                                    <td>utm23090687@utma.edu.mx</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Erik</td>
                                    <td>Barba</td>
                                    <td>utm23090777@utma.edu.mx</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Ulises</td>
                                    <td>Okkotsu</td>
                                    <td>utm23090479@utma.edu.mx</td>
                                </tr>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{index+5}</td>
                                        <td>{user.name}</td>
                                        <td>{user.ap}</td>
                                        <td>{user.correo}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>

            <Container>
                <Card style={{boxShadow:'0 4px 8px rgba(0, 255, 255, 0.8)'}} className="mt-3 mb-4">
                    <Card.Body>
                        <Card.Title>Agregar Usuario</Card.Title>
                        <Table>
                            <tbody>

                            </tbody>
                        </Table>
                        <h2>Agregar Nuevo Usuario</h2>
                        <Card className="mt-3">

                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                value={newUser.name}
                                onChange={handleInputChange}
                                className="mt-2"
                            />
                            <input
                                type="text"
                                name="ap"
                                placeholder="Apellido"
                                value={newUser.ap}
                                onChange={handleInputChange}
                                className="mt-2"
                            />
                            <input
                                type="email"
                                name="correo"
                                placeholder="Correo"
                                value={newUser.correo}
                                onChange={handleInputChange}
                                className="mt-2"
                            />
                        </Card>
                        <div className="text-end" >
                            <Button  className="mt-3" variant="success" onClick={handleAddUser}>Agregar Usuario</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default Home;