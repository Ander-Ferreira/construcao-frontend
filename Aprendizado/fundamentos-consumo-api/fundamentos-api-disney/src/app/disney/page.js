'use client'

import { useEffect, useState } from "react"
import Pagina from "../components/Pagina"
import apiDisney from "@/services/apiDisney"

// Primeiro de tudo, crie a conexão com a API, exemplo services/apiDisney.js usando a biblioteca axios

export default function Disney() {

    /* O useState é um hook do React que nos permite atualizar nossa variável de personagens
    com os dados que pegarmos com o setPersonagens. Estou inicializando com um array vazio 
    porque estarei pegando um array da API. Se fosse para pegar um objeto, eu colocaria 
    um objeto vazio dentro do useState({}). */
    const [personagens, setPersonagens] = useState([]) //não se esqueça de importar o useState

    // Construo minha requisição com a API usando o useEffect, outro hook do React.
    useEffect(() => { //Não se esqueça de importar o useEffect

        // ('character') é o endpoint que eu quero alcançar da minha API. Consulte a documentação para ver qual endpoint deseja.
        apiDisney.get('character').then(resultado => {

            /* Aqui estou acessando o JSON da API. No caso, se eu quiser usar mais dados do JSON, 
            não especifico o segundo data, ficando apenas resultado.data. */
            setPersonagens(resultado.data.data)

        })

    }, []) // Coloco um array vazio aqui porque quero que este trecho de código carregue apenas uma vez, quando a página for renderizada.

    return (
        <>
            <Pagina titulo='Disney'>
                {/* Detalhe importante: toda vez que pegarmos dados provenientes de um array,
                que é o caso agora, teremos que percorrer este array. Para listar todos os seus dados,
                usamos o map para percorrer nosso array de personagens. */}
                
                {personagens.map(item => (
                    /* Dentro do nosso map utilizaremos os nomes dos objetos da API que
                    queremos listar. Esses objetos podem ser consultados na documentação da API,
                    geralmente em JSON. Consulte, por exemplo: https://api.disneyapi.dev/character */
                    
                    <p key={item._id}> {/* O primeiro item do nosso loop map precisa de um identificador único
                    para não dar erro no console. Não é um erro impeditivo, mas vamos evitá-lo.
                    Estou utilizando o _id que peguei no JSON da Disney, pois um id é único. */}
                    
                        {item.name} {/* Aqui quero pegar os nomes dos personagens da Disney. Então faço meu item
                        percorrer todos os nomes e listá-los, ficando assim item.name. Este name eu peguei no JSON da Disney. */}
                    </p>
                ))}
            </Pagina>
        </>
    )
}
