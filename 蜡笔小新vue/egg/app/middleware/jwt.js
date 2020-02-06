const jwt=require("jsonwebtoken");
const url=require("url");

function verfy(token,key){
    return new Promise(res=>{
        jwt.verify(token,key,(error,result)=>{
            if(error) throw error;
            res(result)
        })
    })
}


module.exports=(options)=>{
    return  async (ctx,next)=>{
        //  console.log(options)
         if(options.includes(url.parse(ctx.url).pathname)){
             await next();
             return 
         }
         const token=ctx.get("autotoken");
        //  console.log(token)
         if(!token){
             ctx.body={code:1,msg:"没有权限，请先登录"}
             return
         }
         let info;
         try {
             info=await verfy(token,"wanzi");
             
         } catch (error) {
            ctx.body={code:1,msg:"权限错误"}
            return        
         }

         ctx.info=info
        await next()
    }

}