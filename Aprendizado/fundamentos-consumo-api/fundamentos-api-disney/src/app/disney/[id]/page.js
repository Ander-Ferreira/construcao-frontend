'use client'

/*Esta é uma página dinâmica, páginas dinâmicas funcionam para gerar uma página
para cada item pesquisado usando parâmetros e por exemplo, uma id.*/

/*Para construirmos uma página dinâmica, precisamos começar por colocar no nome de nossa nova
pasta desta forma: [nome_da_pasta], e então colocá-la dentro da pasta que queremos que este dinâmismo aconteça,
neste caso, quero que este dinâmismo aconteça dentro da pasta disney, para que toda vez que eu colocar disney/123 ou 
disney/algum_id irá me gerar uma página dinâmica.*/

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";

/*Note que agora estaremos trabalhando com {params}
como parâmetro de nossa função, esse {params} será usado
como parâmetro para buscarmos um id  */

export default function personagem({ params }) {


    //Uso o hook useState para construir meu array e atualizá-lo, explicação em disney/page.js

    const [personagem, setPersonagem] = useState({}) /*Como desta vez não quero um array de objetos, e sim apenas um objeto, estarei colocando {} dentro do useState*/

    //Uso o hook useEffect para construir nossa requisição, explicação em disney/page.js

    useEffect(() => {

        apiDisney.get(`character/${params.id}`).then(resultado => {

            setPersonagem(resultado.data.data)



        })

    }, [])

    return (

        <Pagina titulo='Personagem'>

            {personagem._id && /*isto é uma condicional que precisamos para exibir nosso dados, 
            significa: se personagem._id existir, exiba o que vem abaixo.*/

                <Row className="mt-3">


                    <Col md={4}>

                        {/*Como estamos recuperando atributos diretamente do objeto, chamamos direto
                desta forma: personagem.atributo_desejado, é como eu fiz abaixo*/}

                        <Image src={personagem.imageUrl}></Image>

                    </Col>

                    <Col md={8}>

                        <p><b>Nome:</b>{personagem.name}</p>
                        <p><b>Data Descrição:</b>{personagem.name}</p>
                        <p><a target="_black" href={personagem.sourceUrl}></a></p>
                    </Col>

                    <Col md={6}>

                        <Card>
                            <Card.Header className="bg-primary text-white">Filmes</Card.Header>
                            <ListGroup variant="flush">
                                {/*Agora, como quero acessar a lista de filmes que esse personagem fez,
                                vou querer listar todo o array de filmes que este personagem fez,
                                ou seja, usarei um map para percorrer este array de filmes, toda vez que temos um array, iremos percorrê-lo com o loop map*/}

                                {/*Logo abaixo estou acessando o array de films que está dentro do objeto
                                de personagem, é por isso que personagem vem antes de films,
                                ficando assim personagem.films.map*/}

                                {personagem.films.map(item => (

                                    //Coloco o key item como item, porque cada item será único, funcionará como uma id, só lembrar das explicações de cards/page.js

                                    //Abaixo apenas chamo o item, porque quero listar todos os itens

                                    <ListGroup.Item key={item}>{item}</ListGroup.Item>

                                ))} {/*Fim do meu loop map*/}


                            </ListGroup>

                        </Card>

                    </Col>

                    <Col md={6}>

                        <Card>
                            <Card.Header className="bg-primary text-white">TvShow</Card.Header>
                           
                            <ListGroup>

                                {/*Aqui faço outro map para listar outro array
                                que está dentro do meu objeto de personagem,
                                neste caso será o array tvShows*/}

                                {personagem.tvShows.map(item => (

                                  <ListGroup.Item key={item}>{item}</ListGroup.Item>



                                ))} {/*Fim do meu loop map*/}

                            </ListGroup>
                        </Card>



                    </Col>






                </Row>




            }




        </Pagina>







    )


}