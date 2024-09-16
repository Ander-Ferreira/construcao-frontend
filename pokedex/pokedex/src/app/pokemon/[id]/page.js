'use client'

import Pagina from "@/app/components/Pagina"
import apiPoke from "@/services/pokeApi"
import { useEffect, useState } from "react"
import { Col, Row, Table } from "react-bootstrap"

export default function Nomes({ params }) {


  const [nomes, setNomes] = useState({})

  useEffect(() => {

    apiPoke.get(`ability/${params.id}/`).then(resultado => {


      setNomes(resultado.data)


    })



  }, [])


  return (<>


    {nomes.id &&


      <Pagina titulo={nomes.name}>


        <Row>

         
              <Col md={4}>
              <h1>Nomes</h1>
              {nomes.names.map(item => (


               <p>{item.name}</p>



              ))} {/*Fim do primeiro loop*/}
              </Col>

              <Col>
              <h1>Entradas:</h1>
              {nomes.effect_entries.map(item => (


               

                <p> {item.effect}</p>

                



              ))}{/*fim do meu segundo loop*/}

              </Col>

            
       











        </Row>








      </Pagina>



    }


  </>)






}