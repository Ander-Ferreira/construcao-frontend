import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Pagina(props){

    return(

        <>

<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Filmes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Api Filmes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/filmes">Em cartaz</NavDropdown.Item>
              <NavDropdown.Item href="/series/">Séries</NavDropdown.Item>
             </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
      <div className="bg-secondary text-white text-center p-3">
        
        <h1>{props.titulo}</h1>

    </div>

        <Container>{props.children}</Container>     
        
        
        
        </>
    )
}