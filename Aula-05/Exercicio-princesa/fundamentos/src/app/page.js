//Instale o bootstrap, a documentação de como instalar está no site do bootstrap-react

'use client' //Preciso do use client para  o bootstrap não bugar e dar erro

//Minhas importações, mas primeiro não posso esquecer de importar o bootstrap no meu layout.js
//import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from "react-bootstrap"; 
import Pagina from "./components/Pagina";
import Cabecalho from "./components/Cabecalho";


//Abaixo já estou usando os componentes dinâmicos que fiz em Cabecalho.js e Pagina.js
//Então, faça os componentes de Cabecalho e Pagina antes de prosseguir!

export default function Home(){
   


    return(

        <>
        {/*Aqui estou chamando o componente página que eu fiz lá em Pagina.js*/}
        {/*O titulo="Página inicial" é o props.titulo que fiz lá em Pagina.js,
        agora posso criar vários titulos="" com meu componente <Pagina titulo=""></Pagina>*/}

        <Pagina titulo="Página Inicial">

        <Button variant="primary">Primary</Button>{' '}
        
        {/*Note que também fiz meu props.subtitulo lá em Cabecalho.js, isso torna possível adicionar
        um subtitulo no meu componente de Cabecalho. */}
        
        <Cabecalho titulo="Anderson" subtitulo="Meu Subtitulo criado com meu props.subtitulo"></Cabecalho>

        <Cabecalho titulo="Frontend"></Cabecalho>

        <Cabecalho titulo="Cabeçalho"></Cabecalho>

        <Cabecalho titulo="React"></Cabecalho>

        </Pagina>

       
        
        </>

       

    )
}