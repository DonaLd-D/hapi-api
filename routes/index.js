const {headersDefine}=require('../utils/router-helper');

module.exports=[
  {
    method:'GET',
    path:'/',
    handler:(req,res)=>{
      // console.log(req.auth)
      res('hello hapi')
    },
    config:{
      tags:['api','tests'],
      description:'测试hello-hapi',
      validate:{
        ...headersDefine
      },
    }
  }
]