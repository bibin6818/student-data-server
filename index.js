const jsonServer = require('json-server')
const studentServer = jsonServer.create()
const middleware = jsonServer.defaults()
const route = jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT

studentServer.use(middleware)
studentServer.use(route)
studentServer.listen(PORT,()=>{
    console.log(`Student Data server Started at Port ${PORT} and waiting for client request`);
})
