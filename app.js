const hapi=require('hapi')
require('env2')('./.env')
const config=require('./config/index')
const indexRoutes=require('./routes/index')
const ordersRoutes=require('./routes/orders')
const shopsRoutes=require('./routes/shops')
const hapiSwagger=require('./plugins/hapi-swagger')

const server=new hapi.Server()

server.connection({
  port:config.port,
  host:config.host
})

const init=async ()=>{
  await server.register([
    ...hapiSwagger
  ])
  server.route([
    ...indexRoutes,
    ...ordersRoutes,
    ...shopsRoutes
  ])
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

init()