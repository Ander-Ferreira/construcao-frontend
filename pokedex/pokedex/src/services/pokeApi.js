const {default: axios} = require('axios')

const apiPoke = axios.create({

    baseURL:'https://pokeapi.co/api/v2/',
    


})


export default apiPoke