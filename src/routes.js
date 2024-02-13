import {Router} from"express"
const { response } = require("./app")

const routes = new Router()

routes.get('/users',(request,response) => {
    return response.json({message: "ola mundo"})

})

routes.post('/category',(request,response) => {
    return response.json({message: "bebidas"})

})
export default routes