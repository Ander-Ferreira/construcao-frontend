'use client'

import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import apiMovie from "@/app/services/apiMovies";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";

export default function Page({ params }) {

    const [ator, setAtor] = useState({})
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        apiMovie.get(`person/${params.id}`).then(resultado => {
            setAtor(resultado.data)
        })

        apiMovie.get(`person/${params.id}/movie_credits`).then(resultado => {
            setFilmes(resultado.data.cast)
        })
    }, [])

    return (
        <Pagina titulo={ator.name}>

            {
                ator.id &&
                <Row className="mt-3">
                    <Col sm={4}>
                        <img className="img-fluid" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                    </Col>
                    <Col sm={8}>

                        <p><b>Data Nascimento: </b>{ator.birthday}</p>
                        <p><b>Local de Nascença: </b>{ator.place_of_birth}</p>
                        <p><b>Popularidade: </b>{ator.popularity}</p>
                        <p><b>Biografia: </b>{ator.biography}</p>
                        
                    </Col>
                    <Col sm={12}>
                        <h1>Atores</h1>

                        <Row>
                            {filmes.map(item => (
                                <Col key={item.title}
                                title={item.name}
                                 className="mb-3"
                                  sm={2}>

                                    <Link href={`/filmes/${item.id}`} >
                                        
                                        <img className="img-fluid" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                                    
                                    </Link>
                                    
                                </Col>
                            ))}
                        </Row>

                    </Col>
                    
                </Row>
            }

        </Pagina>
    )
}

