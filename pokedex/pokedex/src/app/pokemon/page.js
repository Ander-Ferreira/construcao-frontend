'use client'

import { useEffect, useState } from "react"
import Pagina from "../components/Pagina"
import apiPoke from "@/services/pokeApi"
import { Row, Table } from "react-bootstrap"
import Link from "next/link"

export default function Pokemon(){

    //Construo meu hook de atualização de arrawy
    const[pokemon, setPokemon] = useState([])

    //Meu hook de requisição
    useEffect(()=>{

        apiPoke.get('ability/').then(resultado=>{

          setPokemon(resultado.data.results)



        })




    }, [])


    return(<>
    <Pagina titulo='Habilidades'>

   
        
   

        <Row>

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Tipo</th>
          <th>Link:</th>
        </tr>
      </thead>
      <tbody>    
        
        {pokemon.map(item=>(
        
        
        <tr>
          <td></td>
          <td>{item.name}</td>
          {/*Não havia um id disponível, então peguei via name
          pokemon/${item.name}, leia o json do site da pokeApi*/}
          <td><Link href={`pokemon/${item.name}`}><p>{item.url}</p></Link></td>
         </tr>
        
        


        ))}
        
        </tbody>
    </Table>
 

        </Row>

        

        
    </Pagina>
    
    
    
    
    </>)
}