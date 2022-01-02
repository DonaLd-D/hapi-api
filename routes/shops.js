module.exports=[
  {
    method:'GET',
    path:'/shops',
    handler:async (req,res)=>{
      res()
    },
    config:{
      tags:['api','shops'],
      description:'获取店铺列表'
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