'use client'

import Pagina from "@/app/components/Pagina"
import apiMovie from "@/services/apiMovie"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button, Card, Col, Image, Row } from "react-bootstrap"

export default function detalhesSeries({ params }) {

    //Montando meu array atualizável

    const [serie, setSerie] = useState({})


    //Monto minha requisição, qualquer dúvida favor olhar filmes/[id]/page.js

    useEffect(() => {

        apiMovie.get(`tv/${params.id}`).then(resultado => {
            setSerie(resultado.data)
        })
    }, [])



    return (
        <>

            {serie.id && /*Não esqueça desta condicional, senão o código dará erro se pegar qualquer objeto vazio, explicação em  filmes/[id]/page.js*/

                <Pagina titulo='Detalhes das Séries'>



                    <Row>

                        <Col className="mt-3" md={3}>

                            <Image fluid src={'https://image.tmdb.org/t/p/w500/' + serie.poster_path}></Image>

                        </Col>

                        <Col>

                            <p><b>Nome Original: </b> {serie.original_name}</p>
                            <p><b>Popularidade: </b> {serie.popularity}</p>
                            <p><b>Data de Lançamento: </b> {serie.first_air_date}</p>

                            <p><b>Gêneros: </b>

                                {serie.genres.map(item => (

                                    item.name

                                )).join(', ')} {/*Fim do meu loop*/}

                            </p>
                            <p><b>Sinopse: </b> {serie.overview}</p>

                        </Col>

                    </Row>


                    <Row>

                        <h1>Temporadas</h1>

                        {serie.seasons.map(item => (


                            <Col className="mt-3 sm-4">

                                <Card>

                                    <Card.Body>

                                        {/*Para que eu consiga mostrar os objetos dentro do map,
                                        preciso acessar as temporadas por um link primeiro,
                                        e dentro desta minha tag de link irei mostrar as imagens com Image, leia a documentação para pegar o link, season_number é um parâmetro que está dentro do mesmo json de series */}


                                        <Link href={`/series/${serie.id}/temporada/${item.season_number}`}>

                                        {/*Para construirmos a página de temporada, precisaremos ter mais uma [página_dinâmica], esta página dinâmica precisa estar dentro de uma página vazia dentro de [id], que é nossa página dinâmica existente,
                                        faremos isso para não dar conflito, fica assim: 
                                        [id]/pagina_vazia/[novo_id]/page.js   */}

                                            <Image className="img-fluid" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path}></Image>


                                        </Link>

                                    </Card.Body>

                                </Card>

                            </Col>



                        ))} {/*Fim do meu loop*/}

                    </Row>

                    <Row>
                        <h1>Atores</h1>


                        {serie.seasons.map(item => (

                            //Antes de avançar mais, construa a página de atores primeiro
                            // atores/[id]/page.js
                            <Link href={`/atores/${item.id}`}>

                               
                            </Link>




                        ))}





                    </Row>




                </Pagina>
            }
        </>
    )





}