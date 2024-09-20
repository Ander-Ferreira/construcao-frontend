const {default: axios} = require('axios')

const apiMovie = axios.create({


    baseURL:'https://api.themoviedb.org/3/',
    
    /*Os dados vem por padrão em inglês dessa api,
   Então precisaremos de um parâmetro para específicar nossa língua para pegarmos os dados em português
    */
        
    params:{language: 'pt-BR'},

    
    /*Esta api também precisa de uma autorização para acessarmos ela,
    então precisamos fazer uma conta no site themoviedb.org para pegarmos nosso token e chave de api,
    usaremos o token em nosso arquivo .env e a chave para acessar o json por nosso navegador.
    
    Exemplo de como acessar o json pelo navegador: https://api.themoviedb.org/3/movie/popular?api_key=sua_chave_da_api*/

    headers:{

        Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY /*NEXT_PUBLIC_ precisa 
        estar no início do nome da api do arquivo .env também, para conseguirmos 
        acessar nossos dados e não dar erro 401.*/
    }


})

//Por fim esportamos  nossa apiMovie para podermos usar

export default apiMovie