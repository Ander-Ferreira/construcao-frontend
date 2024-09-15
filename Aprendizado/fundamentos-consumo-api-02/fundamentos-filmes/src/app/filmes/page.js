'use client'

//Primeiro de tudo, construa a conexão com a api, faça um services/apiMovies.js, use o axios.

/*Bizu, antes de começarmos nossa api, note que ela será uma api grande,
e com várias sessões, então para melhor estruturá-la,
basta seguir o modelo do professor, e também a url da api
para organizar suas pastas, exemplo, já criei a pasta filmes,
mas para acessas os detalhes dos filmes, preciso de seu id,
ou seja, preciso que minha pasta [id] esteja dentro da pasta filmes,
a url já mostra isso se reparar -> https://api.themoviedb.org/3/movie/{movie_id}
*/


import { useEffect, useState } from "react"
import Pagina from "../components/Pagina"
import apiMovie from "@/services/apiMovie"
import { Button, Card, Col, Row } from "react-bootstrap"

export default function () {

    
    //Meu useState que irá permitir que meu array de filmes seja atualizado
    const [filmes, setFilmes] = useState([])

    //Meu useEffect para fazer a requisição para a api
    useEffect(() => {

        apiMovie.get('movie/popular').then(resultado => {

            setFilmes(resultado.data.results)
        })

    }, [])


    return (
        <>

            <Pagina titulo='Filmes'>


               <Row>

                {filmes.map(item => (


                     <Col md={4}>


                    <Card>
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                <p>Titulo Original: {item.original_title}</p>
                                <p>Popularidade: {item.popularity}</p>
                            </Card.Text>
                            {/*Só termine de linkar o button quando fizer a página dinâmica de [id]
                            dentro de filmes, caso tenha alguma dúvida de como a página dinâmica funciona,
                            acesse fundamentos-consumo-api do meu github*/}

                            {/*Abaixo estou pegando o id de cada item com o nosso loop, e indo para a página dinâmica que fizemos, será gerada uma página dinâmica para cada item.id*/}

                            
                            <Button variant="primary" href={`filmes/${item.id}`}>Detalhes</Button>
                        </Card.Body>
                    </Card>


                    </Col>


                ))} {/*Fim do loop*/}


                   </Row>










            </Pagina>




        </>
    )
}