'use client'

import apiMovie from "@/services/apiMovie"
import { useEffect, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import Pagina from "../components/Pagina"

export default function Series(){

//Construindo meu array atualizável com o useState

const [series, setSeries] = useState([])


useEffect(()=>{

    apiMovie.get('tv/top_rated').then(resultado=>{

        setSeries(resultado.data.results)


    })
}, [])


return(<>


 <Pagina titulo='Séries de Tv'>


    <Row>

    
    {series.map(item=>(

  <Col md={4} className="mt-3">
  
  <Card>
      <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          <p><b>Nome Original: </b> {item.original_name}</p>
          <p><b>Popularidade: </b> {item.popularity}</p>
        </Card.Text>
        <Button variant="primary" href={`series/${item.id}`}>Detalhes</Button>
      </Card.Body>

    </Card>
   
  </Col>

))} {/*Fim do meu loop*/}




  





    </Row>








 </Pagina>




















</>)
}