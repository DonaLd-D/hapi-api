const Joi = require("joi")

module.exports=[
  {
    method:'post',
    path:'/orders',
    handler:async (req,res)=>{
      res()
    },
    config:{
      tags:['api','orders'],
      description:'创建订单',
      validate:{
        payload:{
          goodList:Joi.array().items(
            Joi.object().keys({
              good_id:Joi.number().integer(),
              count:Joi.number().integer()
            })
          )
        }
      }
    }
  },
  {
    method:'post',
    path:'/orders/{orderId}/pay',
    handler:async (req,res)=>{
      res()
    },
    config:{
      tags:['api','orders'],
      description:'支付某条订单',
      validate:{
        params:{
          orderId:Joi.string().required()
        }
      }
    }
  }
]