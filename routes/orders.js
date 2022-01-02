module.exports=[
  {
    method:'post',
    path:'/orders',
    handler:async (req,res)=>{
      res()
    },
    config:{
      tags:['api','orders'],
      description:'创建订单'
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
      description:'支付某条订单'
    }
  }
]