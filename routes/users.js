const JWT=require('jsonwebtoken')

module.exports=[{
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
}]