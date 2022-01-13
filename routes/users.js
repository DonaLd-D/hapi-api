const { default: axios } = require('axios')
const Joi = require('joi')
const JWT=require('jsonwebtoken')

module.exports=[
  {
    method:'post',
    path:`/users/createJWT`,
    handler:async (req,res)=>{
      try{
        const generateJWT=jwtInfo=>{
          const payload={
            userId:jwtInfo.userId,
            exp:Math.floor(new Date().getTime()/1000)+7*24*60*60,
          }
          return JWT.sign(payload,process.env.JWT_SECRET)
        }
        res(generateJWT({userId:1}))
      }catch(err){
        console.log(err);
      }
    },
    config:{
      tags:['api','users'],
      description:'用于测试的用户JWT签发',
      auth:false
    }
  },
  {
    method:'post',
    path:'/users/wxLogin',
    handler:async(req,res)=>{
      const appid=process.env.wxAppid
      const secret=process.env.wxSecret
      const {code,encrypedData,iv}=req.payload

      const response=await axios({
        url:'https://api.weixin.qq.com/sns/jscode2session',
        method:'get',
        params:{
          appid,
          secret,
          js_code:code,
          grant_type:'authprization_code',
        }
      })
      const {openid,session_key}=response.data;
      res()
    },
    config:{
      auth:false,
      tags:['api','users'],
      validate:{
        payload:{
          code:Joi.string().required().description('微信用户登录的临时code'),
          encrypedData:Joi.string().required().description('微信用户信息encryptedData'),
          iv:Joi.string().required().description('微信用户信息iv')        
        }
      }
    }
  }
]