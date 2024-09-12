'use client'

import apiDisney from "@/services/apiDisney"
import { useEffect, useState } from "react"
import { Card, Col, Row } from "react-bootstrap"
import Pagina from "../../components/Pagina"




export default function Cards() {

    //Aqui usarei o hook useState, explicação em disney/page.js

    const [personagens, setPersonagens] = useState([])

    //Aqui usarei o hook useEffect, explicação em disney/page.js

    useEffect(() => {

        apiDisney.get('character').then(resultado => {
            setPersonagens(resultado.data.data)

        })

    }, [])




    return (
        <>
            <Pagina titulo='Cards'>



                <Row> {/*Monto uma estrutura em linha com Row (Linhas), para começar a organizar nossos cards dentro desta Row*/}

                    {/*Aqui utilizarei como moldura para os meus dados o componente Cards que peguei no site do react bootstrap*/}

                    {personagens.map(item => (

                        /*Aqui coloco o card inteiro dentro do map, porque quero que ele se repita
                        como moldura para cada dado que eu pegar*/

                        /*E se eu estou mechendo com Row (linhas), também quero organizar meus Cards em Colunas,
                            e coloco o Col dentro do loop map para elas irem sendo formadas gradualmente
                            enquanto nosso array é jogado na tela com os cards*/

                        <Col md={4} key={item._id}>

                            <Card>
                                <Card.Img variant="top" src={item.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        <p><b>Criado em:</b> {item.createdAt}</p>
                                        <p><a href={item.updatedAt}>Fandom</a></p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                    ))}


                </Row>





            </Pagina>
        </>)
}