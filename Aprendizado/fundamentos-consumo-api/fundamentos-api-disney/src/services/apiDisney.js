//Abaixo usamos o esquema da bibliteca axios para conectar a nossa api

const {default: axios} = require('axios')

const apiDisney = axios.create({

    baseURL: 'https://api.disneyapi.dev' //Aqui vai a url base da api que queremos consumir, veririfque a documentação da api que deseja consumir para pegar a url base dela.



})

//Feito o esquema de conexão, exporto a api para usarmos, no caso usarei esta api em disney/

export default apiDisney