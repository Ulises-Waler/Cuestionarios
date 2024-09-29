import userEvent from "@testing-library/user-event";
import React from "react";
import { Button, Card, Container, Nav,Table } from "react-bootstrap";

export const Home = () => {

    const [datos,setData]=useState({})

    const [newUser, setNewUser] = useState({ name: '', ap: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

    const Takeit = (e)=>{
        e.preventDefault();
        let nData = datos
        nData[e.target.name] = e.target.value
        setData(e.target.value)
        setData(nData);
    }
    const onSubmit = ()=>{
     console.log(datos)
   }

    return (
        <>
            <Nav
                activeKey="/home"
               onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>

                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/">Bases</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/create-questionnaire">Crear nuevo Cuestionario</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Form>
                    <Form.Group>
                        <Form.Control onChange={Takeit} name="find" placeholder="Estoy pensando en..."></Form.Control>
                        <Button onClick={()=>onSubmit()}>Ingresar</Button> 
                    </Form.Group>
                    </Form>
                </Nav.Item>
            </Nav >

            <Container>
                <Card className="mt-3">
                    <Card.Body>
                        <Card.Title>Lista de Usuarios</Card.Title>
                        <div className="text-end">
                            <Button variant="success">Nuestros usuarios</Button>
                        </div>

                        <Table>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                        </tr>

                        <tr>
                            <td>Ulises</td>
                            <td>Escobar</td>
                            <td>utm23090479@utma.edu.mx</td>
                        </tr>

                        <tr>
                            <td>Angel</td>
                            <td>Padilla</td>
                            <td>utm23090741@utma.edu.mx</td>
                        </tr>

                        <tr>
                            <td>Erik</td>
                            <td>...</td>
                            <td>utm2309....@utma.edu.mx</td>
                        </tr>

                        <tr>
                            <td>Itzel</td>
                            <td>Rivera</td>
                            <td>utm23090687@utma.edu.mx</td>
                        </tr>
                    </Table>

                 </Card.Body>
                 </Card>
            </Container>

                <div/>

            <Container>
                <Card className="mt-3">
                    <Card.Body>
                        <Card.Title>Agregar nuevo usuario</Card.Title>
                        <Table>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                        </tr>
                        <tr key={user.name}>
                            <td>{user.name}</td>
                            <td>{user.ap}</td>
                            <td>{user.correo}</td>
                        </tr>
                        </Table>
                        
                    <input type="text" name="name" placeholder="Nombre" value={newUser.name} onChange={handleInputChange}/>
                    <input type="text" name="ap" placeholder="Apellido" value={newUser.ap} onChange={handleInputChange} />
                    <input type="correo" name="correo" placeholder="Correo" value={newUser.correo} onChange={handleInputChange}/>

                    <button onClick={handleAddUser}>Listo!</button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
