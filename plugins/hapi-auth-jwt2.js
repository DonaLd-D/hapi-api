const config=require('../config')

const validate=(decoded,req,callback)=>{
  let err;
  // const payload={
  //   userId:jwtInfo.userId,
  //   exp:Math.floor(new Date().getTime()/1000)+7*24*60*60,
  // }
  // return JWT.sign(payload,process.env.JWT_SECRET)

  const {userId}=decoded;
  if(!userId) return callback(err,false,userId)

  const credentials={userId};
  return callback(err,true,credentials)
}

module.exports=(server)=>{
  server.auth.strategy('jwt','jwt',{
    key:config.jwtSecret,
    validateFunc:validate,
  })
  server.auth.default('jwt')
}