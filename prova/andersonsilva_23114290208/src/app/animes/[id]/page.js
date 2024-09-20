'use client'

import Pagina from "@/app/components/Pagina"
import apiAnimes from "@/services/apiAnimes"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button, Card, CardBody, Col, Row } from "react-bootstrap"
import { FaArrowLeft } from "react-icons/fa6";
import { MdZoomOutMap } from "react-icons/md";

export default function ({params}) {

    const [detalhes, setDetalhes] = useState({})

    useEffect(() => {


        apiAnimes.get(`/anime/${params.id}`).then(resultado => {

            setDetalhes(resultado.data.data)




        })





    }, [])

    return (<>



        

        <Pagina titulo={detalhes.title}>

        {detalhes.mal_id &&

            <Row>

                <Col className="mt-3" md={4}>


                <Card bg="danger" text="white" className="mb-3">
                <Card.Header bg='Danger'>Foto</Card.Header>
                        <CardBody bg='Light'><Card.Img variant="top" src={detalhes.images.jpg.image_url} /></CardBody>

                        
                    </Card>


                    <Link href={`/animes`}><Button className="mt-3" variant="success"><FaArrowLeft /> Voltar</Button></Link>

                </Col>

                <Col>


                 <Card bg="danger" text="white" className="mb-3">
                    <Card.Header bg='Danger'>


                        {detalhes.title}



                    </Card.Header>


                    <Card.Body>

                        <p><b>Episódios: </b>{detalhes.episodes} </p>
                        <p><b>Status: </b>{detalhes.status}</p>
                        <p><b>Duração: </b>{detalhes.duration}</p>
                        <p><b>Score: </b>{detalhes.score}</p>

                        <p>{detalhes.synopsis}</p>





                    <a target="blank" href='https://cdn.myanimelist.net/images/anime/4/19644l.webp'><Button variant="primary"> <MdZoomOutMap />Ampliar</Button></a>
                    </Card.Body>
                        

                        
                    </Card>
                
                
                
                </Col>

                


            </Row>




}











        </Pagina>










    </>)
}