'use strict';

const Controller = require('egg').Controller;
const sendRes=require("../until/sendRes");

class ReginserController extends Controller {
  async index() {
    const { ctx } = this;
    const {user,pwd,role}=ctx.request.body
    const reginserdata=await ctx.service.user.reqreginser(user,pwd,role);
    if(reginserdata.affectedRows===1){
        // ctx.body = {code:2,msg:"注册成功"};
    ctx.body=sendRes(2,"注册成功")

        
    }
  }
}
module.exports = ReginserController;
