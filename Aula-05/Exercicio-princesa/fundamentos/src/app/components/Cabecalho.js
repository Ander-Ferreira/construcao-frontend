export default function Cabecalho(props) {

   return(

    <>

    <div>
        {/*Ao fazer props.titulo estou meio que criando uma classe para usar depois,
           assim quando eu posso fazer um titulo = "meu título" como atributo de uma tag
           exemplo <h1 titulo="Meu título"></h1>, é um título dinâmico */}
           
       <h1>{props.titulo}</h1> 
       <p>{props.subtitulo}</p>

    </div>
    
    </>


   )


}