'use client'

import Pagina from "@/app/components/Pagina"
import apiMovie from "@/services/apiMovie"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Card, Col, Image, Row } from "react-bootstrap"

export default function Ator({ params }) {

    /*Construo meu objeto atualizável com o useState, dúvidas basta ler fundamentos-consumo-api do
    meu gitHub*/

    //Isto é referente a requisição de ator
    const [ator, setAtor] = useState({})

    //Isto é referente a requisição que faremos para falar quais filmes o ator participou
    const [creditos, setCreditos] = useState([])


    //Construo minha requisição com useEffect

    useEffect(() => {

        //Requisição de ator
        apiMovie.get(`person/${params.id}`).then(resultado => {
            setAtor(resultado.data)
        })

        //Requisição de filmes que o ator partiricipou
        apiMovie.get(`person/${params.id}/movie_credits`).then(resultado=>{
            setCreditos(resultado.data.cast)
        })
    },[])





    return (<>
        {
            ator.id &&
            <Pagina titulo='Ator'>

                <Row>

                    <Col md={4}>

                        <Image fluid src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path}></Image>

                    </Col>

                    <Col>

                        <p><b>Data de Nascimento: </b> {ator.birthday} </p>
                        <p><b>Local de Nascimento: </b>{ator.place_of_birth} </p>
                        <p><b>Popularidade: </b>{ator.popularity} </p>
                        <p><b>Biografia: </b>{ator.biography} </p>

                    </Col>


                </Row>

                <Row>
                    <h1>Filmes</h1>


                    {creditos.map(item => (

                       
                       
                       <Col md={4}> 
                       
                       {/*Aqui faço a conexão com a página de filmes que criamos anteriormente,
                       note que baseamos em item.id, pegaremos o id do filme ao final
                       da url de filmes, já que já temos nossa página de filmes dinâmica.*/}
                      
                       <Link href={`/filmes/${item.id}`}> {/* /filmes/ não esqueça da primeira barra!*/}

                       <Card style={{ width: '18rem' }}>
                            <Card.Img src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />

                        </Card>
                        </Link>
                        </Col>




                    ))}










                </Row>










            </Pagina>}</>)





}