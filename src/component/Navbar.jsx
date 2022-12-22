import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/NavStile.css'


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Biografia</Nav.Link>
            <Nav.Link href="#Conocimientos">Conocimientos</Nav.Link>
            <Nav.Link href="#Datos">Datos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
      );

  }
export default ColorSchemesExample;