'use client'

import Pagina from "@/app/components/Pagina"
import apiMovie from "@/services/apiMovie"
import { useEffect, useState } from "react"
import { Card, Col, Image, Row } from "react-bootstrap"

export default function Temporada({ params }) {

    //Construindo nosso array dinâmico atualizável

    const [temporada, setTemporada] = useState({})

    //Construindo a nossa requisição com useEffect

    useEffect(() => {

        //Como na url teremos dois parâmetros, precisamos colocar o params.temporada

        //Bizu, é só seguir a url e substituir depois do ponto com o nome da sua pasta de página dinâmica

        apiMovie.get(`tv/${params.id}/season/${params.temporada}`).then(resultado => {

            setTemporada(resultado.data)

        })
    })




  return(<>

   {temporada.id &&


  <Pagina titulo= {temporada.name}>

    <Row>
        <Col className="mt-3" md={3}>
        
        <Image fluid src={'https://image.tmdb.org/t/p/w500/' + temporada.poster_path}></Image>
        
        </Col>

        <Col className="mt-3">

        <p><b>Temporada: </b> {temporada.season_number}</p>
        <p><b>Total de votos: </b>{temporada.vote_average}</p>
        <p><b>Sinopse: </b>{temporada.overview}</p>
        
        
        </Col>

    
    </Row>

    <Row>
        <h1>Episódios</h1>
       



    {temporada.episodes.map(item=>(


<Col className="mt-3" md={4}>

<Card>
  <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/'+item.still_path} />
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    </Card.Body>
</Card>
    
    
    
    
    
    
    </Col>



    ))} {/*Fim do meu loop*/}
       





    </Row>



    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 















































  </Pagina>
  
  
  
   }
  
  
  
  </>)

}