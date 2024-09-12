'use client'

import Pagina from "@/app/components/Pagina"
import apiDisney from "@/services/apiDisney"
import { useEffect, useState } from "react"
import { Carousel, Image } from "react-bootstrap"

export default function Carrossel() {

    //uso o Hook de useState para deixar nosso array pronto para receber dados, explicações em disney/page.js 
   
    const [personagens, setPersonagens] = useState([])

    
    //Faço a requisição com o useEffect, explicação em disney/page.js 
    useEffect(() => {

        apiDisney.get('character').then(resultado =>

            setPersonagens(resultado.data.data)

        )
    }, [])

    return (
        <>
            <Pagina titulo='Carrossel'>

                <Carousel className="mt-3">

                    {/*Note que não coloquei o carrosel inteiro dentro do meu loop map,
                    só coloquei a parte do carrossel que quero usar como moldura para meus dados, 
                    porque se eu colocar o carrossel inteiro dentro do meu loop map, irei ter vários
                    carrosseis.*/}
                    
                      
                    {personagens.map(item => (


                        <Carousel.Item key={item._id}>
                            
                            <Image style={{
                                width: '800px',
                                 height: 'auto',
                                  margin: '0 auto', 
                                  display: 'block'}} 
                                  src={item.imageUrl}>
                                  </Image>

                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>


                    ))} {/*Fim do meu loop map*/} 

                </Carousel> 

</Pagina>

















        </>)
}