const Joi = require("joi")
const models=require('../models')
const {paginationDefine}=require('../utils/router-helper')

module.exports=[
  {
    method:'get',
    path:'/shops',
    handler:async (req,res)=>{
      try{
        const {rows:results,count:totalCount}=await models.shops.findAndCountAll({
          attributes:['id','name'],
          limit:req.query.limit,
          offset:(req.query.page-1)*req.query.limit,
        })
        res({results,totalCount})
      }catch(err){
        console.log(err)
      }
    },
    config:{
      tags:['api','shops'],
      description:'获取店铺列表',
      validate:{
        query:paginationDefine,
      }
    }
  },
  {
    method:'get',
    path:`/shops/{shopId}/goods`,
    handler:async (req,res)=>{
      try{
        const {rows:results,count:totalCount}=await models.goods.findAndCountAll({
          where:{
            shop_id:req.params.shopId,
          },
          attributes:['id','name'],
          limit:req.query.limit,
          offset:(req.query.page-1)*req.query.limit,
        })
        res({results,totalCount})
      }catch(err){
        console.log(err)
      }
    },
    config:{
      tags:['api','shops'],
      description:'获取店铺的商品列表',
      validate:{
        params: {
          shopId: Joi.string().required().description('店铺的id'),
        },
        query:paginationDefine,
      }
    }
  }
]