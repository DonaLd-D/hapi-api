const hapi=require('hapi')
require('env2')('./.env')
const config=require('./config/index')
const indexRoutes=require('./routes/index')

const server=new hapi.Server()

server.connection({
  port:config.port,
  host:config.host
})

const init=async ()=>{
  server.route([
    ...indexRoutes
  ])
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

init()