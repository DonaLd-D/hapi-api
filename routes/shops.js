const Joi = require("joi")

module.exports=[
  {
    method:'GET',
    path:'/shops',
    handler:async (req,res)=>{
      res()
    },
    config:{
      tags:['api','shops'],
      description:'获取店铺列表',
      validate:{
        query:{
          limit:Joi.number().integer().min(1).default(10).description('每页的条目数'),
          page:Joi.number().integer().min(1).default(1).description('页码数')
        }
      }
    }
  },
  {
    method:'get',
    path:`/shops/{shopId}/goods`,
    handler:async (req,res)=>{
      res()
    },
    config:{
      tags:['api','shops'],
      description:'获取店铺的商品列表'
    }
  }
]