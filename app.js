const hapi=require('hapi')
require('env2')('./.env')
const hapiAuthJWT2=require('hapi-auth-jwt2')
const config=require('./config/index')

const indexRoutes=require('./routes/index')
const ordersRoutes=require('./routes/orders')
const shopsRoutes=require('./routes/shops')
const usersRoutes=require('./routes/users')

const hapiSwagger=require('./plugins/hapi-swagger')
const hapiPagination=require('./plugins/hapi-pagination')
const pluginHapiAuthJWT2=require('./plugins/hapi-auth-jwt2')

const server=new hapi.Server()

server.connection({
  port:config.port,
  host:config.host
})

const init=async ()=>{
  await server.register([
    ...hapiSwagger,
    hapiPagination,
    hapiAuthJWT2,
  ])
  pluginHapiAuthJWT2(server)
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