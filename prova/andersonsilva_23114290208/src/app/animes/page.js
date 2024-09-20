'use client'

import { useEffect, useState } from "react"
import Pagina from "../components/Pagina"
import apiAnimes from "@/services/apiAnimes"
import { Button, Table } from "react-bootstrap"
import Link from "next/link"
import { IoSearchOutline } from "react-icons/io5";


export default function Page() {

    //Construo meu hook de atualização de arrawy
    const [animes, setanimes] = useState([])



    //Meu hook de requisição
    useEffect(() => {

        apiAnimes.get('/anime').then(resultado => {

            setanimes(resultado.data.data)



        })

    }, [])


    return (
        <Pagina titulo='Animes'>


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Detalhes</th>
                        <th>Título</th>
                        <th>Duração</th>
                        <th>Ano</th>
                    </tr>
                </thead>
                <tbody>




                    {animes.map(item => (


                        <tr>
                            <td><Link href={`animes/${item.mal_id}`}><IoSearchOutline className="text-primary" /></Link>{item.mal_id}</td>
                            <td>{item.title}</td>                            
                            <td>{item.duration}</td>
                            <td>{item.year}</td>
                            
                        </tr>


                    ))}


                </tbody>
            </Table>

        </Pagina>

    )

}