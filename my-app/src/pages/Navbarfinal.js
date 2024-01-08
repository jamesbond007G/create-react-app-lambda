import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import 
import './Navbarfinal.css'
function Navbarfinal() {
  return (
    <Navbar  expand="lg" className="bg-body-tertiary" fixed='top'>
      <Container>
        <Navbar.Brand href="">Shreema Art World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {/* <Nav.Link as={Link} to="/services">Services</Nav.Link> */}
            <NavDropdown title="Products" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/candle">Candle</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/realistic">Realistic Portraits</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/colored">Colored Portraits</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mural">Mural</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/canvas">Medium Oil Acrylic Paintings</NavDropdown.Item>


              <NavDropdown.Item href="exceptional"></NavDropdown.Item>

              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="contact">Contact Us</Nav.Link>
            <Nav.Link eventKey={2} href="about">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarfinal;
