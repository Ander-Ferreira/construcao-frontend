
'use client'
import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Page() {

    //A linha de código abaixo procura o "nome" em todo meu código para mudar com a função setNome, o userState precisa ser importado
    const [nome, setNome] = useState('Anderson')

    function alterarNome() { 
                     //If ternário, se Anderson for verdadeiro, mude o nome para Anderson da Silva Ferreira, se for falso, deixe 'Anderson'                        
           const novoNome =  nome == 'Anderson'  ? 'Anderson da Silva Ferreira' : 'Anderson'
           
           setNome(novoNome)
    }

    return (
        <>
            <Pagina titulo='Titulo'></Pagina>
             <h1>{nome}</h1>
             {/*Chamo minha função de alterar nome ao clicar no meu botão*/}
            <Button onClick={alterarNome}>Alterar Nome</Button>
        </>
    )

}

