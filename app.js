const hapi=require('hapi')
require('env2')('./.env')
const config=require('./config/index')
const indexRoutes=require('./routes/index')
const ordersRoutes=require('./routes/orders')
const shopsRoutes=require('./routes/shops')
const usersRoutes=require('./routes/users')
const hapiSwagger=require('./plugins/hapi-swagger')
const hapiPagination=require('./plugins/hapi-pagination')

const server=new hapi.Server()

server.connection({
  port:config.port,
  host:config.host
})

const init=async ()=>{
  await server.register([
    ...hapiSwagger,
    hapiPagination
  ])
  server.route([
    ...indexRoutes,
    ...ordersRoutes,
    ...shopsRoutes,
    ...usersRoutes
  ])
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

init()