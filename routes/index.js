module.exports=[
  {
    method:'GET',
    path:'/',
    handler:(req,res)=>{
      res('hello hapi')
    },
    config:{
      tags:['api','tests'],
      description:'测试hello-hapi'
    }
  }
]