import { Container, Card, } from "react-bootstrap";

const App = () => {
  const style = {
    backgroundColor: 'lightblue',
  };
  return (
    <center><div style={style}><Container className="mt-5">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Cuestionarios</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Creacion de Cuestionarios dinámicos</Card.Subtitle>
          <Card.Text>
            Se requiere una plataforma que cree cuestionarios de manera dinámica. Que el usuario pueda crear preguntas y asignarle un tipo,si va a recibir datos númericos, de texto, opcionales, etc, etc...La plataforma también debe de guardar el dueño de dicho cuestionario y mostrar en gráfica la respuestas que reciba.
          </Card.Text>
          <Card.Link href="#">Brazilian Miku</Card.Link>
          <Card.Link href="#">Yuta Okkotsu</Card.Link>
        </Card.Body>
      </Card>
    </Container>
    </div></center>
  );
}

export default App;
