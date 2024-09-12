import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Pagina(props){

    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Fundamentos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Disney" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cards</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Tabelas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Carrossel</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

     <div className="bg-secondary text-white text-center p-3">

        <h1>{props.titulo}</h1>
      </div>


      <Container>
         
        {props.children}

      </Container>
    
            
        
    </>
   )






}