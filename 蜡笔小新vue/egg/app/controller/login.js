'use strict';
const jwt=require("jsonwebtoken");
const sendRes=require("../until/sendRes");
const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    const {user,pwd}=ctx.request.body
    const logindata=await ctx.service.user.reqlogin(user,pwd);
    if(logindata.length===0){
    // ctx.body = {code:1,msg:"没有账号，请注册"};
    ctx.body=sendRes(1,"没有账号，请注册")
    return
    }
    if(logindata[0].pwd!=pwd){
        // ctx.body = {code:2,msg:"密码错误"};
        ctx.body=sendRes(2,"密码错误")
    return
    }
    const tokens=jwt.sign({...logindata[0]},"wanzi")

    // ctx.body = {code:0,msg:"登录成功",tokens};
    ctx.body=sendRes(0,"登录成功",{tokens})

  }
}

module.exports = LoginController;
