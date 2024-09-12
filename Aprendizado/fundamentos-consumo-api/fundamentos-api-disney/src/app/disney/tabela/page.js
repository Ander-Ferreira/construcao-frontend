'use client'

import Pagina from "@/app/components/Pagina"
import apiDisney from "@/services/apiDisney"
import { useEffect, useState } from "react"
import { Col, Image, Row, Table } from "react-bootstrap"

export default function Tabela() {

    //Uso o hook useState para construir meu array e atualizá-lo, explicação em disney/page.js

    const [personagens, setPersonagens] = useState([])

    //Uso o hook useEffect para construir nossa requisição, explicação em disney/page.js

    useEffect(() => {

        apiDisney.get('character').then(resultado => {
            setPersonagens(resultado.data.data)

        })



    })


    return (
        <>
            <Pagina titulo='Tabela'>





                {/*Bizu, só colo dentro do map aquilo que eu quero repetir, que no caso
            será uma tabela, mas não quero uma nova tabela a cada item do meu array,
            e sim os dados dela a cada item, então só colocarei a parte dos dados dentro do loop,
            e o restante da tabela ficará de fora do loop*/}

         {/*Parte da tabela que não quero repetir, está fora do loop*/}
         <Table className="mt-3" striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Foto</th>
                        </tr>
                    </thead>


                    {personagens.map(item => (
                       
                       /*Parte da tabela que quero repetir para abrigar meus dados*/
                        <tbody>
                            <tr>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td><Image src={item.imageUrl} height={100} /></td>
                            </tr>
                        </tbody>

                    ))} {/*Fim do meu loop map*/}


                </Table>


            </Pagina>






        </>








    )
}