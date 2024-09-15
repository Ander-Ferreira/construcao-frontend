'use client'

import Pagina from "@/app/components/Pagina"
import apiMovie from "@/services/apiMovie"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button, Card, Col, Image, Row } from "react-bootstrap"

export default function Detalhes({ params }) {

    const [filme, setFilme] = useState({})

    const [atores, setAtores] = useState([])  /*useState para construirmos nosso array de atores, 
    faça só depois de filme ter dado certo */


    //Bizu, um useEffect abriga mais de uma requisição, não precisa fazer outro para fazer outra requisição!

    useEffect(() => {

        //Requisição de filmes
        apiMovie.get(`movie/${params.id}`).then(resultado => {

            setFilme(resultado.data)
        })


        //Aqui começa a nossa requisição para atores, deixe para fazer após a requisição de filme ter dado certo

        /* Como teremos duas sessões com endpoint's diferentes,
        precisamos fazer uma nova requisição, siga o endereço que a documentação
        da api te passar, se possuir alguma dúvida quanto ao esquema de params,
        cheque fundamentos-consumo-api do meu github*/

        //Requisição de atores
        apiMovie.get(`movie/${params.id}/credits`).then(resultado => {

            setAtores(resultado.data.cast)
        })

    }, [])




    return (
        <>

            {filme.id &&

                <Pagina titulo={filme.title}>

                    <Row>

                        <Col className="mt-4" md={4}>

                            {/*Para exibir imagem desta api, 
                            precisaremos da url base da imagem + o atributo final, que é dado
                            pelo json que a api nos oferece, a url base sempre tem que estar presente,
                            não basta só o atributo que estamos pegando do json*/}

                            <Image fluid src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path}></Image>

                        </Col>

                        <Col className="mt-4" md={8}>

                            <p><b>Titulo:</b> {filme.original_title} </p>
                            <p><b>Popularidade: </b> {filme.popularity}</p>
                            <p><b>Orçamento: </b> {filme.revenue}</p>
                            <p><b>Gêneros: </b>

                                {/*Aqui, para cada item (ou seja, cada gênero) no array filme.genres, 
              estamos retornando item.name, com o map, ou eu posso especificar logo
              o que quero apontando para o que quero retornar, exemplo: 
              
              {filme.genres.map(item => item.name)

              ou eu posso fazer em escopo, como temos feito até agora,
              então continuarei o nosso map com escopo.*/}


                                {filme.genres.map(item => ( //E como estamos acessando um array que fica dentro do objeto filme, o filme vem antes de genres.

                                    item.name //Aqui retorno o item.um_atributo

                                )).join(', ')} {/*Fim do loop*/}

                                {/*O join como o nome já diz, concatena as strings retornadas de nosso array com uma vírgula e um espaço, a vírgula e o espaço precisamos passar dentro do join*/}

                            </p>
                            <p><b>Sinopse: </b> {filme.overview}</p>
                            <Button type="primary" href='/filmes'>Voltar</Button>

                        </Col>
               </Row>

               
              
              {/*Para construirmos os atores, vamos ter que pegar um outro endpoint,
ou seja, vamos ter que fazer um novo get para atores, podemos
usar o mesmo useEffect*/}

               
               <h1>Atores</h1>

                    <Row>

                        {atores.map(item => (

                            <Col className="mt-2" md={3}>

                                <Card>
                                   
                                    {/*Aqui faço a conexão com a página de atores que criamos,
                       note que baseamos em item.id, pegaremos o id do ator ao final
                       da url de /atores/, já que já temos nossa página de atores dinâmica agora.*/}

                                    <Link href={`/atores/${item.id}`}> {/*Não esqueça do barra ao final!*/}
                                    <Card.Img src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
                                    </Link>
                                </Card>
                            
                            </Col>



                        ))} {/*Fim do loop*/}

                    </Row>

                </Pagina>

            }











        </>
    )
}