import apiAnimes from "@/services/apiAnimes";
import { useEffect, useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function Pagina(props) {


  const [generos, setGeneros] = useState([])

  useEffect(() => {

    apiAnimes.get('/genres/anime').then(resultado => {
      setGeneros(resultado.data.data)
    })
  })



  return (<>


    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/animes">Animes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/animes">Home</Nav.Link>
            <NavDropdown title="Gêneros" id="basic-nav-dropdown">



              {generos.map(item => (
                <div key= {item.mal_id}>
                  <NavDropdown.Item href="#action/3.1">
                    <p>{item.name} ({item.count})</p>
                    

                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </div>
                
                




              ))}




            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    <div className="bg-secondary text-white text-center p-3">
      <h1 >{props.titulo}</h1>
    </div>

    <Container>
      {props.children}
    </Container>





  </>)







}